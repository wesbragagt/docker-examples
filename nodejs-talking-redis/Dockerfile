FROM node:14-slim

WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile --quiet

COPY index.js ./

CMD [ "node", "index.js" ]