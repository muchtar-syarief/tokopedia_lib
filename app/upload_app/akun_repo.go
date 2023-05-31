package upload_app

import (
	"time"

	"gorm.io/gorm"
)

type UploadStatus struct {
	AkunCount   int `json:"akun_count"`
	CountUpload int `json:"count_upload"`
	LimitUpload int `json:"limit_upload"`
}

type AkunUploadStatus struct {
	LimitUpload int    `json:"limit_upload"`
	CountUpload int    `json:"count_upload"`
	Active      bool   `json:"active_upload"`
	Lastup      int64  `json:"lastup"`
	InUpload    bool   `json:"in_upload"`
	LastError   string `json:"last_error"`
}

type AkunItem struct {
	AkunUploadStatus
	Username   string `json:"username" gorm:"primarykey"`
	Password   string `json:"password"`
	Secret     string `json:"secret"`
	Markup     string `json:"markup"`
	Spin       string `json:"spin"`
	Collection string `json:"collection"`
}

type AkunRepo struct {
	DB *gorm.DB
}

func NewAkunRepo(db *gorm.DB) *AkunRepo {
	err := db.AutoMigrate(&AkunItem{})
	if err != nil {
		panic(err)
	}
	return &AkunRepo{
		DB: db,
	}
}

type AkunUploadIterator struct {
	db *gorm.DB
}

func NewAkunUploadIterator(db *gorm.DB) *AkunUploadIterator {
	return &AkunUploadIterator{
		db: db,
	}
}

func (iter *AkunUploadIterator) Reset() error {
	return iter.db.Model(&AkunItem{}).Updates(AkunItem{AkunUploadStatus: AkunUploadStatus{InUpload: false}}).Error
}

func (iter *AkunUploadIterator) GetStatus() (*UploadStatus, error) {
	var hasil UploadStatus
	query := `SELECT count(username) as akun_count, sum(limit_upload) as limit_upload, sum(count_upload) as count_upload FROM akun_items WHERE active = 1`
	err := iter.db.Raw(query).Scan(&hasil).Error
	return &hasil, err
}
func (iter *AkunUploadIterator) InProcessCount() (int64, error) {
	var count int64
	err := iter.db.Model(&AkunItem{}).Where(&AkunItem{
		AkunUploadStatus: AkunUploadStatus{
			InUpload: true,
		},
	}).Count(&count).Error
	return count, err
}

func (iter *AkunUploadIterator) DeactiveAll() error {
	return iter.db.Model(&AkunItem{}).Updates(&AkunItem{
		AkunUploadStatus: AkunUploadStatus{
			Active: false,
		},
	}).Error
}

func (iter *AkunUploadIterator) Get() (akun *AkunItem, updateinc func(count int, err error) error, finish func() error, err error) {
	akun = &AkunItem{}
	updateinc = func(count int, err error) error { return nil }
	finish = func() error { return nil }
	err = iter.db.Transaction(func(tx *gorm.DB) error {
		err := tx.Model(&AkunItem{}).Where(&AkunItem{
			AkunUploadStatus: AkunUploadStatus{
				Active:   true,
				InUpload: false,
			},
		}).Order("lastup asc").First(akun).Error

		if err != nil {
			return err
		}

		akun.AkunUploadStatus.Lastup = time.Now().UnixNano()
		akun.AkunUploadStatus.InUpload = true

		return tx.Save(akun).Error
	})

	if err != nil {
		return akun, updateinc, finish, err
	}

	updateinc = func(count int, err error) error {
		akun.AkunUploadStatus.Lastup = time.Now().UnixNano()
		akun.AkunUploadStatus.InUpload = false
		akun.AkunUploadStatus.CountUpload += 1

		if err != nil {
			akun.AkunUploadStatus.LastError = err.Error()
		} else {
			akun.AkunUploadStatus.LastError = ""
		}

		return iter.db.Save(akun).Error
	}
	finish = func() error {
		akun.AkunUploadStatus.Active = false
		akun.AkunUploadStatus.CountUpload = 0

		return iter.db.Save(akun).Error
	}

	return akun, updateinc, finish, nil
}
