// Utilizar entrada de dados no terminal e operações com valores numéricos.
// Crie um programa para calcular o custo de uma compra de matéria-prima.
// O programa deve:
// Importar a biblioteca readline-sync.
// Solicitar ao usuário o nome do material.
// Solicitar a quantidade comprada.
// Solicitar o preço unitário.
// Calcular o valor total da compra.
// Exibir um pequeno resumo da compra.

const entrada = require('readline-sync');

console.log("---CÁLCULO DE COMPRA DE MATÉRIA-PRIMA---");    
const nomeMaterial = entrada.question("Digite o nome do material: ");
const quantidadeComprada = entrada.questionFloat("Digite a quantidade comprada: ");
const precoUnitario = entrada.questionFloat("Digite o preço unitário: ");
const valorTotal = quantidadeComprada * precoUnitario;
console.log("-----------------------------------------");

console.log("-------RELATÓRIO DE COMPRA-------");
console.log(`Material comprado: ${nomeMaterial}.`);
console.log(`Quantidade comprada: ${quantidadeComprada}.`);
console.log(`Preço unitário: R$ ${precoUnitario.toFixed(2)}.`);
console.log(`Valor total da compra: R$ ${valorTotal.toFixed(2)}.`);
console.log("----------------------------------");