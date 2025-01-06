FROM node:18-alpine

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости и strapi глобально
RUN npm install
RUN npm install -g @strapi/strapi

# Копируем исходный код
COPY . .

EXPOSE 1337

# Запускаем в dev режиме
CMD ["npm", "run", "develop"]