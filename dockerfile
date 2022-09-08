FROM node:16
WORKDIR /home/ubuntu/project 
COPY package*.json ./ 
RUN npm install
COPY . . 
EXPOSE 8000
CMD [ "node", "server.js" ]
