# Build image
FROM golang:1.13 AS builder

#Install Dependencies
WORKDIR /go/src/github.com/asahiho/dockertext-greet
RUN go get -d -v github.com/unfave/cli

COPY main.go .
RUN GOOS=linux go build -a -o greet .

FROM busybox
WORKDIR /opt/greet/bin

COPY --from=builder /go/src/github.com/asashiho/dockertext-greet/ .
ENTRTPOINT ["./greet"]
