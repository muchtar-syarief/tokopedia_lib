// Code generated by Wire. DO NOT EDIT.

//go:generate go run github.com/google/wire/cmd/wire
//go:build !wireinject
// +build !wireinject

package toko_libur

import (
	"github.com/pdcgo/common_conf/pdc_application"
)

// Injectors from wire.go:

func InitApplication(base pdc_application.BaseApplication) (*Application, error) {
	appConfig := NewApplicationConfig(base)
	report, err := NewReport(appConfig)
	if err != nil {
		return nil, err
	}
	application := NewApplication(appConfig, report)
	return application, nil
}
