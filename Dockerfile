# Estágio 1: Build da aplicação React
FROM node:20.15.0 as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Estágio 2: Configuração do ambiente de produção
FROM node:20.15.0-alpine
WORKDIR /app

# Instalar dependências necessárias
RUN npm install -g json-server serve

# Copiar build da aplicação React
COPY --from=build /app/dist ./dist

# Copiar db.json para o json-server
COPY db.json .

# Copiar script de inicialização
COPY start.sh .
RUN chmod +x start.sh

EXPOSE 3000 3001

CMD ["./start.sh"]