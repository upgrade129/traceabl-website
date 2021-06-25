FROM node

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN apt update
RUN apt install -y git
RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]