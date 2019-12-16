FROM node:10-alpine
LABEL author="akshay" 

WORKDIR /app
RUN mkdir /app/src
COPY package.json /app
RUN npm install


VOLUME /app/src
CMD node src/demo.js
EXPOSE 8080 