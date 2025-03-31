---
layout: ../../layouts/post.astro
title: "Simulação de Agentes Autônomos com p5.js"
pubDate: 2024-02-20
description: "Simulação interativa de agentes autônomos com sistema de colisão e busca por comida."
author: "joismar"
image:
  src: 
  alt: 
tags: ["simulation", "p5.js", "javascript"]
type: "project"
---
**Status do Projeto:** ![Badge](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)  
**Tipo de Projeto:** Simulação Interativa  
**Área Principal:** Simulação

## 📋 Visão Geral
O projeto faz parte de um projeto maior e consiste na simulação de agentes autônomos (tartarugas) que:
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
**Linguagem Principal:** ![Javascript](https://img.shields.io/badge/-Javascript-yellow?logo=javascript&logoColor=black&style=flat)

**Frontend:**  
- p5.js (renderização canvas)

## ✨ Funcionalidades Principais
- 🐢 Geração aleatória de tartarugas/comida  
- 🚧 Sistema de colisão com zona de segurança personalizável  
- 🎯 Busca inteligente por comida com persistência de target  
- 🔄 Movimento suave com ajuste angular progressivo  
- 🖱️ Interatividade:  
  - Clique esquerdo: Adiciona comida  
  - Clique direito: Adiciona nova tartaruga  

## 🎮 Demonstração
<iframe style="border: 0px; width: 800px; height: 800px;" src="https://preview.p5js.org/cloudwilker/embed/t9yJ82TWx"></iframe>

## 🚀 Desafios e Soluções

| Desafio Técnico | Solução |
|-----------------|---------|
| Colisão Angular | Implementação de arcos de detecção usando p5.Vector.angleBetween() e trigonometria para otimizar performance. |
| Transição Suave | Uso de rotationSmooth com fator proporcional ao tamanho da tartaruga para movimentos naturais. |
| Geração Segura | Algoritmo de spawn que garante posicionamento inicial válido dentro do círculo usando do-while. |

# 📈 Próximos Passos
- Adicionar sistema de reprodução/evolução
- Implementar slideres para ajuste de parâmetros em tempo real