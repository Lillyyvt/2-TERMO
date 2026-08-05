// Importando a biblioteca (a "ajudinha que instalamos")
const entrada = require ('readline-sync');

console.log('--- SISTEMA DE VENDAS PADARIA ---');

//1. Entrada de dados pelo terminal
// O computador para e espera o usuário digitar
const nomeProduto = entrada.question("Qual o nome do produto?");
const precoU = entrada.questionFloat("Qual o preço unitário?");
const quantidade = entrada.questionInt("Quantas unidade foram vendidas?");

//2. Processamento
const total = precoU * quantidade;

//3. Saída de dados
console.log("\n---RECIBO DE VENDA---");
console.log(`Produto: ${nomeProduto}`);
console.log(`Total a pagar: R$ ${total.toFixed(2)}`); // O .toFixed(2) serve para limitar o número de casas decimais(coloca duas casas decimais.)