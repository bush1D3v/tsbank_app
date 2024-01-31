FROM node:21-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 8081

CMD ["yarn", "start"]
