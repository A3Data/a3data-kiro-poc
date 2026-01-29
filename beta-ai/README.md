<img width="120" height="37" alt="kiro-logo-wordmark" src="https://github.com/user-attachments/assets/03885a25-692d-4463-94ad-9ae89e7392a7" />

## Contexto

Este repositório demonstra, de forma simples, como o Kiro utiliza
Powers e Steering para controlar o comportamento de uma IA integrada
ao Amazon Bedrock.

O objetivo não é performance ou arquitetura,
mas sim entendimento.

## O que vamos aprender
- Como criar um Power no Kiro
- Como usar Steering para controlar respostas da IA
- Como integrar conceitualmente com o Amazon Bedrock

## Caso de Uso

O usuário solicita um resumo de um texto.
O Kiro garante que a resposta:
    - Seja curta
    - Use linguagem simples
    - Tenha foco em negócio

##  Como usar a demo no Kiro
1. Clone este repositório
2. No Kiro IDE, abra o painel de Powers
3. Adicione o Power via caminho local ou GitHub
4. Inicie uma conversa usando palavras como:
   "resuma", "bedrock", "resumo de texto"

## Estrutura do Projeto
```
kiro-bedrock-demo/
│
├── README.md
│
└── power-bedrock-summary/
    ├── POWER.md
    └── steering/
        └── resumo-simples.md
```


<i>No Kiro, você não programa prompts.
Você cria poderes e governa comportamentos. - Divirta-se</i>
