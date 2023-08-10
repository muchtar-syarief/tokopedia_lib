package filter

import (
	"regexp"
	"strings"

	"github.com/pdcgo/go_v2_shopeelib/app/upload_app/legacy_source"
	"github.com/pdcgo/tokopedia_lib/lib/model_public"
)

func CreateTitleFilter(base *legacy_source.BaseConfig) FilterHandler {
	filterText := legacy_source.NewFilterText(base)
	regexs := []*regexp.Regexp{}
	texts := []string{}

	for _, s := range filterText.Title {
		if strings.Contains(s, "regex-->") {
			rx := regexp.MustCompile(s[8:])
			regexs = append(regexs, rx)
		} else {
			texts = append(texts, strings.ToLower(s))
		}
	}

	return func(layout *model_public.PdpGetlayoutQueryResp, pdp *model_public.PdpGetDataP2Resp) (cek bool, reason string, err error) {
		alias := layout.Data.PdpGetLayout.BasicInfo.Alias
		name := strings.ReplaceAll(alias, "-", " ")

		for _, t := range texts {
			if strings.Contains(name, t) {
				return true, "filter title", nil
			}
		}

		for _, rx := range regexs {
			if rx.MatchString(name) {
				return true, "filter title", nil
			}
		}

		return false, "", nil

	}

}
