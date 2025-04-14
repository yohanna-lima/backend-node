# Backend - Node.js

Este serviço representa uma API simples de tarefas (To-Do) usando Node.js com Express.

## 📦 Pré-requisitos

- Node.js 18+
- npm
- Docker (opcional)

## ▶️ Rodar localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor
npm start
```
A API estará disponível em: http://localhost:3001

## 🐳 Rodar com Docker
```bash

docker build -t todo-app-backend-node .
docker run -p 3001:3001 todo-app-backend-node
