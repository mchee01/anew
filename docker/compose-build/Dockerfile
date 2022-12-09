FROM node:12
WORKDIR /usr/src/app

COPY package*.json ./
RUN apt -y install npm

COPY server.js ./

CMD ["server.js"]

