const entrada = require('readline-sync');
const oficina = require('./funcoesOficina');

console.log("SISTEMA DE GESTÃO DE OFICINA");

const peca = entrada.questionFloat("Preço da peça: R$ ");
const horas = entrada.questionInt("Horas de serviço: ");
const tempoUso = entrada.questionInt("Tempo de ultimo conserto (meses):");
const desconto = entrada.questionFloat("Desconto aplicado (em %): ");

const total = oficina.calcularOrçamento(peca,horas) 
const descontoAplicado = oficina.calcularOrçamento(peca,horas) * (desconto / 100);
const garantia = oficina.verificarGarantia(tempoUso);

console.log("=======RELATÓRIO DE SERVIÇO ========");
console.log(`O valor total do serviço é: R$ ${total.toFixed(2)}`);
console.log(`O valor com ${desconto}% de desconto aplicado é: R$ ${descontoAplicado.toFixed(2)}`);
console.log(`Situação da garantia: ${garantia}`);
console.log("====================================");




