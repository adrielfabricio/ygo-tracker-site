---
title: 'Planilha de coleção de Yu-Gi-Oh!: o que anotar e como calcular o que falta'
description: 'Como montar uma planilha para controlar suas cartas de Yu-Gi-Oh!: colunas, fórmula das cartas que faltam, custo estimado do deck e quando vale trocar por um app.'
seoTitle: 'Planilha de coleção de Yu-Gi-Oh! | YGO Tracker'
locale: 'pt-br'
published: 2026-10-16
---

Uma planilha é o jeito mais comum de começar a controlar uma coleção de Yu-Gi-Oh!. Ela é grátis, funciona no computador e no celular e você decide o que anotar. O problema costuma aparecer depois, quando a coleção cresce e a planilha para de ser atualizada.

Este guia mostra como montar uma planilha que responde as perguntas que importam: o que você tem, o que falta em cada deck e quanto ainda falta gastar.

## As colunas que fazem diferença

Para cada carta, uma linha. As colunas que valem a pena:

| Coluna        | Exemplo                               | Para que serve                                  |
| ------------- | ------------------------------------- | ----------------------------------------------- |
| Nome (PT)     | Florescer de Cinzas & Primavera Feliz | Achar a carta na sua pasta                      |
| Nome (EN)     | Ash Blossom & Joyous Spring           | Buscar em lojas e decklists                     |
| Edição        | MACR-EN036                            | Separar impressões com preços diferentes        |
| Raridade      | Secret Rare                           | A mesma carta muda muito de preço pela raridade |
| Necessárias   | 3                                     | Quantas cópias o deck pede                      |
| Possuídas     | 1                                     | Quantas cópias você já tem                      |
| Preço de ref. | 25,00                                 | O valor que você viu em uma loja                |

Se você joga mais de um deck, crie uma aba por deck com as colunas **Necessárias** e **Possuídas**, e uma aba geral para a coleção inteira.

## A fórmula das cartas que faltam

Com **Necessárias** na coluna E e **Possuídas** na coluna F, crie a coluna **Faltam** (coluna H) com:

```text
=MÁXIMO(0; E2-F2)
```

O `MÁXIMO` com zero evita número negativo quando você tem mais cópias do que o deck pede. Em planilhas configuradas em inglês, a mesma fórmula é `=MAX(0, E2-F2)`.

## O custo estimado do deck

Com **Faltam** na coluna H e o **Preço de referência** na coluna G, o total do que falta comprar é:

```text
=SOMARPRODUTO(H2:H100; G2:G100)
```

Em inglês, `=SUMPRODUCT(H2:H100, G2:G100)`. O resultado é uma estimativa: o preço muda de loja para loja e de semana para semana, então confira antes de fechar a compra.

## Onde a planilha costuma falhar

A planilha funciona bem enquanto você mantém ela em dia. Os problemas mais comuns:

- **Atualizar no celular é chato.** Abriu um pacote na loja? Editar uma célula pequena no celular, no meio da conversa, é o momento em que a planilha fica para depois.
- **A mesma carta em vários decks.** Se o Ocultador de Efeitos está em dois decks, você precisa lembrar de atualizar as duas abas.
- **Nome em português e em inglês.** Sem as duas colunas preenchidas, fica difícil achar a carta na loja que lista tudo em inglês.
- **Sem internet, sem planilha.** Planilhas online nem sempre abrem bem quando o sinal some, que é justamente o que acontece no fundo da loja.

## Quando vale trocar por um app

Se você só controla uma pasta, a planilha resolve. Quando você passa a montar decks físicos e quer saber o que falta comprar em cada um, um app feito para isso economiza tempo.

O [YGO Tracker](/) faz as contas deste guia sozinho:

- **Decks com progresso:** você diz quantas cópias o deck pede e quantas tem, e o app mostra a porcentagem concluída e quanto custa, em média, o que falta.
- **Busca em português e em inglês:** você acha a carta por qualquer um dos nomes, sem precisar preencher duas colunas.
- **Coleções por set:** importe um set inteiro e marque as cartas conforme elas chegam.
- **Lista de compras:** copie o que falta e leve para a loja.
- **Funciona offline:** marcar cartas e ajustar quantidades não depende de sinal.

É grátis para começar, com 1 deck ativo, até 25 itens na lista de desejos e até 2 coleções.
