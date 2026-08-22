# Prática 5 - Mapa de Temperaturas

## 1. Introdução

Neste trabalho, o objetivo era criar um programa em C para guardar e organizar as
temperaturas de três cidades diferentes durante três dias. Para isso, o exercício
pedia o uso de uma matriz 3x3, que funciona como uma tabela, e também o uso de
laços de repetição. A ideia é mostrar como o código pode organizar dados do dia a
dia de forma prática.

## 2. Desenvolvimento

- **Escrevendo o código:** foi criada a matriz `float temperaturas[3][3]`, usando
  `float` porque temperatura quase sempre tem números com vírgula (tipo 27.5). Para
  não precisar repetir o comando de leitura 9 vezes na mão, foram usados dois laços
  `for`, um dentro do outro: o primeiro cuida das cidades (linhas da matriz) e o
  segundo cuida dos dias (colunas).
- Dentro deles, o `scanf` guarda cada número digitado no seu lugar certo da matriz.
- **Compilando e testando:** o arquivo foi compilado com `gcc` e testado digitando
  as temperaturas de cada cidade. No final, o programa processou tudo e imprimiu um
  relatório na tela, com os números organizados com uma casa decimal.

## 3. Conclusão

Fazer esse código ajudou a entender como o computador guarda vários dados juntos.
Trabalhar com variáveis normais é mais tranquilo, mas pensar em uma matriz exigiu
mais cuidado para não se perder nas linhas e colunas. O mais interessante foi ver
como os laços `for` funcionam juntos na prática: o programa ficava na "Cidade 1" e
ia pedindo o dia 1, depois o dia 2, depois o dia 3, e só depois pulava para a
"Cidade 2". No fim, o código rodou sem dar erro no terminal.

## Como compilar e rodar

```
gcc temperaturas.c -o temperaturas
./temperaturas
```
