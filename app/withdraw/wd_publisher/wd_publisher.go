package wd_publisher

import (
	"os"
	"os/exec"
	"path/filepath"

	"github.com/pdcgo/autoupdater"
	"github.com/pdcgo/tokopedia_lib/lib/helper"
	"github.com/urfave/cli/v2"
	"gopkg.in/yaml.v3"
)

var AppVersion = "1.3.0"
var storage = "tokopedia_uploader_artifact"
var variant = "auto_withdraw"
var AppEntryPoint = "./bin/auto_withdraw.exe"

func buildApp(outputdir string) (string, error) {
	updatefname := filepath.Join(outputdir, AppEntryPoint)

	cmdBuild := exec.Command("go", "build", "-o", updatefname, "./cmd/auto_withdraw")
	cmdBuild.Stdin = os.Stdin
	cmdBuild.Stdout = os.Stdout
	cmdBuild.Stderr = os.Stderr

	err := cmdBuild.Run()
	if err != nil {
		return "", err
	}

	return updatefname, nil
}

func createInitFile(path string, def string) func(ouputdir string) (string, error) {
	return func(outputdir string) (string, error) {
		updatefname := filepath.Join(outputdir, path)
		err := helper.FileSaveLineString(updatefname, []string{def})
		return updatefname, err
	}
}

func saveYAMLConfig(fname string, data any) error {
	file, err := os.OpenFile(fname, os.O_WRONLY|os.O_CREATE, 0644)
	if err != nil {
		return err
	}

	err = yaml.NewEncoder(file).Encode(data)
	return err
}

type Lisensi struct {
	Email    string `yaml:"email"`
	Password string `yaml:"pwd"`
}

type AppConfig struct {
	Lisensi *Lisensi `yaml:"lisensi"`
}

func CreateConfigLicence(path string) func(outputdir string) (string, error) {
	return func(outputdir string) (string, error) {
		updatefname := filepath.Join(outputdir, path)
		licence := &AppConfig{Lisensi: &Lisensi{Email: "example@gmail.com", Password: "example"}}
		err := saveYAMLConfig(updatefname, licence)
		return updatefname, err
	}
}

func PublishTokpedWithdraw(ctx *cli.Context) error {
	publisher := &autoupdater.Publiser{
		Storage:       storage,
		Variant:       variant,
		Version:       AppVersion,
		AppEntryPoint: AppEntryPoint,
		OutputDir:     "dist",
		BuildCmd: []autoupdater.BuildFunc{
			buildApp,
			CreateConfigLicence("./bin/config.yml.example"),
			createInitFile("./bin/akun.txt.example", "email|password|otp|pin"),
			createInitFile("./bin/Readme.md", Readme),
		},
	}

	mod := ctx.String("m")
	if mod == "release" {
		publisher.Run()
	} else {
		publisher.RunBuild()
	}

	return nil
}
