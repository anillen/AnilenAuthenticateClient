FROM node:17-alpine as builder
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
EXPOSE 80
RUN npm run build