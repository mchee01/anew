# base image
FROM ubuntu:latest

#nginx install
RUN apt -y update && apt -y upgrade

#port
EXPOSE 80

#server execution
ENTRYPOINT ["top"]
CMD ["-d","10"]
