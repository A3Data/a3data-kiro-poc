name: verificar_disponibilidade_estoque
description: Verifica se há estoque suficiente para um produto
method: POST
url: http://localhost:3000/estoque/verificar-disponibilidade
headers:
  Content-Type: application/json

input_schema:
  type: object
  properties:
    sku:
      type: string
      description: SKU do produto (ex: PROD-001)
    quantidadeSolicitada:
      type: integer
      description: Quantidade desejada
  required:
    - sku
    - quantidadeSolicitada

output_schema:
  type: object
  properties:
    sku:
      type: string
    disponivel:
      type: boolean
    quantidadeDisponivel:
      type: integer
    quantidadeSolicitada:
      type: integer
    podeAtender:
      type: boolean

# API Elfa - Documentação

API para consulta de estoque e verificação de disponibilidade de produtos.

## 📡 Base URL

- **Desenvolvimento**: `http://localhost:3000`
- **Produção**: `https://api.elfa.com`
- **Swagger**: `http://localhost:3000/api-docs`

---

## 🔌 Endpoints

### 1. Health Check
```
GET /health
```

Verifica status da API.

**Response**:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-29T10:30:00.000Z"
}
```

---

### 2. Listar Produtos
```
GET /estoque
```

Retorna todos os produtos.

**Response**:
```json
{
  "total": 3,
  "produtos": [
    {
      "sku": "PROD-001",
      "nome": "Produto A",
      "quantidade": 150,
      "disponivel": true
    }
  ]
}
```

---

### 3. Consultar Produto
```
GET /estoque/{sku}
```

Retorna um produto específico.

**Response 200**:
```json
{
  "sku": "PROD-001",
  "nome": "Produto A",
  "quantidade": 150,
  "disponivel": true
}
```

**Response 404**:
```json
{
  "error": "Produto não encontrado"
}
```

---

### 4. Verificar Disponibilidade
```
POST /estoque/verificar-disponibilidade
```

Verifica se há estoque suficiente.

**Request**:
```json
{
  "sku": "PROD-001",
  "quantidadeSolicitada": 10
}
```

**Response**:
```json
{
  "sku": "PROD-001",
  "disponivel": true,
  "quantidadeDisponivel": 150,
  "quantidadeSolicitada": 10,
  "podeAtender": true
}
```

---

## 💡 Conceitos

### SKU
Identificador único do produto (ex: PROD-001)

### Disponibilidade
Produto pode ser vendido quando:
- `disponivel === true`
- `quantidade >= quantidadeSolicitada`

### podeAtender
Indica se há estoque suficiente para atender o pedido.

---

## 📦 Produtos Mock

- **PROD-001**: 150 unidades (disponível)
- **PROD-002**: 0 unidades (indisponível)
- **PROD-003**: 75 unidades (disponível)
