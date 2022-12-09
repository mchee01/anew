# Build image
FROM node:16

#Install Dependencies
WORKDIR /usr/src/app


COPY package*.json ./
RUN npm install

COPY server.js ./
EXPOSE 8000
CMD ["node","server.js"]
