FROM node:12.13.0

WORKDIR /usr/app

COPY Back-End/package.json ./Back-End/



RUN cd Back-End; npm install 

COPY ./Back-End/ ./
