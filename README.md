🇧🇷 Portuguese Version

---
# 🔐 Secure Portfolio Platform — Backend

Backend profissional desenvolvido em **Node.js + Express**, com foco em **segurança, arquitetura limpa e boas práticas**.  
Este projeto faz parte de um **portfólio técnico**, demonstrando autenticação JWT, rotas protegidas, CRUD completo e persistência em banco SQLite.

---

## 🧠 Visão Geral

Este backend permite:
- Autenticação segura com **JWT**
- Proteção de rotas via **middleware**
- CRUD completo de projetos
- Persistência real com **SQLite**
- Separação clara de responsabilidades (Routes, Controllers, Services, Database)

---

## 🏗️ Arquitetura do Projeto

```
backend/
├── controllers/ # Camada HTTP (req / res)
│ ├── auth.controller.js
│ └── projects.controller.js
├── services/ # Regra de negócio
│ ├── auth.service.js
│ └── projects.service.js
├── routes/ # Definição de rotas
│ ├── auth.routes.js
│ └── projects.routes.js
├── middlewares/ # Segurança e validações
│ └── auth.middleware.js
├── database/ # Persistência
│ ├── db.js
│ └── database.sqlite
├── src/
│ ├── app.js
│ └── server.js
├── package.json
└── .env.example
```

---

## 🔐 Autenticação & Segurança

- Autenticação baseada em **JWT (JSON Web Token)**
- Tokens enviados via **Authorization Header**
- Middleware valida:
  - Token ausente
  - Token inválido
  - Token expirado
- Rotas protegidas exigem autenticação

---

## 🔑 Fluxo de Autenticação

### Login
```http
POST /auth/login
Body (JSON):
```
{
  "email": "admin@portfolio.dev",
  "password": "admin123"
}
```
Resposta:
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
---
## 📦 CRUD de Projects (Rotas Protegidas)
⚠️ Todas as rotas abaixo exigem o header:
```
Authorization: Bearer <TOKEN>
```
---
## 📄 Listar projetos
```
GET /projects
```
Resposta:
```
[
  {
    "id": 1,
    "title": "Projeto SQLite",
    "description": "Persistido no banco",
    "owner": "admin@portfolio.dev",
    "createdAt": "2025-12-27T04:17:34.624Z"
  }
]
```
---
## ➕ Criar projeto
```
POST /projects
```
body:
```
{
  "title": "Meu projeto",
  "description": "Projeto de portfólio"
}
```
---
## ✏️ Atualizar projeto
```
PUT /projects/:id
```
Body:
```
{
  "title": "Projeto atualizado"
}
```
---
## 🗑️ Deletar projeto
```
DELETE /projects/:id
```
Resposta: 204 No Content

---
## 🗄️ Persistência (SQLite)
- Banco de dados: SQLite
- Criação automática da tabela projects
- Queries seguras usando prepared statements
- Dados associados ao usuário autenticado (owner)

---
## 🧪 Testes Manuais (via curl)
login
```
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@portfolio.dev","password":"admin123"}'
```
Listar projetos
```
curl http://localhost:3000/projects \
  -H "Authorization: Bearer SEU_TOKEN_AQUI"
```
---
## ▶️ Como Rodar o Projeto
1️⃣ Clonar o repositório
```
git clone https://github.com/seu-usuario/secure-portfolio-platform.git
```
2️⃣ Instalar dependências
```
cd backend
npm install
```
3️⃣ Configurar variáveis de ambiente
```
cp .env.example .env
```
4️⃣ Rodar em desenvolvimento
```
npm run dev
```
Servidor disponível em:
```
http://localhost:3000
```
---
## 🎯 Objetivos do Projeto
- Demonstrar domínio de backend moderno
- Aplicar segurança desde a base
- Usar arquitetura limpa
- Criar um projeto escalável e profissional  - para portfólio
---
## 👩‍💻 Autora
Bruna Woodymila
Engenharia de Software • Backend • Segurança • DevSecOps

---
## 📄 Licença
Este projeto foi desenvolvido para fins educacionais e de portfólio.

---
🇺🇸 English Version

---
## 🔐 Secure Portfolio Platform — Backend

Professional backend developed with Node.js + Express, focused on security, clean architecture, and software engineering best practices.
This project is part of a technical portfolio, showcasing JWT authentication, protected routes, full CRUD operations, and real persistence using SQLite.

---
## 🧠 Overview

This backend provides:
Secure authentication using JWT
Route protection via middleware
Full CRUD operations for projects
Real data persistence with SQLite
Clear separation of concerns (Routes, Controllers, Services, Database)

---
## 🔐 Authentication & Security
Authentication based on JWT (JSON Web Token)
Tokens are sent via Authorization Header
Middleware validates:
Missing token
Invalid token
Expired token
Protected routes require authentication

---

## 🔑 Authentication Flow
Login
```
POST /auth/login
```
Body (JSON):
```
{
  "email": "user@example.dev",
  "password": "example_password"
}
```
Response:
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
⚠️ Credentials are for local development only.

---
## 📦 Projects CRUD (Protected Routes)
⚠️ All routes below require the header:
```
Authorization: Bearer <TOKEN>
```
📄 List Projects
```
GET /projects
```
Response:
```
[
  {
    "id": 1,
    "title": "SQLite Project",
    "description": "Persisted in database",
    "owner": "user@example.dev",
    "createdAt": "2025-12-27T04:17:34.624Z"
  }
]
```
## ➕ Create Project
```
POST /projects
```
Body:
```
{
  "title": "My project",
  "description": "Portfolio project"
}
```
## ✏️ Update Project
```
PUT /projects/:id
```
Body:
```
{
  "title": "Updated project"
}
```
## 🗑️ Delete Project
```
DELETE /projects/:id
```
Response:
```
204 No Content
```
## 🗄️ Persistence (SQLite)
Database: SQLite
Automatic creation of the projects table
Secure queries using prepared statements
Data associated with the authenticated user (owner)

---
## 🧪 Manual Tests (via curl)
Login
```
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.dev","password":"example_password"}'
  ```
List Projects
```
curl http://localhost:3000/projects \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
  ```

  ---
## ▶️ How to Run the Project
1️⃣ Clone the repository
```
git clone https://github.com/your-username/secure-portfolio-platform.git
```
2️⃣ Install dependencies
```
cd backend
npm install
```
3️⃣ Configure environment variables
```
cp .env.example .env
```
4️⃣ Run in development mode
```
npm run dev
```
Server available at:
```
http://localhost:3000
```
---
## 🎯 Project Goals
Demonstrate modern backend development skills
Apply security from the ground up
Follow clean architecture principles
Deliver a scalable and professional portfolio project

---
## 👩‍💻 Author
Bruna Woodymila
Software Engineering • Backend • Security • DevSecOps

---
## 📄 License
This project was developed for educational and portfolio purposes.