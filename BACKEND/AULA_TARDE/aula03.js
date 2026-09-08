const entrada = require('readline-sync');
console.log("--- SISTEMA DE ANALISE DE CREDITO");

// Coleta de Dados
const nome = entrada.question("Nome do cliente:");
const idade = entrada.questionInt("Idade: ");
const renda = entrada.questionFloat("Renda Mensal: ");
const temImovel = entrada.keyInYNString("Possui imovel proprio?")

// A Lógica Combinada
// (idade >= 18) é obrigatório
// (renda >= 2500 || temImovel === true) um dos dois tem que ser verdade
if (idade >= 18 && (renda >= 2500 || temImovel === true)) {
    console.log(`\n PARABENS, ${nome}! Seu credito foi APROVADO `);
} else {
    console.log(`\n Sinto Muito, ${nome}! Seu credito foi RECUSADO `);
}