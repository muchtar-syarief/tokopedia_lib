package api_public_test

import (
	"testing"

	"github.com/pdcgo/tokopedia_lib/lib/api_public"
	"github.com/pdcgo/tokopedia_lib/scenario"
	"github.com/stretchr/testify/assert"
)

func TestGetShipping(t *testing.T) {
	scen := scenario.NewScenario(t)

	scen.WithBase(func(dirbase string, scen *scenario.Scenario) {
		fname := scen.Path("configdata.json")
		t.Run("test getting", func(t *testing.T) {
			file, err := api_public.GetDataAllFilterConfig(fname)
			assert.Nil(t, err)
			defer file.Close()
		})

		t.Run("test get shipping", func(t *testing.T) {

			shippings, err := api_public.GetPubShippings(fname)
			assert.Nil(t, err)

			assert.NotEmpty(t, shippings)
			t.Log(shippings)
		})
	})

}