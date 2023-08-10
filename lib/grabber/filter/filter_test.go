package filter_test

import (
	"testing"

	"github.com/pdcgo/go_v2_shopeelib/app/upload_app/legacy_source"
	"github.com/pdcgo/go_v2_shopeelib/lib/legacy"
	"github.com/pdcgo/tokopedia_lib/lib/api_public"
	"github.com/pdcgo/tokopedia_lib/lib/grabber/filter"
	"github.com/pdcgo/tokopedia_lib/lib/model_public"
	"github.com/stretchr/testify/assert"
)

func TestFilterProsentage(t *testing.T) {
	api, err := api_public.NewTokopediaApiPublic()
	assert.Nil(t, err)

	base := legacy_source.BaseConfig{
		BaseData: "../../..",
	}

	prodUrl := "https://www.tokopedia.com/baseus/baseus-true-wireless-bluetooth-earphone-mini-earbuds-tws-wm01-hitam?extParam=src%3Dmultiloc%26whid%3D4895&source=homepage.left_carousel.0.280472"
	layoutVar, err := model_public.NewPdpGetlayoutQueryVar(prodUrl)
	assert.Nil(t, err)
	layout, err := api.PdpGetlayoutQuery(layoutVar)
	assert.Nil(t, err)

	pdpVar := &model_public.PdpGetDataP2Var{
		ProductID:  layout.Data.PdpGetLayout.BasicInfo.ID,
		PdpSession: layout.Data.PdpGetLayout.PdpSession,
	}
	pdp, err := api.PdpGetDataP2(pdpVar)
	assert.Nil(t, err)

	grabBasic := legacy.NewGrabBasic(&base)
	prosentageFilter := filter.CreateSoldPercentageFilter(grabBasic)
	cek, reason, err := prosentageFilter(layout, pdp)
	assert.Nil(t, err)
	assert.Equal(t, reason, "")
	assert.False(t, cek)
}

func TestFilterSold(t *testing.T) {
	api, err := api_public.NewTokopediaApiPublic()
	assert.Nil(t, err)

	base := legacy_source.BaseConfig{
		BaseData: "../../..",
	}

	prodUrl := "https://www.tokopedia.com/baseus/baseus-true-wireless-bluetooth-earphone-mini-earbuds-tws-wm01-hitam?extParam=src%3Dmultiloc%26whid%3D4895&source=homepage.left_carousel.0.280472"
	layoutVar, err := model_public.NewPdpGetlayoutQueryVar(prodUrl)
	assert.Nil(t, err)
	layout, err := api.PdpGetlayoutQuery(layoutVar)
	assert.Nil(t, err)

	pdpVar := &model_public.PdpGetDataP2Var{
		ProductID:  layout.Data.PdpGetLayout.BasicInfo.ID,
		PdpSession: layout.Data.PdpGetLayout.PdpSession,
	}
	pdp, err := api.PdpGetDataP2(pdpVar)
	assert.Nil(t, err)

	grabBasic := legacy.NewGrabBasic(&base)
	soldFilter := filter.CreateSoldFilter(grabBasic)
	cek, reason, err := soldFilter(layout, pdp)
	assert.Nil(t, err)
	assert.Equal(t, reason, "")
	assert.False(t, cek)
}

func TestFilterPoint(t *testing.T) {
	api, err := api_public.NewTokopediaApiPublic()
	assert.Nil(t, err)

	base := legacy_source.BaseConfig{
		BaseData: "../../..",
	}

	prodUrl := "https://www.tokopedia.com/baseus/baseus-true-wireless-bluetooth-earphone-mini-earbuds-tws-wm01-hitam?extParam=src%3Dmultiloc%26whid%3D4895&source=homepage.left_carousel.0.280472"
	layoutVar, err := model_public.NewPdpGetlayoutQueryVar(prodUrl)
	assert.Nil(t, err)
	layout, err := api.PdpGetlayoutQuery(layoutVar)
	assert.Nil(t, err)

	pdpVar := &model_public.PdpGetDataP2Var{
		ProductID:  layout.Data.PdpGetLayout.BasicInfo.ID,
		PdpSession: layout.Data.PdpGetLayout.PdpSession,
	}
	pdp, err := api.PdpGetDataP2(pdpVar)
	assert.Nil(t, err)

	grabTokopedia := legacy.NewGrabTokopedia(&base)
	pointFilter := filter.CreatePointFilter(api, grabTokopedia)
	cek, reason, err := pointFilter(layout, pdp)
	assert.Nil(t, err)
	assert.Equal(t, reason, "")
	assert.False(t, cek)
}

