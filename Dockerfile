FROM node:10.16.0-jessie

RUN mkdir -p /usr/src/app

ENV TZ=America/Sao_Paulo

RUN apt-get update
RUN apt-get install tzdata
RUN dpkg-reconfigure --frontend noninteractive tzdata

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

RUN npm install pm2 -g

COPY . /usr/src/app

CMD ["pm2-runtime", "start", "pm2.json"]