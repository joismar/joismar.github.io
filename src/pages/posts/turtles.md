---
layout: ../../layouts/post.astro
title: "Simulação de Comportamento de Tartarugas com p5.js"
pubDate: 2024-02-20
description: "Simulação interativa de agentes autônomos com sistema de colisão e busca por comida."
author: "joismar"
image:
  src: 
  alt: 
tags: ["simulation", "p5.js", "javascript"]
type: "project"
---
![Capa do Projeto](https://placehold.co/736x200)

**Status do Projeto:** ![Badge](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellowgreen)  
**Tipo de Projeto:** Simulação Interativa  
**Área Principal:** Frontend/Visualização

## 📋 Visão Geral
Simulação de agentes autônomos (tartarugas) que:
- Movem-se dentro de um círculo central
- Evitam colisões entre si usando zonas de segurança
- Buscam comida com raio de visão
- Têm velocidade e tamanho proporcional à idade
- Permitem interação do usuário (adicionar tartarugas/comida via clique)

**Diferenciais:**  
- Sistema visual de arcos para detectar ameaças
- Estados dinâmicos (fuga/alimentação)
- Feedback visual imediato (cores indicam comportamento)

## 🛠️ Tecnologias Utilizadas
**Stack Principal:** ![p5.js](https://img.shields.io/badge/p5.js-ED225D?style=flat&logo=p5.js&logoColor=white)

**Frontend:**  
- p5.js (renderização canvas)
- JavaScript ES6

**Outras Ferramentas:**  
- GitHub Pages (hosting)

## ✨ Funcionalidades Principais
- 🐢 Geração procedural de tartarugas/comida  
- 🚧 Sistema de colisão com zona de segurança personalizável  
- 🎯 Busca inteligente por comida com persistência de target  
- 🔄 Movimento suave com ajuste angular progressivo  
- 🖱️ Interatividade:  
  - Clique esquerdo: Adiciona comida  
  - Clique direito: Adiciona nova tartaruga  

## 🎮 Demonstração
<iframe style="border: 0px; width: 800px; height: 800px;" src="https://preview.p5js.org/cloudwilker/embed/t9yJ82TWx"></iframe>

## 🚀 Desafios e Soluções
- Colisão Angular:
Implementação de arcos de detecção usando p5.Vector.angleBetween() e trigonometria para otimizar performance.

- Transição Suave:
Uso de rotationSmooth com fator proporcional ao tamanho da tartaruga para movimentos naturais.

- Geração Segura:
Algoritmo de spawn que garante posicionamento inicial válido dentro do círculo usando do-while.

# 📈 Próximos Passos
- Adicionar sistema de reprodução/evolução
- Implementar slideres para ajuste de parâmetros em tempo real
- Adicionar modo "free roam" sem restrição circular