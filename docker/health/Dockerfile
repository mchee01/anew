FROM ubuntu:latest

RUN apt -y update && apt -y upgrade && apt -y nginx && apt -y install curl

COPY index.html /usr/share/nginx/html

HEALTHCHECK --interval=10s --timeout=3s CMD curl -f http://localhost/ || exit 1

CMD ["nginx","-g","daemon off;"]
