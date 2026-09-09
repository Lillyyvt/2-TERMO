// Aplicar uma estrutura condicional simples.
// Uma peça será aprovada no controle de qualidade quando seu peso estiver entre 95 g e 105 g, inclusive. Crie
// um programa que leia o peso e informe o resultado da inspeção.
// O PROGRAMA DEVE:
// Solicitar o peso da peça.
// Usar if/else para decidir se a peça está dentro do padrão.
// Exibir "PEÇA APROVADA" quando estiver entre 95 e 105 g.
// Exibir "PEÇA REPROVADA" nos demais casos.
// Exibir também o peso informado.

const entrada = require("readline-sync");

console.log("CONTROLE DE QUALIDADE DE PEÇAS");
const peso = entrada.questionFloat("Digite o peso da peça (em g): ");
console.log("------------------------------");
if (peso >= 95 && peso <= 105) {
    console.log("PEÇA APROVADA");
} else {
    console.log("PEÇA REPROVADA");
}
console.log(`Peso informado: ${peso} g`);
