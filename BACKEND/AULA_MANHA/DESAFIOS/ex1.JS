

const entrada = require("readline-sync");

let opcao = 0;

while (opcao !== 3) {
  console.log("\n ──────────────────────────────────────────────────── ");
  console.log("\n |───────CONTROLE──DE──ACESSO─AO──LABORATÓRIO────────| ");
  console.log("\n ──────────────────────────────────────────────────── ");

  const nome = entrada.question("Digite o nome do aluno: ")
  const idade = entrada.questionInt("Digite a idade do aluno: ")
  const autorizacao = entrada.question("O aluno está autorizado a entrar no laboratório? (S/N): ")
  const acompanhado = entrada.question("O aluno está acompanhado de um responsável? (S/N): ")
  const suspenso = entrada.question("O aluno está suspenso? (S/N): ")
  console.log(`\nALUNO ${nome}`);

  if  (suspenso === "N"){
    console.log("PERMISSÃO NEGADA!");
  }
  else if (idade <= 10 && (autorizacao === "N" )|| acompanhado === "N") {
    console.log("PERMISSÃO NEGADA!");
  } else if (idade >= 15 && (autorizacao === "S") || acompanhado === "N") {
    console.log("PERMISSÃO CONCEDIDA!");
  } else {
    console.log("O aluno é de MAIOR DE IDADE e está autorizado a entrar no laboratório!");
  }
}