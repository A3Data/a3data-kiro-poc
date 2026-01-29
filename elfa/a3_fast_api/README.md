# 🚀 FastAPI Boilerplate – Agents, ML & CI/CD Ready

Boilerplate de **FastAPI em Python** preparado para:
- Construção de **Agentes de IA**
- Integração com **LLMs**
- Pipelines simples de **Machine Learning**
- Observabilidade mínima
- Execução em ambientes de **CI/CD**

Este projeto **não implementa regras de negócio**.  
Ele entrega **infraestrutura, organização e capacidade técnica** para acelerar MVPs e produtos de IA.

---

## 🎯 Objetivo

Fornecer uma base sólida, simples e extensível para desenvolvimento de:
- APIs de agentes inteligentes
- Serviços de IA aplicada
- Backends para LLMs
- Provas de conceito rápidas
- Produtos escaláveis desde o primeiro commit

Foco em:
- Clareza
- Extensibilidade
- Prontidão para produção
- Baixo atrito para o time

---

## 🗂️ Estrutura do Projeto

```
app/
├─ main.py                 # Inicialização da FastAPI
├─ core/
│   ├─ config.py           # Configurações e env
│   ├─ logging.py          # Logging estruturado
│   └─ middleware.py       # Middlewares globais
├─ api/
│   └─ health.py           # Healthcheck
├─ agents/
│   ├─ base.py             # Classe base do agente
│   └─ context.py          # Contexto do agente
├─ services/
│   └─ llm.py              # Cliente base de LLM
├─ ml/
│   ├─ pipeline.py         # Pipeline de ML
│   └─ models.py           # Modelos ML
tests/
└─ test_health.py          # Testes básicos
```

---

## 📦 Dependências Principais

### API
- `fastapi` - Framework web moderno e rápido
- `uvicorn` - Servidor ASGI
- `pydantic` - Validação de dados
- `python-dotenv` - Gerenciamento de variáveis de ambiente

### Agents & LLM
- `httpx` - Cliente HTTP assíncrono
- `tenacity` - Retry logic
- `loguru` - Logging avançado

### ML (opcional)
- `numpy` - Computação numérica
- `pandas` - Manipulação de dados
- `scikit-learn` - Machine Learning

---

## ⚙️ Configuração

1. Copie o arquivo de exemplo:
```bash
cp .env.example .env
```

2. Configure as variáveis:
```env
APP_NAME=fastapi-agents
APP_ENV=local
DEBUG=true
LOG_LEVEL=INFO
LLM_PROVIDER=bedrock
```

---

## 🚀 Como Rodar

### Desenvolvimento
```bash
pip install -e ".[dev]"
uvicorn app.main:app --reload
```

### Produção
```bash
pip install .
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

### Testes
```bash
pytest
pytest --cov=app tests/
```

### Docker
```bash
docker build -t fastapi-agents .
docker run -p 8000:8000 fastapi-agents
```

---

## 📊 Endpoints

- `GET /health/` - Healthcheck da aplicação
- `GET /docs` - Documentação Swagger
- `GET /redoc` - Documentação ReDoc

---

## 🧠 Agentes

A classe `BaseAgent` fornece estrutura básica para criação de agentes:

```python
from app.agents.base import BaseAgent

class MeuAgente(BaseAgent):
    async def execute(self, input_data):
        # Sua lógica aqui
        return resultado
```

### Contexto de Agente

```python
from app.agents.context import AgentContext

context = AgentContext()
context.add("user_id", "123")
context.add("session", session_data)

# Recuperar dados
user_id = context.get("user_id")

# Histórico
history = context.get_history()
```

---

## 🔌 LLM Client

Cliente genérico para integração com LLMs:

```python
from app.services.llm import LLMClient

llm = LLMClient("bedrock")
response = await llm.invoke("Seu prompt aqui")

# Streaming
async for chunk in llm.stream("Seu prompt"):
    print(chunk)
```

---

## 🤖 Machine Learning

### Pipeline

```python
from app.ml.pipeline import MLPipeline

class MeuPipeline(MLPipeline):
    async def preprocess(self, data):
        # Pré-processamento
        return processed_data
    
    async def predict(self, data):
        # Inferência
        return predictions
    
    async def postprocess(self, predictions):
        # Pós-processamento
        return result

# Uso
pipeline = MeuPipeline("meu-pipeline")
result = await pipeline.run(data)
```

### Modelos

```python
from app.ml.models import MLModel

model = MLModel("path/to/model.pkl")
model.load()
predictions = model.predict(data)
```

---

## 📝 Logging

Logs estruturados com correlação por `trace_id`:

```python
from app.core.logging import logger

logger.info("Mensagem", extra={"metadata": "valor"})
logger.error("Erro", extra={"error": str(e)})
```

Cada requisição recebe um `trace_id` único no header `X-Trace-ID`.

---

## 🐳 Docker

Imagem otimizada para produção:
- Python 3.11 slim
- Apenas dependências de produção
- Porta 8000 exposta

---

## 🔒 Princípios

- Boilerplate, não framework
- Sem lock-in tecnológico
- Fácil de estender
- Seguro por padrão
- Pronto para agentes, ML e LLMs
- Evolução incremental

---

## ✅ Próximos Passos

1. Implemente seu agente estendendo `BaseAgent`
2. Configure o provider LLM desejado (Bedrock, OpenAI, etc.)
3. Adicione suas rotas em `app/api/`
4. Crie pipelines ML em `app/ml/`
5. Expanda os testes conforme necessário

---

**Pronto para construir APIs inteligentes com Python! 🚀**
