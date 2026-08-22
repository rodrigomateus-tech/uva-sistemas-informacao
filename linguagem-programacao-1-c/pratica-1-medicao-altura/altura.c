#include <stdio.h>

int main() {
    float altura, soma, media;
    float maior, menor;
    int i;

    soma = 0; // Começa em zero para não dar erro no cálculo

    printf("--- Iniciando Medicao de 15 pessoas ---\n");

    for (i = 1; i <= 15; i++) {
        printf("Digite a altura da pessoa %d: ", i);
        scanf("%f", &altura);

        soma = soma + altura;

        // se for a primeira pessoa, ela é a maior e a menor ao mesmo tempo
        if (i == 1) {
            maior = altura;
            menor = altura;
        } else {
            if (altura > maior) {
                maior = altura;
            }
            if (altura < menor) {
                menor = altura;
            }
        }
    }

    media = soma / 15;

    printf("\n---------- RESULTADOS ----------\n");
    printf("A menor altura eh: %.2f\n", menor);
    printf("A maior altura eh: %.2f\n", maior);
    printf("A media de altura eh: %.2f\n", media);

    return 0;
}
