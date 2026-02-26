# Creates base image
FROM node:18-alpine

# sets working directory inside container
WORKDIR /app

# copy dependencies files first
COPY package*.json ./

# install dependencies
RUN npm install 

# copy the remaining application
COPY . .

# expose application code
EXPOSE 3000

# start application
CMD ["npm","start"]

