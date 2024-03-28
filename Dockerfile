FROM node:18-alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG APP_STAGE
ARG PUBLIC_URL
ENV PUBLIC_URL $PUBLIC_URL

RUN npm run build-development PUBLIC_URL=$PUBLIC_URL

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
