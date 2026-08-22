#include <stdio.h>

int main() {
    int estoque[5][2]; // [linha][coluna] -> 0 = codigo do produto, 1 = quantidade
    int i;
    FILE *arquivo;

    printf("--- Cadastro de Estoque do Armazem ---\n");
    for (i = 0; i < 5; i++) {
        printf("\nProduto %d\n", i + 1);
        printf("Digite o codigo do produto: ");
        scanf("%d", &estoque[i][0]);
        printf("Digite a quantidade em estoque: ");
        scanf("%d", &estoque[i][1]);
    }

    // Salvando os dados no arquivo de texto
    arquivo = fopen("estoque.txt", "w");
    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo!\n");
        return 1;
    }
    for (i = 0; i < 5; i++) {
        fprintf(arquivo, "%d %d\n", estoque[i][0], estoque[i][1]);
    }
    fclose(arquivo);

    printf("\nDados do estoque salvos com sucesso!\n");

    // Lendo os dados para verificar se foram salvos corretamente
    arquivo = fopen("estoque.txt", "r");
    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo para leitura!\n");
        return 1;
    }

    printf("\nDados lidos do arquivo (Estoque Atual):\n");
    for (i = 0; i < 5; i++) {
        fscanf(arquivo, "%d %d", &estoque[i][0], &estoque[i][1]);
        printf("Codigo do Produto: %d | Quantidade: %d\n", estoque[i][0], estoque[i][1]);
    }
    fclose(arquivo);

    return 0;
}
