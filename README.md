<img width="120" height="37" alt="kiro-logo-wordmark" src="https://github.com/user-attachments/assets/03885a25-692d-4463-94ad-9ae89e7392a7" />

## Contexto

Este repositório mostra como o Kiro garante que a IA se comporte
do jeito que o negócio espera.

O modelo de IA apenas gera a resposta.
O Kiro define as regras.

---

## O que vamos aprender
- Como criar um **Power** no Kiro
- Como usar **Steering** para definir regras claras de comportamento
- Como **Agent Hooks** podem validar, ajustar ou proteger respostas
- Como o Kiro se posiciona como camada de governança sobre modelos de IA
- Como integrar conceitualmente com o Amazon Bedrock (ou qualquer outro modelo)

---

## Caso de Uso – Power no Kiro

O usuário solicita um resumo de um texto.

Independentemente do modelo de IA utilizado, o Kiro garante que a resposta:
- Seja curta
- Use linguagem simples
- Tenha foco em negócio

Essas regras não estão no prompt,
mas sim no **Power e no Steering**, que governam o comportamento do agente.

---

## Como usar o Power
1. Clone este repositório
2. No Kiro IDE, abra o painel de **Powers**
3. Adicione o Power via caminho local ou GitHub
4. Inicie uma conversa usando termos como:
   - "resuma"
   - "resumo de texto"
   - "bedrock"

Observe como o comportamento da resposta é controlado pelo Kiro,
independentemente da pergunta.

---

## Estrutura do Projeto
```txt
kiro-bedrock-demo/
│
├── README.md
│
└── power-bedrock-summary/
    ├── POWER.md
    └── steering/
        └── resumo-simples.md
```

<i>
No Kiro, você não programa prompts.  
Você cria poderes, define regras e governa comportamentos.  
Divirta-se.
</i>
