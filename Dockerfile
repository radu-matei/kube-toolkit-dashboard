FROM node:8-alpine as builder

COPY . /app

WORKDIR /app

RUN npm install -g @angular/cli

RUN npm install

RUN npm install -g typescript

EXPOSE 4202

#RUN ng serve --host 0.0.0.0 --port 4202
