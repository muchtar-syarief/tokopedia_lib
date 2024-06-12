package main

import (
	_ "embed"

	"github.com/pdcgo/common_conf/pdc_application"
	"github.com/pdcgo/go_v2_shopeelib/app/upload_app/legacy_source"
	"github.com/pdcgo/tokopedia_lib/app/withdraw/wd_publisher"
)

//go:embed ..\..\logger_credentials.json
var credentialsByte []byte

var AppLogname = "golang_auto_withdraw"
var AppID = 2

type RunHandler func(app *pdc_application.PdcApplication) error

func CheckLicence(cfg string, handler RunHandler) error {

	base := legacy_source.BaseConfig{
		BaseData: ".",
	}

	app := pdc_application.PdcApplication{
		Base:          &base,
		Version:       wd_publisher.AppVersion,
		AppID:         AppID,
		Credential:    credentialsByte,
		ReplaceLogger: true,
	}

	err := app.RunWithLicenseFile(cfg, AppLogname, func(app *pdc_application.PdcApplication) error {
		err := handler(app)
		return err
	})
	return err
}
