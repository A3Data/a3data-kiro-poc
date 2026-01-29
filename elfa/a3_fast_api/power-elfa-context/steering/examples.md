# Exemplos de Uso

## Verificar Disponibilidade

**Request**:
```bash
curl -X POST http://localhost:3000/estoque/verificar-disponibilidade \
  -H "Content-Type: application/json" \
  -d '{"sku":"PROD-001","quantidadeSolicitada":10}'
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

✅ Pode criar cotação

---

## Estoque Insuficiente

**Request**:
```bash
curl -X POST http://localhost:3000/estoque/verificar-disponibilidade \
  -H "Content-Type: application/json" \
  -d '{"sku":"PROD-001","quantidadeSolicitada":200}'
```

**Response**:
```json
{
  "podeAtender": false,
  "quantidadeDisponivel": 150
}
```

❌ Estoque insuficiente

---

## Consultar Produto

**Request**:
```bash
curl http://localhost:3000/estoque/PROD-001
```

**Response**:
```json
{
  "sku": "PROD-001",
  "nome": "Produto A",
  "quantidade": 150,
  "disponivel": true
}
```

---

## Listar Todos

**Request**:
```bash
curl http://localhost:3000/estoque
```

**Response**:
```json
{
  "total": 3,
  "produtos": [...]
}
```
