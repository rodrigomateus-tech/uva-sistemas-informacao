#include <stdio.h>

int main() {
    // Criando a matriz 3x3 para armazenar temperaturas (usando float para números com vírgula)
    float temperaturas[3][3];
    int linha, coluna;

    printf("=== Mapa de Temperaturas ===\n\n");

    // O usuário vai digitar as temperaturas
    // O primeiro 'for' passa pelas 3 cidades (linhas)
    for (linha = 0; linha < 3; linha++) {
        printf("Digite as temperaturas da Cidade %d:\n", linha + 1);

        // O segundo 'for' passa pelos 3 dias (colunas) de cada cidade
        for (coluna = 0; coluna < 3; coluna++) {
            printf("  Temperatura no Dia %d: ", coluna + 1);
            scanf("%f", &temperaturas[linha][coluna]);
        }
        printf("\n"); // Pula uma linha para ficar mais organizado na tela
    }

    // Mostrar os dados armazenados na tela
    printf("=== Relatorio Registrado ===\n");
    for (linha = 0; linha < 3; linha++) {
        printf("Cidade %d: ", linha + 1);

        for (coluna = 0; coluna < 3; coluna++) {
            // Imprime a temperatura com 1 casa decimal (%.1f)
            printf("%.1f C  ", temperaturas[linha][coluna]);
        }
        printf("\n");
    }

    return 0;
}
