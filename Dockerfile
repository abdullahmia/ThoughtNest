FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]