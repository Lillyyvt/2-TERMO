const entrada = require ('readline-sync');
console.log('────────────────────────────────────────── ');
console.log('|─ ⋆⋅𖤓⋅⋆ ── Calculadora de IMC ── ⋆⋅𖤓⋅⋆ ─|');
console.log('────────────────────────────────────────── ');
const peso = entrada.questionFloat("Digite o seu peso (kg)?");
const altura = entrada.questionFloat("Digite a sua altura (m)?");

const imc = peso / (altura * altura);
console.log('───────────────────────────────── ');
console.log('|─ ⋆⋅𖤓⋅⋆ ── IMC Total ── ⋆⋅𖤓⋅⋆ ─|');
console.log('───────────────────────────────── ');
console.log(`Seu IMC é: ${imc.toFixed(2)} <3`);