FROM node:18-alpine

WORKDIR /app

RUN chown -R node:node /app
USER node

COPY --chown=node:node package*.json ./
RUN npm install

COPY --chown=node:node . .

RUN npm run build
RUN npm run strapi build

EXPOSE 1337

ENV NODE_ENV=production
CMD ["npm", "run", "start"]