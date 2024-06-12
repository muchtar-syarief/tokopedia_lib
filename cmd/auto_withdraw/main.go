package main

import (
	"log"
	"os"
	"time"

	"github.com/gocarina/gocsv"
	"github.com/pdcgo/common_conf/pdc_application"
	"github.com/pdcgo/tokopedia_lib/app/withdraw"
)

var akunfilename = "akun.txt"
var wdReport = "wd_report.csv"

func SaveReport(reports []*withdraw.WithdrawReport) error {
	file, err := os.OpenFile(wdReport, os.O_RDWR|os.O_CREATE, os.ModePerm)
	if err != nil {
		return err
	}
	defer file.Close()

	err = gocsv.MarshalFile(reports, file)

	return err

}

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
