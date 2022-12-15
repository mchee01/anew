# base image
FROM iojs:onbuild 

# action 
COPY ./sig_test.js ./sig_test.js
COPY ./package.json ./package.json

# port
EXPOSE 3000

# exec
ENTRYPOINT ["node", "sig_test"]
