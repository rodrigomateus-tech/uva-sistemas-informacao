# Prática 2 - Par e Ímpar

## 1. Introdução

Para este exercício, o foco foi a construção de um fluxograma, já que essa
representação visual facilita muito a compreensão de como o programa deve "decidir"
o caminho dos dados antes de qualquer codificação. O desafio principal era realizar
a contagem de valores pares e ímpares, além de calcular a média aritmética apenas
dos números pares inseridos.

## 2. Desenvolvimento

O programa foi pensado como um caminho que o computador deve seguir. Primeiro,
foram criadas "gavetas" para guardar as contagens e a soma dos números. O
funcionamento é simples: o programa pede um número e verifica se ele é positivo.

- **Se for positivo:** o programa verifica se é par ou ímpar. Se for par, guarda o
  valor para calcular a média depois. Se for ímpar, apenas conta que apareceu mais
  um. Depois disso, volta para o início e pede outro número.
- **Se for negativo:** o programa entende que o trabalho acabou, sai do ciclo e
  mostra os resultados na tela.

Usar o desenho do fluxograma foi essencial porque permitiu enxergar exatamente onde
cada conta acontece, evitando que o programa se perdesse ou fizesse cálculos na hora
errada.

## 3. Conclusão

Inicialmente, a lógica de uma quantidade indeterminada de números pareceu um pouco
abstrata para montar direto em código. Ao optar pelo fluxograma, tudo ficou mais
claro: as setas indicando o retorno ao início e a saída para o cálculo final
tornaram o problema muito mais simples de resolver. Essa prática reforçou que, na
programação, entender o fluxo do pensamento é tão importante quanto escrever as
linhas de comando.

## Lógica representada no fluxograma

1. Inicializa os contadores (`qtd_par`, `qtd_impar`, `soma_par`) em zero.
2. Lê um número.
3. Se negativo, encerra o laço e exibe os resultados.
4. Se positivo, verifica se é par (soma ao total e incrementa contador) ou ímpar
   (incrementa contador).
5. Ao final, calcula a média dos pares e exibe quantidade de pares, de ímpares e a
   média.
