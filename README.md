<img width="120" height="37" alt="kiro-logo-wordmark" src="https://github.com/user-attachments/assets/03885a25-692d-4463-94ad-9ae89e7392a7" />

## Contexto

Esta POC demonstra como o **Kiro** pode ser utilizado pela **A3** como
uma **camada de governança, controle e padronização de comportamento de IA**,
independente do modelo utilizado (Amazon Bedrock, OpenAI, etc).

O objetivo não é treinar modelos ou criar prompts complexos, mas sim mostrar
como o Kiro permite que o negócio **defina regras claras de comportamento**
para agentes de IA, garantindo previsibilidade, segurança e alinhamento
com processos corporativos.

> O modelo gera a resposta.  
> O Kiro governa o comportamento.

---

## Objetivo da POC

Demonstrar, de forma prática, que o Kiro permite:

- Controlar **como a IA responde**, e não apenas o que ela responde
- Centralizar regras de negócio fora do prompt
- Reutilizar comportamentos em múltiplos casos de uso
- Garantir consistência entre diferentes modelos de IA
- Evoluir agentes de forma segura e auditável

---

## O que será demonstrado

Nesta POC, exploramos os principais conceitos do Kiro:

- **Powers** como contratos de capacidade
- **Steering** como regras explícitas de comportamento
- **Agent Hooks** como validações e proteções adicionais
- Governança sobre respostas de IA
- Integração conceitual com modelos via Amazon Bedrock

---

## Conceito-chave

No Kiro:

- O **prompt não é o centro da lógica**
- O **modelo não decide sozinho**
- O **negócio governa o comportamento**

Isso permite criar agentes mais previsíveis, confiáveis e alinhados
com padrões corporativos.

---


## Como o Kiro atua

### Power
Define **o que o agente pode fazer**.

Exemplo:
- “Gerar resumos”
- “Consultar estoque”
- “Analisar documentos”
- “Recomendar ações”

---

### Steering
Define **como o agente deve se comportar**.

Exemplo:
- Tamanho máximo da resposta
- Tom de linguagem
- Foco em negócio
- Restrições de conteúdo
- Padronização de saída

---

### Agent Hooks
Atuam como uma **camada de controle adicional**, permitindo:
- Validar respostas
- Ajustar formato
- Bloquear conteúdos indevidos
- Garantir conformidade com regras internas
