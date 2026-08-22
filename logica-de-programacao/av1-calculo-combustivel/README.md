# AV1 - Cálculo de Despesas de Combustível

## 1. Introdução

Este trabalho apresenta o desenvolvimento de um programa para cálculo de despesas
de combustível.

## 2. Desenvolvimento

O programa foi escrito em C, coletando a distância da viagem em quilômetros e o
preço do litro do combustível informados pelo usuário. Com esses dados, o gasto
total é calculado pela fórmula `(distância / 10) * preço`, considerando uma média
de consumo de 10 km por litro. O código foi compilado e testado com uma distância
de 309 km e preço de R$ 6,09 por litro, resultando corretamente em um gasto de
R$ 188,18.

## 3. Conclusão

A elaboração deste algoritmo foi fundamental para colocar em prática a teoria de
variáveis, tipos de dados e operadores estudada nas primeiras unidades da
disciplina.

## Como compilar e rodar

```
gcc combustivel.c -o combustivel
./combustivel
```
