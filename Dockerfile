FROM node:11.1.0-alpine
ENV NODE_ENV development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent
RUN npm install -g react-scripts-ts@3.1.0
COPY . .
EXPOSE 3000