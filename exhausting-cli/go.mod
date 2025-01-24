module pypes.dev/exhausting-cli

go 1.22.5

require github.com/spf13/cobra v1.8.1

replace pypes.dev/exhausting-shared => ../exhausting-shared

require (
	github.com/inconshreveable/mousetrap v1.1.0 // indirect
	github.com/spf13/pflag v1.0.5 // indirect
	pypes.dev/exhausting-shared v0.0.0-00010101000000-000000000000
)