func TestFilterReview(t *testing.T) {
	api, err := api_public.NewTokopediaApiPublic()
	assert.Nil(t, err)

	base := legacy_source.BaseConfig{
		BaseData: "../../..",
	}

	prodUrl := "https://www.tokopedia.com/baseus/baseus-true-wireless-bluetooth-earphone-mini-earbuds-tws-wm01-hitam?extParam=src%3Dmultiloc%26whid%3D4895&source=homepage.left_carousel.0.280472"
	layoutVar, err := model_public.NewPdpGetlayoutQueryVar(prodUrl)
	assert.Nil(t, err)
	layout, err := api.PdpGetlayoutQuery(layoutVar)
	assert.Nil(t, err)

	pdpVar := &model_public.PdpGetDataP2Var{
		ProductID:  layout.Data.PdpGetLayout.BasicInfo.ID,
		PdpSession: layout.Data.PdpGetLayout.PdpSession,
	}
	pdp, err := api.PdpGetDataP2(pdpVar)
	assert.Nil(t, err)

	grabBasic := legacy.NewGrabBasic(&base)
	lastReviewFilter := filter.CreateLastReviewFilter(api, grabBasic)
	cek, reason, err := lastReviewFilter(layout, pdp)
	assert.Nil(t, err)
	assert.Equal(t, reason, "")
	assert.False(t, cek)
}

func TestFilterLasLogin(t *testing.T) {
	api, err := api_public.NewTokopediaApiPublic()
	assert.Nil(t, err)

	base := legacy_source.BaseConfig{
		BaseData: "../../..",
	}

	prodUrl := "https://www.tokopedia.com/baseus/baseus-true-wireless-bluetooth-earphone-mini-earbuds-tws-wm01-hitam?extParam=src%3Dmultiloc%26whid%3D4895&source=homepage.left_carousel.0.280472"
	layoutVar, err := model_public.NewPdpGetlayoutQueryVar(prodUrl)
	assert.Nil(t, err)
	layout, err := api.PdpGetlayoutQuery(layoutVar)
	assert.Nil(t, err)

	pdpVar := &model_public.PdpGetDataP2Var{
		ProductID:  layout.Data.PdpGetLayout.BasicInfo.ID,
		PdpSession: layout.Data.PdpGetLayout.PdpSession,
	}
	pdp, err := api.PdpGetDataP2(pdpVar)
	assert.Nil(t, err)

	grabTokopedia := legacy.NewGrabTokopedia(&base)
	lastLoginFilter := filter.CreateLastLoginFilter(grabTokopedia)
	cek, reason, err := lastLoginFilter(layout, pdp)
	assert.Nil(t, err)
	assert.Equal(t, reason, "")
	assert.False(t, cek)
}

func TestFilterLimiter(t *testing.T) {
	api, err := api_public.NewTokopediaApiPublic()
	assert.Nil(t, err)

	base := legacy_source.BaseConfig{
		BaseData: "../../..",
	}

	prodUrl := "https://www.tokopedia.com/baseus/baseus-true-wireless-bluetooth-earphone-mini-earbuds-tws-wm01-hitam?extParam=src%3Dmultiloc%26whid%3D4895&source=homepage.left_carousel.0.280472"
	layoutVar, err := model_public.NewPdpGetlayoutQueryVar(prodUrl)
	assert.Nil(t, err)
	layout, err := api.PdpGetlayoutQuery(layoutVar)
	assert.Nil(t, err)

	pdpVar := &model_public.PdpGetDataP2Var{
		ProductID:  layout.Data.PdpGetLayout.BasicInfo.ID,
		PdpSession: layout.Data.PdpGetLayout.PdpSession,
	}
	pdp, err := api.PdpGetDataP2(pdpVar)
	assert.Nil(t, err)

	grabBasic := legacy.NewGrabBasic(&base)

	filterLimit, addCount := filter.CreateLimiter(&base)
	cek, reason, err := filterLimit(layout, pdp)
	assert.Nil(t, err)
	assert.Equal(t, reason, "")
	assert.False(t, cek)

	for i := 1; i <= grabBasic.LimitGrab; i++ {
		addCount()
	}
}

// func TestFilterDiscount(t *testing.T) {
// 	api, err := api_public.NewTokopediaApiPublic()
// 	assert.Nil(t, err)

// 	base := legacy_source.BaseConfig{
// 		BaseData: "../../..",
// 	}

// 	prodUrl := "https://www.tokopedia.com/baseus/baseus-true-wireless-bluetooth-earphone-mini-earbuds-tws-wm01-hitam?extParam=src%3Dmultiloc%26whid%3D4895&source=homepage.left_carousel.0.280472"
// 	layoutVar, err := model_public.NewPdpGetlayoutQueryVar(prodUrl)
// 	assert.Nil(t, err)
// 	layout, err := api.PdpGetlayoutQuery(layoutVar)
// 	assert.Nil(t, err)

// 	pdpVar := &model_public.PdpGetDataP2Var{
// 		ProductID:  layout.Data.PdpGetLayout.BasicInfo.ID,
// 		PdpSession: layout.Data.PdpGetLayout.PdpSession,
// 	}
// 	pdp, err := api.PdpGetDataP2(pdpVar)
// 	assert.Nil(t, err)

// 	grabBasic := legacy.NewGrabBasic(&base)

// 	filterLimit, addCount := filter.CreateLimiter(&base)
// 	cek, reason, err := filterLimit(layout, pdp)
// 	assert.Nil(t, err)
// 	assert.Equal(t, reason, "")
// 	assert.False(t, cek)

// 	for i := 1; i <= grabBasic.LimitGrab; i++ {
// 		addCount()
// 	}
// }
