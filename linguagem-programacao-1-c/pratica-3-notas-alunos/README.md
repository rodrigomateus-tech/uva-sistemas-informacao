# Prática 3 - Notas dos Alunos

## 1. Introdução

Nesta atividade prática houve o primeiro contato mais aprofundado com conceitos
importantes da programação em C, como vetores, matrizes e manipulação de arquivos.
No início esses conceitos pareceram um pouco confusos, principalmente a parte de
trabalhar com arquivos, mas ao longo da prática ficou mais claro como tudo funciona
junto. A ideia principal do exercício foi criar um programa capaz de armazenar as
notas dos alunos junto com suas matrículas, utilizando uma matriz, e salvar essas
informações em um arquivo para que não sejam perdidas.

## 2. Desenvolvimento

O programa foi desenvolvido em C, optando por uma estrutura simples, porém
funcional. A estrutura principal foi baseada em uma matriz, onde cada linha
representa um aluno, armazenando:

- A matrícula do aluno
- A nota do aluno

Ou seja, uma matriz com duas colunas: uma para matrícula e outra para nota. Depois
disso, foi implementada a parte de salvar os dados em um arquivo, usando:

- `fopen` → para abrir o arquivo
- `fprintf` → para escrever os dados
- `fclose` → para fechar o arquivo

Também foi feita a leitura dos dados do arquivo usando `fscanf`. Essa parte foi a
mais desafiadora, porque qualquer erro pequeno fazia o programa não funcionar
corretamente, mas testando várias vezes foi possível fazer funcionar.

O programa permite inserir matrícula e nota de 5 alunos, armazena essas informações
na matriz, salva os dados em um arquivo `.txt` e depois lê esse arquivo, mostrando
os dados no console.

## 3. Conclusão

Essa prática foi muito importante para o aprendizado, principalmente por ser uma
das primeiras vezes trabalhando com armazenamento de dados de forma mais completa.
No começo houve bastante dificuldade, principalmente com arquivos, mas depois de
testar bastante ficou mais claro como funciona. Vetores e matrizes são essenciais
para organizar dados, e a manipulação de arquivos permite que essas informações
sejam salvas de forma permanente, algo muito utilizado em sistemas reais.

## Como compilar e rodar

```
gcc notas.c -o notas
./notas
```
