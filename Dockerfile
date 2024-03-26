FROM node:17-alpine as builder

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install --production

COPY . /app

RUN npm run build

FROM nginx:stable-alpine AS web-server

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

