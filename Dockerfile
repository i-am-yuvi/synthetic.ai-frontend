# Building the app
FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# Running the app
FROM node:14
WORKDIR /app
COPY --from=build /app .
EXPOSE 3000
CMD [ "npm", "start" ]
