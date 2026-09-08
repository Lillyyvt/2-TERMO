const entrada = require("readline-sync");
console.log("===REGISTRO==DE==PESOS===");
let pesos = [];
let somaTotal = 0;

const quantidade = entrada.questionInt("Quantos pesos deseja registrar? ");
for (let i = 0; i < quantidade; i++) {
    let peso = entrada.questionFloat(`Peso ${i + 1}: `);
    pesos.push(peso);
    somaTotal += peso;
    
}
const media = somaTotal / quantidade;

console.log("\n ---RELÁTORIO--DE--PESOS---");
console.log("\n------------🌼--------------");
console.log(`Pesos registrados: ${pesos.join(" kg | ")} kg`);
console.log(`Quantidade de registros: ${pesos.length}`);
console.log(`Primeiro Registro: ${pesos[0]} kg`);
console.log(`Último Registro: ${pesos[pesos.length - 1]} kg`);

console.log(`Média dos pesos: ${media} kg`);


if ((media >=  4.8 && media <= 5.2)) {
    console.log(`STATUS FINAL: LOTE APROVADO!`);
} else {
    console.log(`STATUS FINAL: LOTE REPROVADO!`);
}
