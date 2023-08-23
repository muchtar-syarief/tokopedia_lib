package iterator

import (
	"context"
	"errors"

	"github.com/pdcgo/common_conf/pdc_common"
	"github.com/pdcgo/tokopedia_lib/lib/api_public"
	"github.com/pdcgo/tokopedia_lib/lib/model_public"
)

type SearchPageHandler func(items []*model_public.ProductSearch) error

func IterateSearchPage(
	api *api_public.TokopediaApiPublic,
	ctx context.Context,
	searchVar *model_public.SearchProductVar,
	handler SearchPageHandler,
) error {

	itemCount := searchVar.Rows
	currentCount := 0

Parent:
	for currentCount < itemCount {
		select {
		case <-ctx.Done():
			break Parent
		default:

			variable := &model_public.ParamsVar{
				Params: searchVar.GetQuery(),
			}
			resp, err := api.SearchProductQueryV4(variable)
			if err != nil {
				return err
			}

			products := resp.Data.AceSearchProductV4.Data.Products
			err = products.IterateChunks(10, func(ps []*model_public.ProductSearch) error {
				select {
				case <-ctx.Done():
					return ctx.Err()

				default:
					return handler(ps)
				}
			})

			if err != nil {
				if errors.Is(err, context.Canceled) || errors.Is(err, context.DeadlineExceeded) {
					break Parent
				} else {
					pdc_common.ReportError(err)
				}
			}

			itemCount = resp.Data.AceSearchProductV4.Header.TotalData
			currentCount = searchVar.Rows * searchVar.Page

			start := searchVar.Page * searchVar.Rows
			searchVar.Page += 1
			searchVar.Start = start

			if itemCount == 0 {
				break Parent
			}

		}
	}

	return nil
}
