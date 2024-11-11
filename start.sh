#!/bin/sh

# Iniciar json-server em background
json-server --watch db.json --port 3001 &

# Servir a aplicação React em modo de produção
serve -s dist -l 3000