---
layout: ../../layouts/post.astro
title: "Funase Inovação"
pubDate: 2025-02-01
description: "Projeto de inovação para a Fundação de Atendimento Socioeducativo de Pernambuco."
author: "joismar"
image:
  src:
  alt:
tags: ["web", "frontend", "backend", "typescript", "react", "supabase", "refine", "shadcnUI", "real world", "mvp", "voluntary"]
type: "project"
---

**Status do Projeto:** ![Badge](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)  
**Tipo de Projeto:** Progressive Web App \
**Área Principal:** Frontend

## 📋 Visão Geral
Projeto voluntário que consistiu em uma aplicação web para gestão de dados e processos relacionados aos socio-educandos da Fundação de Atendimento Socioeducativo de Pernambuco (Funase). A aplicação tem como objetivo principal facilitar o acesso e a manipulação de informações dos socio-educandos. O público-alvo são os funcionários e gestores da Funase, que poderão utilizar a aplicação para otimizar o trabalho diário e melhorar a eficiência dos processos internos.
Além disso, a aplicação conta com um sistema de notificações e alertas para feedback de documentações pendentes, e um sistema de relatórios e gráficos para análise de dados.

## 🛠️ Tecnologias Utilizadas
**Linguagem Principal:** ![Typescript](https://img.shields.io/badge/-Typescript-3178C6?logo=typescript&logoColor=white&style=flat)

**Frontend:** React, Refine, shadcnUI. \
**Backend:** Supabase. \
**Banco de Dados:** PostgreSQL (supabase).

## ✨ Funcionalidades Principais
- Login e autenticação de usuários 🔐
- Restrição de acesso por níveis de permissão 🔑
- Cadastro e edição de socio-educandos e unidades 📝
- Notificações e alertas para documentações pendentes 📬
- Relatórios e gráficos para análise de dados 📊

## 📷 Capturas de Tela/Vídeo
Em breve...

## 📂 Estrutura do Projeto (Opcional)
```tree
.
├── public
└── src
    ├── app
    │   └── [... paginas e rotas de api]
    ├── components
    │   └── [... componentes ui]
    ├── domain
    │   └── [... entidades e regras de negócio]
    ├── hooks
    ├── lib
    ├── pages
    │   └── api
    ├── providers
    │   ├── auth-provider
    │   ├── data-provider
    │   └── loading-provider
    ├── styles
    └── utils
        └── supabase
```

## 🚀 Desafios e Soluções

| Desafio Técnico | Solução |
|-----------------|---------|
| Gerenciamento de usuários do Supabase | Criação de tabela profile auxiliar e funções de sincronização |
| Lidar com notificações nativas no frontend | Utilização do recurso de realtime do supabase |