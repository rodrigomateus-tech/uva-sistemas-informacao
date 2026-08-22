# Prática 2 - Par e Ímpar

## Sobre

Nesta prática o foco foi a construção de um **fluxograma** para representar a lógica de
contagem de números pares e ímpares, além do cálculo da média aritmética apenas dos
números pares inseridos pelo usuário.

## Lógica utilizada

1. Inicializa os contadores (`qtd_par`, `qtd_impar`, `soma_par`) em zero.
2. Lê um número.
3. Se o número for negativo, o programa encerra o laço e exibe os resultados.
4. Se o número for positivo, verifica se é par ou ímpar:
   - Par: soma ao total de pares e incrementa o contador de pares.
   - Ímpar: incrementa o contador de ímpares.
5. Ao final, calcula a média dos números pares (`soma_par / qtd_par`) e exibe:
   - Quantidade de pares
   - Quantidade de ímpares
   - Média dos pares

## Por que fluxograma em vez de código?

A atividade permitia representar a lógica através de fluxograma, o que ajudou a
visualizar o fluxo de decisão (repetição indeterminada + condicionais) antes de
qualquer implementação em código.

## Referências

- FORBELLONE, A. L. V.; EBERSPÄCHER, H. F. *Lógica de Programação*. 3. ed. São Paulo: Prentice Hall, 2005.
- MIZRAHI, V. V. *Treinamento em Linguagem C*. 2. ed. São Paulo: Pearson, 2008.
