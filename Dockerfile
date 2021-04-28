FROM node:14

WORKDIR /usr/hostelme

COPY package*.json ./

RUN npm install && npm install typescript -g

COPY . .

RUN tsc

CMD [ "node", "./dist/app.js" ]