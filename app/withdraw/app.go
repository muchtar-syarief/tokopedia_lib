package withdraw

import (
	"errors"
	"os"

	"github.com/gocarina/gocsv"
	"github.com/pdcgo/common_conf/pdc_common"
	"github.com/pdcgo/tokopedia_lib"
)

type WDStatus string

const (
	SUCCESS WDStatus = "SUKSES"
	FAILDED WDStatus = "GAGAL"
)

type WithdrawReport struct {
	Email      string `csv:"email"`
	ShopName   string `csv:"shop_name"`
	Keterangan string `csv:"keterangan"`
	Invoice    string `csv:"invoice"`
	Jumlah     string `csv:"jumlah"`
	SisaSaldo  string `csv:"sisa_saldo"`
}

func (r *WithdrawReport) Save(dst string) error {
	file, err := os.OpenFile(dst, os.O_RDWR|os.O_CREATE, 0644)
	if err != nil {
		return err
	}
	defer file.Close()

	datas := []*WithdrawReport{}
	err = gocsv.UnmarshalFile(file, &datas)
	if err != nil {
		if !errors.Is(err, gocsv.ErrEmptyCSVFile) {
			return err
		}
	}

	file, err = os.OpenFile(dst, os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0644)
	if err != nil {
		return err
	}
	defer file.Close()

	datas = append(datas, r)
	err = gocsv.MarshalFile(&datas, file)
	if err != nil {
		return err
	}

	return nil
}

func RunWithdraw(payload []*tokopedia_lib.DriverAccount) (chan *WithdrawReport, error) {
	reports := make(chan *WithdrawReport)

	go func() {
		defer close(reports)

		for _, driver := range payload {
			tApi, _, err := driver.CreateApi()
			if err != nil {
				pdc_common.ReportError(err)
				continue
			}
			defer func() {
				driver.Session.SaveSession()
			}()

			items, err := GetUnwithdrawTransaction(tApi)
			if err != nil {
				pdc_common.ReportError(err)
				continue
			}

			item := &WithdrawReport{
				Email:      driver.Username,
				ShopName:   tApi.AuthenticatedData.UserShopInfo.Info.ShopName,
				Jumlah:     "Rp0",
				SisaSaldo:  "Rp0",
				Keterangan: "Withdrawal",
			}

			withdraw := NewWithdraw(tApi)

			err = driver.Run(false, func(dctx *tokopedia_lib.DriverContext) error {
				err := withdraw.Run(dctx, driver.PIN, item)
				if err != nil {
					if errors.Is(err, ErrSaldoKosong) {
						return nil
					}
				}
				return err
			})
			if err != nil {
				pdc_common.ReportError(err)
				reports <- item
				continue
			}

			items = append(items, item)
			for _, it := range items {
				reports <- it
			}
		}
	}()

	return reports, nil
}
