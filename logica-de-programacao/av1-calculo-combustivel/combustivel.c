#include <stdio.h>

int main() {
    float distancia, preco;
    float gasto_total;

    printf("bem-vindo! Para calcularmos seu gasto, digite a distancia da viagem em KM: ");
    scanf("%f", &distancia);

    printf("Digite o preco do litro do combustivel: ");
    scanf("%f", &preco);

    gasto_total = (distancia / 10) * preco;

    printf("O valor total a ser gasto com o combustivel na viagem e: R$ %.2f\n", gasto_total);
    printf("Calculo finalizado. Tenha uma otima e segura viagem!\n");

    return 0;
}
