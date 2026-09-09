// Utilizar laço de repetição para gerar uma sequência de resultados.
// Uma máquina produz uma quantidade fixa de peças a cada ciclo. Crie um programa que mostre a produção
// acumulada do ciclo 1 até o ciclo 10.
// O programa deve:
// Solicitar quantas peças a máquina produz por ciclo.
// Utilizar um laço for para percorrer os ciclos de 1 até 10.
// Em cada ciclo, exibir o número do ciclo e a produção acumulada.
// Não escrever manualmente as dez linhas.

const entrada = require("readline-sync");

console.log("PRODUÇÃO ACUMULADA DE PEÇAS");
const producaoPorCiclo = entrada.questionInt("Digite a quantidade de peças produzidas por ciclo: ");
const producaoTotal = producaoPorCiclo * 10;
console.log("------------------------------");

for (let ciclo = 1; ciclo <= 10; ciclo++) {
    const producaoAcumulada = producaoPorCiclo * ciclo;
    console.log(`Ciclo ${ciclo}: Produção acumulada: ${producaoAcumulada} peças`);
}
console.log("------------------------------");
console.log(`Produção total: ${producaoTotal} peças`);
console.log("------------------------------");
