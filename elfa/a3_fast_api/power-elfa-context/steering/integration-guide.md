# Guia de Integração

## Base URL
```
http://localhost:3000
```

## Swagger UI
```
http://localhost:3000/api-docs
```

## Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /health | Health check |
| GET | /estoque | Lista produtos |
| GET | /estoque/{sku} | Consulta produto |
| POST | /estoque/verificar-disponibilidade | Verifica estoque |

## Fluxo de Cotação

1. Cliente solicita cotação
2. Chamar `POST /estoque/verificar-disponibilidade`
3. Se `podeAtender === true`, criar cotação
4. Se `podeAtender === false`, informar indisponibilidade

## Códigos HTTP

- **200**: Sucesso
- **400**: Requisição inválida
- **404**: Produto não encontrado
- **500**: Erro interno
