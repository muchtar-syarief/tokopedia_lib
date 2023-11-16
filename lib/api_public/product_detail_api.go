package api_public

import (
	"errors"
	"net/url"
	"strings"

	"github.com/pdcgo/tokopedia_lib/lib/model_public"
	"github.com/pdcgo/tokopedia_lib/lib/query"
)

var ErrInvalidUrl = errors.New("invalid url")

func (api *TokopediaApiPublic) PdpGetlayoutQueryFromUrl(uristr string) (*model_public.PdpGetlayoutQueryResp, error) {
	uri, err := url.Parse(uristr)
	if err != nil {
		return nil, err
	}

	paths := strings.Split(uri.Path, "/")
	if len(paths) < 2 {
		return nil, ErrInvalidUrl
	}

	shopdomain := paths[len(paths)-2]
	pkey := paths[len(paths)-1]

	variable := model_public.PdpGetlayoutQueryVar{
		ShopDomain: shopdomain,
		ProductKey: pkey,
		LayoutID:   "",
		APIVersion: 1,
		// Tokonow: model_public.Tokonow{
		// 	ShopID:      "0",
		// 	WhID:        "0",
		// 	ServiceType: "",
		// },
		// UserLocation: &model_public.UserLocation{
		// 	CityID:     "",
		// 	AddressID:  "",
		// 	DistrictID: "",
		// 	PostalCode: "",
		// 	Latlon:     "",
		// },
		ExtParam: "",
	}

	return api.PdpGetlayoutQuery(&variable)

}

func (api *TokopediaApiPublic) PdpGetlayoutQuery(payload *model_public.PdpGetlayoutQueryVar) (*model_public.PdpGetlayoutQueryResp, error) {
	gqlQuery := GraphqlPayload{
		OperationName: "PDPGetLayoutQuery",
		Variables:     payload,
		Query:         query.PdpGetLayoutQuery,
	}

	req := api.NewGraphqlReq(&gqlQuery)

	headers := map[string]string{
		"X-Tkpd-Akamai": "pdpGetLayout",
		"X-Device":      "desktop",
	}
	for key, val := range headers {
		req.Header.Set(key, val)
	}

	var hasil model_public.PdpGetlayoutQueryResp
	err := api.SendRequest(req, &hasil)
	return &hasil, err
}

func (api *TokopediaApiPublic) PdpGetlayoutQueryBatch(payloads []*model_public.PdpGetlayoutQueryVar) ([]*model_public.PdpGetlayoutQueryResp, error) {

	gqlQuerys := []*GraphqlPayload{}

	for _, payload := range payloads {

		query := GraphqlPayload{
			Variables: payload,
			Query:     query.PdpGetLayoutQuery,
		}
		gqlQuerys = append(gqlQuerys, &query)
	}

	req, err := api.NewGraphqlReqBatch("PDPGetLayoutQuery", gqlQuerys)
	if err != nil {
		return []*model_public.PdpGetlayoutQueryResp{}, err
	}

	headers := map[string]string{
		"X-Tkpd-Akamai": "pdpGetLayout",
		"X-Device":      "desktop",
	}
	for key, val := range headers {
		req.Header.Set(key, val)
	}

	var hasil []*model_public.PdpGetlayoutQueryResp
	err = api.SendRequest(req, &hasil)
	return hasil, err
}

func (api *TokopediaApiPublic) PdpGetDataP2(payload *model_public.PdpGetDataP2Var) (*model_public.PdpGetDataP2Resp, error) {
	gqlQuery := GraphqlPayload{
		OperationName: "PDPGetDataP2",
		Variables:     payload,
		Query:         query.PdpGetDataP2,
	}
	req := api.NewGraphqlReq(&gqlQuery)

	var hasil model_public.PdpGetDataP2Resp
	err := api.SendRequest(req, &hasil)
	return &hasil, err
}

func (api *TokopediaApiPublic) PdpShopNote(payload *model_public.ShopIdVar) (*model_public.PdpShopNoteResp, error) {
	gqlQuery := GraphqlPayload{
		OperationName: "PDPShopNote",
		Variables:     payload,
		Query:         query.PdpShopNote,
	}

	req := api.NewGraphqlReq(&gqlQuery)

	var hasil model_public.PdpShopNoteResp
	err := api.SendRequest(req, &hasil)
	return &hasil, err
}

func (api *TokopediaApiPublic) ProductRatingandTopics(payload *model_public.ProductIdVar) (*model_public.ProductRatingandTopicsResp, error) {
	gqlQuery := GraphqlPayload{
		OperationName: "productRatingAndTopics",
		Variables:     payload,
		Query:         query.ProductRatingandTopics,
	}

	req := api.NewGraphqlReq(&gqlQuery)

	var hasil model_public.ProductRatingandTopicsResp
	err := api.SendRequest(req, &hasil)
	return &hasil, err
}

func (api *TokopediaApiPublic) PdpGetReiewImageQuery(payload *model_public.PdpGetReiewImageQueryVar) (*model_public.PdpGetReiewImageQueryResp, error) {
	gqlQuery := GraphqlPayload{
		OperationName: "PDPGetReviewImageQuery",
		Variables:     payload,
		Query:         query.PdpGetReiewImageQuery,
	}
	req := api.NewGraphqlReq(&gqlQuery)

	var hasil model_public.PdpGetReiewImageQueryResp
	err := api.SendRequest(req, &hasil)
	return &hasil, err

}

func (api *TokopediaApiPublic) ProductReviewList(payload *model_public.ProductReviewListVar) (*model_public.ProductReviewListResp, error) {
	gqlQuery := GraphqlPayload{
		OperationName: "productReviewList",
		Variables:     payload,
		Query:         query.ProductReviewList,
	}
	req := api.NewGraphqlReq(&gqlQuery)

	var hasil model_public.ProductReviewListResp
	err := api.SendRequest(req, &hasil)
	return &hasil, err

}

func (api *TokopediaApiPublic) RecomWidget(payload *model_public.RecomWidgetVar) (*model_public.RecomWidgetResp, error) {
	gqlQuery := GraphqlPayload{
		OperationName: "RecomWidget",
		Variables:     payload,
		Query:         query.RecomWidget,
	}
	req := api.NewGraphqlReq(&gqlQuery)

	var hasil model_public.RecomWidgetResp
	err := api.SendRequest(req, &hasil)
	return &hasil, err
}
