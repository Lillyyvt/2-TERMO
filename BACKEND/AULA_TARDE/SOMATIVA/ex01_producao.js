// Uma linha de produção fabrica uma determinada quantidade de peças por hora. Crie um programa que calcule quantas peças serão produzidas em um turno.
// Criar uma variável com a quantidade de peças produzidas por hora.
// Criar uma variável com a quantidade de horas do turno.
// Calcular a produção total do turno.
// Exibir uma frase informando a produção por hora, as horas e o total produzido.

const entrada = require('readline-sync');

console.log("---CALCULO DE PRODUÇÃO DE PEÇAS---");
const pecasPorHora = entrada.questionFloat("Digite a quantidade de peças produzidas por hora: ");
const horasTurno = entrada.questionInt("Digite a quantidade de horas do turno: ");
const producaoTotal = pecasPorHora * horasTurno;
console.log("-----------------------------------");

console.log("\n ---------REGISTRO----------");
console.log(`Produção de peças por hora: ${pecasPorHora}.`);
console.log(`Quantidade de horas do turno: ${horasTurno} horas.`);
console.log(`Total de peças produzidas: ${producaoTotal} peças.`);
console.log("\n ----------------------------");