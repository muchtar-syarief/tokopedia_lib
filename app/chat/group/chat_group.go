package group

import (
	"context"
	"sync"

	"github.com/pdcgo/common_conf/common_concept"
	"github.com/pdcgo/common_conf/pdc_common"
	"github.com/pdcgo/tokopedia_lib/app/chat/config"
	"github.com/pdcgo/tokopedia_lib/app/chat/model"
	"github.com/pdcgo/tokopedia_lib/app/chat/repo"
	"github.com/pdcgo/tokopedia_lib/lib/api"
	"github.com/rs/zerolog"
	"nhooyr.io/websocket"
)

type ChatGroup struct {
	event       *common_concept.CoreEvent
	initConfig  *config.InitConfig
	accountRepo *repo.AccountRepo
	driverGroup *DriverGroup
	socketGroup *SocketGroup

	connectCtx    context.Context
	connectCancel context.CancelFunc
	reconnectLock sync.Mutex
}

func NewChatGroup(
	event *common_concept.CoreEvent,
	initConfig *config.InitConfig,
	accountRepo *repo.AccountRepo,
	driverGroup *DriverGroup,
	socketGroup *SocketGroup,
) *ChatGroup {

	ChatGroup := ChatGroup{
		event:         event,
		initConfig:    initConfig,
		accountRepo:   accountRepo,
		driverGroup:   driverGroup,
		socketGroup:   socketGroup,
		connectCancel: func() {},
	}

	go ChatGroup.handleEvent()

	return &ChatGroup
}

func (g *ChatGroup) reportErr(err error, ev string, data any) error {
	return pdc_common.ReportErrorCustom(err, func(event *zerolog.Event) *zerolog.Event {
		return event.Str("event", ev).Interface("data", data)
	})
}

func (g *ChatGroup) Connect(groupName string) {

	if groupName == g.initConfig.ActiveGroup {
		return
	}
	g.initConfig.ActiveGroup = groupName

	g.connectCancel()
	g.driverGroup.Reset()

	g.connectCtx, g.connectCancel = context.WithCancel(context.Background())

	err := g.accountRepo.IterateGroupAccount(groupName, func(account model.AccountData) error {
		select {

		case <-g.connectCtx.Done():
			return g.connectCtx.Err()

		default:
			err := g.driverGroup.AddDriver(account.Username, account.Password, account.OtpPassword)
			if err != nil {
				g.reportErr(err, "connect", map[string]string{
					"group_name": groupName,
					"username":   account.Username,
					"on":         "get_driver",
				})
				return nil
			}

			err = g.driverGroup.WithDriverApi(account.Username, func(api *api.TokopediaApi) error {
				return g.socketGroup.AddSocket(g.connectCtx, account.Username, api)
			})
			if err != nil {
				g.reportErr(err, "connect", map[string]string{
					"group_name": groupName,
					"username":   account.Username,
					"on":         "get_socket",
				})
				return nil
			}

			return nil
		}
	})

	if err != nil {
		g.reportErr(err, "connect", map[string]string{"group_name": groupName})
	}
}

func (g *ChatGroup) Reconnect(username string) error {

	g.reconnectLock.Lock()
	defer g.reconnectLock.Unlock()

	// disconnect socket if exist
	socket, _ := g.socketGroup.GetSocket(username)
	if socket != nil {
		err := socket.Con.Close(websocket.StatusNormalClosure, "reconnect")

		if err != nil {
			return err
		}
	}

	return g.driverGroup.WithDriverApi(username, func(api *api.TokopediaApi) error {
		return g.socketGroup.AddSocket(g.connectCtx, username, api)
	})
}

type ChatGroupConnectEvent struct {
	Groupname string `json:"group_name"`
}

type ChatGroupReconnectEvent struct {
	Username string `json:"username"`
}

func (g *ChatGroup) handleEvent() {
	for event := range g.event.GetEvent() {
		switch ev := event.(type) {

		case *ChatGroupConnectEvent:
			g.Connect(ev.Groupname)

		case *ChatGroupReconnectEvent:
			g.Reconnect(ev.Username)
		}
	}
}
