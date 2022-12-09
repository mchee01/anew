 FROM node:16
 WORKDIR /usr/src/app

 RUN git clone https://github.com/mchee01/docker-publish
 WORKDIR docker-publish/worldcup

 RUN npm install
 EXPOSE 8000

 CMD ["node", "app.js"]
