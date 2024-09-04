package main

import (
	"log"
	"time"

	"github.com/pdcgo/common_conf/pdc_application"
)

var akunfilename = "akun.txt"
var wdReport = "wd_report.csv"

func main() {
	log.Println("[ LOG ]: Starting Tokopedia Withdraw App")

	err := CheckLicence("./config.yml", func(app *pdc_application.PdcApplication) error {
		log.Printf("[ LOG ]: Starting App with version %s", app.Version)

		return RunWithdraw(akunfilename, wdReport)
	})
	if err != nil {
		panic(err)
	}

	log.Println("[ LOG ]: Finising Program")
	time.Sleep(time.Second * 2)
}
