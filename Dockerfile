FROM node:17.4-alpine3.14

WORKDIR /usr/src/app

COPY ./ ./

RUN npm install