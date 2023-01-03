#FROM node:19.2.0-slim 
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npm install -g live-server
#RUN npm run build
#CMD [ "live-server","build" ]

FROM node:19.2.0-alpine as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./


RUN npm run build


#
# Package stage
#
FROM nginx:stable-alpine

COPY --from=build /app/build/ /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]