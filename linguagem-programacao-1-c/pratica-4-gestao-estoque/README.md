# Prática 4 - Gestão de Estoque

## 1. Introdução

Na Prática 4, o objetivo foi aplicar os mesmos conceitos de vetores, matrizes e
manipulação de arquivos da prática anterior, mas em um cenário diferente: a gestão
de estoque de um armazém. O desafio era usar uma matriz bidimensional para guardar
as informações dos produtos e garantir que esses dados fossem salvos em um arquivo
de texto, mostrando que a mesma lógica que organiza notas de alunos pode ser
adaptada para o controle de mercadorias em um sistema comercial.

## 2. Desenvolvimento

Para manter o padrão e a simplicidade da prática anterior, o raciocínio da Prática
3 foi adaptado. Foi criada uma matriz `int estoque[5][2]`, onde a primeira coluna
(índice 0) armazena o código de identificação do produto e a segunda coluna
(índice 1) armazena a quantidade desse produto no armazém.

A lógica principal fluiu de forma mais rápida dessa vez. Um laço `for` foi usado
para cadastrar 5 produtos. Depois que o usuário digita os dados, o programa usa
`fopen` no modo `"w"` para criar o arquivo `estoque.txt`, gravando linha por linha
com `fprintf`. Como a manipulação de arquivos já tinha sido praticada na atividade
anterior, os erros foram bem menores. Para finalizar, o código faz a leitura do
arquivo recém-criado usando `fscanf` no modo `"r"`, listando no console os códigos
e quantidades salvos de forma permanente.

## 3. Conclusão

Finalizar essa quarta prática trouxe muito mais confiança na linguagem C. Refazer a
estrutura de matrizes e arquivos, agora para um tema de gestão de estoque, serviu
para fixar o conteúdo de vez. Conseguir fazer os dados de um sistema de estoque
"sobreviverem" após o programa ser encerrado é gratificante, e representa mais um
passo importante para entender como os sistemas de gestão do dia a dia realmente
funcionam nos bastidores.

## Como compilar e rodar

```
gcc estoque.c -o estoque
./estoque
```
