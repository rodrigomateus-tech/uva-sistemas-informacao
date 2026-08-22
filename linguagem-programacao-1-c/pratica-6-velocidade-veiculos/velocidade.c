#include <stdio.h>

int main() {
    float velocidades[10];
    FILE *arquivo;
    int i;

    printf("=== Gerenciamento de Velocidade ===\n\n");

    // 1. Coletando as velocidades
    for (i = 0; i < 10; i++) {
        printf("Digite a velocidade do veiculo %d (km/h): ", i + 1);
        scanf("%f", &velocidades[i]);
    }

    // 2. Gravando no arquivo velocidades.txt
    arquivo = fopen("velocidades.txt", "w");
    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo!\n");
        return 1;
    }

    for (i = 0; i < 10; i++) {
        fprintf(arquivo, "%.2f\n", velocidades[i]);
    }
    fclose(arquivo);

    printf("\nDados salvos com sucesso em 'velocidades.txt'!\n");

    // 3. Lendo do arquivo para mostrar na tela (Análise)
    printf("\n--- Lendo dados do arquivo para analise ---\n");
    arquivo = fopen("velocidades.txt", "r");

    float vel_lida;
    int contador = 1;
    while (fscanf(arquivo, "%f", &vel_lida) != EOF) {
        printf("Veiculo %d: %.1f km/h\n", contador, vel_lida);
        contador++;
    }
    fclose(arquivo);

    return 0;
}
