# AVA2 - Calculadora de IMC

## 1. Introdução

Programar é, antes de tudo, encontrar formas de facilitar a vida das pessoas. No
dia a dia de um educador físico, cada minuto conta. Criar uma ferramenta para o
cálculo do IMC (Índice de Massa Corporal) em linguagem C não é apenas um exercício
de código, mas uma forma de entregar agilidade e precisão para quem cuida da saúde
dos outros.

## 2. Desenvolvimento

O projeto começou com a estrutura básica: entrada de dados (peso e altura) e a
fórmula clássica `peso / altura²`. Durante o desenvolvimento, ficou claro que
apenas exibir o número final não seria muito amigável para o usuário. Por isso, foi
implementada uma estrutura de decisão `if / else if` para classificar o resultado
de acordo com as faixas da OMS (baixo peso, peso ideal, sobrepeso, obesidade). Um
detalhe do processo foi o ajuste na saída do terminal, corrigindo um problema
inicial de acentuação para garantir uma interface mais limpa. O programa foi testado
com peso de 59 kg e altura de 1,76 m, resultando em IMC 19,05, classificado
corretamente como "Peso Ideal".

## 3. Conclusão

O software cumpre sua missão: devolve tempo ao educador físico. Em vez de se
preocupar com divisões e potências, ele pode focar no que realmente importa, o
acompanhamento humano e a motivação de seus alunos. Este projeto mostra que a
tecnologia, quando bem aplicada, é uma ponte para um atendimento mais humano e
eficiente.

## Como compilar e rodar

```
gcc imc.c -o imc
./imc
```
