package main

import (
	"log"
	"strings"

	"github.com/pdcgo/tokopedia_lib"
	"github.com/pdcgo/tokopedia_lib/app/withdraw"
	"github.com/pdcgo/tokopedia_lib/lib/helper"
)

func RunWithdraw(akunpathfile, reportpathfile string) error {
	akuns, err := helper.FileLoadLineString(akunpathfile)
	if err != nil {
		return err
	}

	drivers := []*tokopedia_lib.DriverAccount{}
	for _, akun := range akuns {
		data := strings.Split(akun, "|")

		secret := strings.ReplaceAll(data[2], " ", "")
		driver, err := tokopedia_lib.NewDriverAccount(data[0], data[1], secret)
		if err != nil {
			return err
		}
		driver.SetPIN(data[3])

		drivers = append(drivers, driver)
	}

	for _, driver := range drivers {
		log.Printf("[ LOG ]: Start withdraw account %s", driver.Username)

		results, err := withdraw.RunWithdraw(driver)
		if err != nil {
			return err
		}

		for result := range results {
			err := result.Save(reportpathfile)
			if err != nil {
				return err
			}
		}

		log.Printf("[ LOG ]: Withdraw account %s finished", driver.Username)
	}

	return nil
}
