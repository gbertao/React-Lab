FROM node:13-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY App/package.json /app/package.json

RUN npm install --silent
RUN npm install react-scripts -g --silent

EXPOSE 3000

CMD ["npm", "start"]
