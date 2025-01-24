package types

type ServerStartOptions struct {
	Port int `help:"Port to listen on" short:"p" default:"8888"`
}
