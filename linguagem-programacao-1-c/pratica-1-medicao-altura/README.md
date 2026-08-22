# Prática 1 - Medição de Altura

## 1. Introdução

Este trabalho apresenta o desenvolvimento de um algoritmo para coletar e analisar a
altura de 15 pessoas. O objetivo é aplicar conceitos de lógica de programação, como
laços de repetição e estruturas de decisão, para calcular automaticamente a maior
altura, a menor altura e a média do grupo.

## 2. Desenvolvimento

Para resolver o problema das 15 alturas, o programa foi construído em C usando o
VS Code, seguindo os seguintes passos:

- **Escrevendo o código:** a ideia principal foi usar um laço `for` para não precisar
  repetir o código 15 vezes. Dentro dele, o programa lê a altura e já testa com um
  `if` para descobrir quem é o maior e o menor da fila. Também foi criada uma
  variável para ir somando os valores e, no fim, calcular a média.
- **Compilando:** o arquivo foi compilado com `gcc`. Houve alguns erros de sintaxe
  no início, corrigidos até o compilador gerar o executável sem erros.
- **Testando na prática:** o programa foi executado e testado com as 15 alturas
  inseridas uma a uma, processando corretamente a menor e a maior altura, além da
  média do grupo.

## 3. Conclusão

Fazer esse trabalho foi importante para entender como a programação funciona na
prática: o código conseguiu "decidir" quem era o mais alto e o mais baixo sem
precisar fazer a conta na mão. As dificuldades iniciais com o terminal ajudaram a
entender melhor como VS Code e GCC funcionam juntos. No fim, todos os cálculos
pedidos foram entregues corretamente.

## Como compilar e rodar

```
gcc altura.c -o altura
./altura
```
