// acima 80 MUTADA, 80 para baixo CONTINUA
const entrada = require(`readline-sync`)

console.log("--- SISTEMA DE MUTACAO");

const Placa = entrada.question("Placa do Veiculo:");
const veloz = entrada.questionInt("Digite a velocidade do Carro: ");



if (veloz <= 80 ) {
    console.log(" Continue sua viagem ");
} else {
    console.log(` ${Placa} foi multado! `);
}