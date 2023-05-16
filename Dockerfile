FROM node as build-stage

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM nginx:1.21

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]