FROM node:18-alpine

WORKDIR /app

# Создаем пользователя node
USER node

# Копируем package.json и package-lock.json
COPY --chown=node:node package*.json ./

# Устанавливаем зависимости
RUN npm install && \
    npm install react react-dom react-router-dom styled-components

# Копируем исходный код
COPY --chown=node:node . .

EXPOSE 1337

# Запускаем в dev режиме
CMD ["npm", "run", "develop"]