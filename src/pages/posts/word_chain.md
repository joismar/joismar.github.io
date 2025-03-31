---
layout: ../../layouts/post.astro
title: "WordChain"
pubDate: 2024-11-01
description: "Jogo multiplayer em tempo real baseado em palavras."
author: "joismar"
image:
  src:
  alt:
tags: ["game", "multiplayer", "websocket", "react", "aws", "lambda", "real world", "frontend"]
type: "project"
---
**Status do Projeto:** ![Badge](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow) \
**Tipo de Projeto:** Jogo Multiplayer Web \
**Área Principal:** Frontend e Backend \
**Repositório GitHub (frontend)**: [word-chain-client](https://github.com/joismar/word-chain-client) \
**Repositório GitHub (backend)**: [word-chain-backend](https://github.com/joismar/word-chain-backend) \
🎮 **Demonstração**: https://word-chain-client.vercel.app/

## 📋 Visão Geral
O WordChain é um jogo multiplayer em tempo real no qual os jogadores formam cadeias de palavras de maneira competitiva. A cada rodada, os participantes devem inserir uma nova palavra onde o final da ultima palavra deve se encaixar no começo da palavra atual inserida. 

- **Objetivo principal**: Criar uma experiência divertida baseada em palavras.
- **Público-alvo**: Jogadores casuais e entusiastas de jogos de palavras.
- **Destaque único**: Trás uma mecânica simples pra o contexto multiplayer em tempo real.

## 🛠️ Tecnologias Utilizadas
**Frontend:**  
- React + Vite  
- RxJS para gerenciamento de eventos  

**Backend:**  
- AWS Lambda + API Gateway  
- Python (boto3 para integração com AWS)  

**Banco de Dados:**  
- DynamoDB  

**Outras Ferramentas:**  
- WebSockets  

## ✨ Funcionalidades Principais
- 🎮 **Modo Multiplayer em Tempo Real** usando WebSockets.
- 🔠 **Gerenciamento de Palavras** baseado em regras de pontuação.
- 👥 **Suporte a múltiplos jogadores** com sessões de jogo individuais.
- 🔄 **Reconexão Automática** para jogadores que perdem a conexão.
- 🔐 **Autenticação JWT (planejado)**.

## 🧩 Arquitetura
```mermaid
graph TD
  A[Cliente] <-->|WebSocket| B[API Gateway]
  B <--> C[Lambda Game Logic]
  C <-->|Persistência| D[DynamoDB]
```

## 📂 Estrutura do Projeto
```tree
wordchain/
├── frontend/ (React + Vite)
│   ├── src/
│   ├── shared/
│   ├── components/
│   ├── hooks/
│   └── providers/
├── backend/ (Python + AWS Lambda)
│   ├── lambda/
│   ├── entities/
│   ├── interfaces/
│   ├── repository/
│   ├── utils/
│   └── main.py
└── README.md
```

## 🚀 Desafios e Soluções
| Desafio Técnico | Solução |
|-----------------|---------|
| Implementação de WebSockets com escalabilidade e com baixo custo | Uso do API Gateway da AWS para gerenciar conexões juntamente com AWS Lambda |
| Lidar com dados em tempo real com baixo custo, baixa latencia e alto desempenho | DynamoDB para armazenar sessões e jogadores |

## 📈 Próximos Passos
- [x] Implementação inicial do backend 🎯
- [x] Implementação inicial do frontend 🎨
- [ ] Adicionar efeitos sonoros 🔊
- [ ] Melhorar UI/UX para mobile 📱
- [ ] Adicionar sistema de pontuação mais robusto 🏆