#include <stdio.h>

int main() {

    float peso;
    float altura;
    float resultado_imc;

    printf("Digite o seu peso(kg): ");
    scanf("%f", &peso);
    printf("Digite a sua altura(ex: 1.60): ");
    scanf("%f", &altura);

    resultado_imc = peso / (altura * altura);
    printf("RESULTADO: seu IMC eh: %.2f\n", resultado_imc);

    if (resultado_imc < 18.5) {
        printf("Voce esta abaixo do peso.\n");
    } else if (resultado_imc >= 18.5 && resultado_imc < 25) {
        printf("Voce esta com o peso ideal (Parabens!)\n");
    } else if (resultado_imc >= 25 && resultado_imc < 30) {
        printf("Voce esta com sobrepeso.\n");
    } else {
        printf("Voce esta com obesidade.\n");
    }

    printf("------------------------------------\n");
    return 0;
}
