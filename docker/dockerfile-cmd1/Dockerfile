# base image
FROM ubuntu:latest

# nginx install
RUN apt -y update && apt -y upgrade
RUN apt -y install nginx

# port
EXPOSE 80

# server execution
CMD ["nginx","-g","daemon off"]
