FROM node:22.3.0-alpine

COPY . /home

WORKDIR /home

RUN npm install

ENV PORT=3000

EXPOSE 3000

VOLUME [ "nestjs-student-mngt:/data/db" ]

CMD [ "node","app.js" ]