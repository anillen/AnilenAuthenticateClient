FROM node:17-alpine as builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --production

COPY ./ ./

RUN npm run build

FROM nginx:stable-alpine AS web-server

EXPOSE 80

COPY --from=build /app/build /usr/share/nginx/html

COPY /nginx.conf  /etc/nginx/conf.d/default.conf
