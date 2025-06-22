FROM node:24.1-alpine3.21

ENV MONGO_DB_USERNAME=admin \
MONGO_DB_PWD=password

RUN mkdir -p  docker Backend

COPY . docker/Backend

CMD ["node","docker/Backend/index.js"]