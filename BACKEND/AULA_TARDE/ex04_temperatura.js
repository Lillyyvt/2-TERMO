// Trabalhar com if, else if e else em uma regra de negócio.
// Crie um programa que leia a temperatura de uma máquina e classifique sua situação.
// O programa deve:
// Até 60 °C: situação NORMAL.
// De 61 °C até 80 °C: situação ATENÇÃO.
// Acima de 80 °C: situação CRÍTICA.
// Solicitar a temperatura pelo terminal.
// Exibir a temperatura e a classificação.

const entrada = require('readline-sync');

console.log("CLASSIFICAÇÃO DE TEMPERATURA DE MÁQUINA");
const temperatura = entrada.questionFloat("Digite a temperatura da máquina (em °C): ");
console.log("------------------------------");

if (temperatura <= 60) {
    console.log("SITUAÇÃO: NORMAL");
} else if (temperatura >= 61 && temperatura <= 80) { 
    console.log("SITUAÇÃO: ATENÇÃO");
   
} else {
    console.log("SITUAÇÃO: CRÍTICA");
}
console.log(`Temperatura informada: ${temperatura}°C`);
console.log(`Classificação: ${temperatura <= 60 ? "NORMAL" : temperatura <= 80 ? "ATENÇÃO" : "CRÍTICA"}`);
console.log("------------------------------");
