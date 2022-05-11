FROM node:16.13.2-alpine

RUN npm i -g typescript ts-node

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8081

CMD ["ts-node","index.ts"]