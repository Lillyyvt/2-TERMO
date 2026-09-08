const entrada = require("readline-sync");

console.log("===REGISTRO==DE==TEMPERATURA===");
const temperaturas = [];
const quantidade = entrada.questionInt("Quantos temperaturas deseja registrar? ");

for (let i = 0; i < quantidade; i++) {
    let temperatura = entrada.questionFloat(`Temperatura ${i + 1}: `);
    temperaturas.push(temperatura);
console.log(`Primeira Temperatura: ${temperaturas[0]}`);




}
console.log("\n ---RELÁTORIO--DE--TEMPERATURAS---");
console.log(`Temperaturas registradas: ${temperaturas.join("°c | ")}°c`);
console.log(`Quantidade de registros: ${temperaturas.length}`);
console.log(`Primeira Temperatura: ${temperaturas[0]}`);
console.log(`Ultimo registro: ${temperaturas[temperaturas.length - 1]}°c`);

