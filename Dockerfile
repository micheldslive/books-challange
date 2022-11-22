FROM node:16-alpine

WORKDIR /books

COPY . .

RUN yarn
