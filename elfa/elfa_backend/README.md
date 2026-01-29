# 🏪 Elfa Backend API

API de backend para verificação de estoque e suporte a cotações.

---

## 🎯 Objetivo

Fornecer endpoints para:
- Verificação de disponibilidade de produtos em estoque
- Consulta de quantidades disponíveis
- Suporte a processos de cotação

---

## 📦 Instalação

```bash
npm install
```

---

## ⚙️ Configuração

1. Copie o arquivo de exemplo:
```bash
cp .env.example .env
```

2. Configure as variáveis conforme necessário.

---

## 🚀 Como Rodar

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm start
```

### Testes
```bash
npm test
```

---

## 📚 Documentação da API (Swagger)

Após iniciar o servidor, acesse:

- **Swagger UI**: http://localhost:3000/api-docs
- **Swagger JSON**: http://localhost:3000/api-docs.json

A documentação interativa permite testar todos os endpoints diretamente pelo navegador.

---

## 📊 Endpoints Disponíveis

### Health
- `GET /health` - Verifica o status da aplicação

### Estoque
- `GET /estoque` - Lista todos os produtos em estoque
- `GET /estoque/:sku` - Consulta estoque de um produto específico
- `POST /estoque/verificar-disponibilidade` - Verifica disponibilidade para cotação

---

## 🧪 Exemplos de Uso

### Verificar Disponibilidade

```bash
curl -X POST http://localhost:3000/estoque/verificar-disponibilidade \
  -H "Content-Type: application/json" \
  -d '{
    "sku": "PROD-001",
    "quantidadeSolicitada": 10
  }'
```

Resposta:
```json
{
  "sku": "PROD-001",
  "disponivel": true,
  "quantidadeDisponivel": 150,
  "quantidadeSolicitada": 10,
  "podeAtender": true
}
```

### Consultar Produto

```bash
curl http://localhost:3000/estoque/PROD-001
```

Resposta:
```json
{
  "sku": "PROD-001",
  "nome": "Produto A",
  "quantidade": 150,
  "disponivel": true
}
```

---

## 🗂️ Estrutura do Projeto

```
src/
├─ server.js              # Inicialização do Express
├─ config/
│   └─ swagger.js         # Configuração do Swagger
├─ core/
│   ├─ config.js          # Configurações e env
│   ├─ logger.js          # Logging estruturado
│   └─ middleware.js      # Middlewares globais
├─ api/
│   ├─ health.js          # Healthcheck
│   └─ estoque.js         # Endpoints de estoque
├─ agents/
│   └─ base.js            # Classe base do agente
└─ services/
    └─ llm.js             # Cliente base de LLM
```

---

## 🔒 Dados Mock

O projeto utiliza dados mock para demonstração:

- **PROD-001**: Produto A (150 unidades disponíveis)
- **PROD-002**: Produto B (0 unidades - indisponível)
- **PROD-003**: Produto C (75 unidades disponíveis)

---

## 🐳 Docker

```bash
docker build -t elfa-backend .
docker run -p 3000:3000 elfa-backend
```

---

## ✅ Próximos Passos

1. Integrar com banco de dados real
2. Adicionar autenticação e autorização
3. Implementar cache de consultas
4. Adicionar mais validações de negócio
5. Expandir testes automatizados

---

**API pronta para integração com agentes e sistemas de cotação! 🚀**
