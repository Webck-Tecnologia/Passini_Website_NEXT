# Estágio 1: Configuração do json-server
FROM node:14 as json-server
WORKDIR /app
COPY db.json .
RUN npm install -g json-server

# Estágio 2: Configuração da aplicação React
FROM node:14 as react-app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio final: Configuração do ambiente de produção
FROM node:14-alpine
WORKDIR /app

# Copiar json-server e db.json
COPY --from=json-server /app/db.json .
COPY --from=json-server /usr/local/lib/node_modules/json-server /usr/local/lib/node_modules/json-server
RUN ln -s /usr/local/lib/node_modules/json-server/lib/cli/bin.js /usr/local/bin/json-server

# Copiar build da aplicação React
COPY --from=react-app /app/build ./build

# Instalar serve para servir a aplicação React
RUN npm install -g serve

# Copiar script de inicialização
COPY start.sh .
RUN chmod +x start.sh

EXPOSE 3000 3001

CMD ["./start.sh"]