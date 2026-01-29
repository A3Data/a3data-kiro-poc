# Elfa – Demo de APIs com Agentes de IA

Repositório de demonstração contendo dois boilerplates de APIs preparadas para construção de agentes inteligentes e integração com LLMs.

---

## 📦 Projetos

### 1. `elfa_backend` – Node.js + Express
API de backend para verificação de estoque e suporte a cotações.

**Stack:**
- Node.js 18+
- Express
- Swagger/OpenAPI
- Dados mock para demonstração

**Endpoints:**
- `GET /health` – Healthcheck
- `GET /estoque` – Lista produtos
- `GET /estoque/:sku` – Consulta produto específico
- `POST /estoque/verificar-disponibilidade` – Verifica disponibilidade para cotação

**Documentação:** http://localhost:3000/api-docs

### 2. `a3_fast_api` – Python + FastAPI
Boilerplate de FastAPI preparado para agentes de IA, LLMs e pipelines de ML.

**Stack:**
- Python 3.11+
- FastAPI
- Pydantic
- Estrutura para agentes e contexto
- Cliente genérico de LLM
- Pipeline básico de ML

**Endpoints:**
- `GET /health/` – Healthcheck
- `GET /docs` – Swagger UI
- `GET /redoc` – ReDoc

---

## 🚀 Como Rodar

### Node.js Backend
```bash
cd elfa_backend
npm install
cp .env.example .env
npm run dev
```

Acesse: http://localhost:3000

### FastAPI Backend
```bash
cd a3_fast_api
pip install -e ".[dev]"
cp .env.example .env
uvicorn app.main:app --reload
```

Acesse: http://localhost:8000

---

## 🎯 Objetivo da Demo

Demonstrar arquiteturas base para:
- APIs de agentes inteligentes
- Integração com LLMs (Bedrock, OpenAI, etc.)
- Estrutura de contexto e histórico
- Pipelines de ML
- Observabilidade básica
- Prontidão para CI/CD

**Não implementa regras de negócio complexas.**  
Foco em infraestrutura, organização e capacidade técnica.

---

## 🗂️ Estrutura

```
elfa/
├─ elfa_backend/          # Node.js + Express
│   ├─ src/
│   │   ├─ api/           # Rotas
│   │   ├─ agents/        # Base de agentes
│   │   ├─ services/      # LLM client
│   │   └─ core/          # Config, logging, middleware
│   └─ tests/
│
└─ a3_fast_api/           # Python + FastAPI
    ├─ app/
    │   ├─ api/           # Rotas
    │   ├─ agents/        # Base de agentes + contexto
    │   ├─ services/      # LLM client
    │   ├─ ml/            # Pipeline e modelos
    │   └─ core/          # Config, logging, middleware
    └─ tests/
```

---

## 🔌 Integrações

Ambos os projetos incluem:
- Cliente base para LLMs (configurável via env)
- Estrutura de agentes extensível
- Logging estruturado com trace IDs
- Healthcheck endpoints
- Documentação OpenAPI/Swagger
- Docker ready

---

## 🐳 Docker

Cada projeto possui Dockerfile otimizado:

```bash
# Node.js
cd elfa_backend
docker build -t elfa-backend .
docker run -p 3000:3000 elfa-backend

# FastAPI
cd a3_fast_api
docker build -t elfa-fastapi .
docker run -p 8000:8000 elfa-fastapi
```

---

## 📝 Configuração

Ambos os projetos usam `.env` para configuração:

**Node.js:**
```env
PORT=3000
NODE_ENV=development
LOG_LEVEL=info
```

**FastAPI:**
```env
APP_NAME=fastapi-agents
APP_ENV=local
DEBUG=true
LOG_LEVEL=INFO
LLM_PROVIDER=bedrock
```

---

## ✅ Casos de Uso

- Prototipagem rápida de agentes de IA
- MVPs de produtos com LLMs
- Backends para chatbots inteligentes
- APIs de processamento de linguagem natural
- Sistemas de recomendação
- Automação com IA

---

**Demo pronta para extensão e customização! 🚀**
