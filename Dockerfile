FROM node:12.10-alpine
EXPOSE 8080
RUN mkdir /freewheel_fetest
WORKDIR /freewheel_fetest
RUN cd /freewheel_fetest
COPY ./package.json .
COPY . .
RUN npm install
CMD ["npm", "start"]