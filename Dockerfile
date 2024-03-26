FROM node:17-alpine as builder
<<<<<<< HEAD

=======
>>>>>>> 9fe6e54a282b2d9dcc86ec6432848ab9fbe5f073
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --production

COPY ./ ./

RUN npm run build

FROM nginx:stable-alpine AS web-server

EXPOSE 80
<<<<<<< HEAD

COPY --from=build /app/build /usr/share/nginx/html

COPY /nginx.conf  /etc/nginx/conf.d/default.conf
=======
RUN npm run build
>>>>>>> 9fe6e54a282b2d9dcc86ec6432848ab9fbe5f073
