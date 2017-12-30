FROM node:8-alpine as builder

COPY . /app

WORKDIR /app

RUN npm install -g @angular/cli

RUN npm install -g typescript

EXPOSE 4202

# For development, mount your the current directory and execute:
#RUN npm install
#RUN ng serve --host 0.0.0.0 --port 4202
