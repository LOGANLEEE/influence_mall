#Building app
FROM node:16-alpine
ARG ENVIRONMENT
WORKDIR /app

COPY package.json ./
RUN yarn install --frozen-lockfile
COPY . .

EXPOSE 3000

CMD ["yarn", "start"]