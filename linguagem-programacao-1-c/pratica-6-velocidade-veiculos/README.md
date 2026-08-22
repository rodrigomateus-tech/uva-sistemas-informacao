# Prática 6 - Gerenciamento de Velocidade de Veículos

## 1. Introdução

Nesta prática, o desafio foi desenvolver um programa em C capaz de registrar a
velocidade de 10 veículos em uma rodovia. O objetivo principal, além de usar
vetores para guardar os números, foi aprender a mexer com arquivos de texto (.txt),
o que é importante porque permite que os dados não sumam quando o programa é
fechado, ficando salvos no computador para serem usados depois.

## 2. Desenvolvimento

- **Lógica e vetores:** foi criado um vetor de 10 posições (`float velocidades[10]`)
  e um laço `for` para o programa perguntar a velocidade de cada um dos 10 carros.
- **Manipulação de arquivos:** essa foi a parte mais nova. Foi usado `fopen` para
  criar um arquivo chamado `velocidades.txt`, e `fprintf` dentro de um laço para
  escrever cada velocidade digitada dentro desse arquivo.
- **Leitura de dados:** para garantir que deu certo, o programa abre o arquivo
  novamente, agora para leitura (`"r"`), buscando os dados e imprimindo tudo de
  novo na tela, confirmando que a gravação funcionou.
- **Testes no terminal:** o código foi compilado com `gcc`, e o programa criou o
  arquivo na pasta e exibiu o relatório final corretamente.

## 3. Conclusão

Essa prática foi interessante porque mostrou a diferença entre guardar algo na
memória temporária e salvar em um arquivo de verdade. No começo houve dúvida sobre
como abrir e fechar o arquivo (`fclose`), mas depois de entender que o computador
precisa "dar tchau" para o arquivo salvar as alterações, tudo funcionou. O uso de
vetores facilitou muito o controle dos 10 veículos, e a sensação é de evolução na
lógica de organização de dados.

## Como compilar e rodar

```
gcc velocidade.c -o velocidade
./velocidade
```
