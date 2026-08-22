#include <stdio.h>

int main() {
    int alunos[5][2]; // [linha][coluna] -> 0 = matricula, 1 = nota
    int i;
    FILE *arquivo;

    printf("Cadastro de alunos\n");
    for (i = 0; i < 5; i++) {
        printf("\nAluno %d\n", i + 1);
        printf("Digite a matricula: ");
        scanf("%d", &alunos[i][0]);
        printf("Digite a nota: ");
        scanf("%d", &alunos[i][1]);
    }

    // Salvando os dados em um arquivo de texto
    arquivo = fopen("alunos.txt", "w");
    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo!\n");
        return 1;
    }
    for (i = 0; i < 5; i++) {
        fprintf(arquivo, "%d %d\n", alunos[i][0], alunos[i][1]);
    }
    fclose(arquivo);

    printf("\nDados salvos com sucesso!\n");

    // Lendo os dados do arquivo para verificar se foram salvos corretamente
    arquivo = fopen("alunos.txt", "r");
    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo para leitura!\n");
        return 1;
    }

    printf("\nDados lidos do arquivo:\n");
    for (i = 0; i < 5; i++) {
        fscanf(arquivo, "%d %d", &alunos[i][0], &alunos[i][1]);
        printf("Matricula: %d | Nota: %d\n", alunos[i][0], alunos[i][1]);
    }
    fclose(arquivo);

    return 0;
}
