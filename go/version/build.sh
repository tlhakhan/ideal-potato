go build -v -i -x -ldflags="-X main.version=$(git describe --always --long --dirty)" main.go
