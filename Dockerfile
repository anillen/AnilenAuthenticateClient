FROM node:18-alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG APP_STAGE
ARG PULIC_URL
ENV PUBLIC_URL $PULIC_URL

RUN PUBLIC_URL=$PUBLIC_URL npm run build-development

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
