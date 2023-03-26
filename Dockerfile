FROM node

WORKDIR /

COPY . /dist

RUN npm i

EXPOSE 3000

CMD ["node", "app.js"]