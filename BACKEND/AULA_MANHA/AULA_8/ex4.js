const entrada = require("readline-sync");

let opcao = 0;

while (opcao !== 3) {
  console.log("\n ─────────────────────────────────────────────────── ");

  console.log("\n |───────SISTEMA──DE──CLASSIFICAÇÃO──NATAÇÃO────────| ");
  console.log("\n ─────────────────────────────────────────────────── ");

  const nome = entrada.question("Digite o nome do aluno: ")
  const idade = entrada.questionInt("Digite a idade do aluno: ")
  console.log(`\nAtleta: ${nome}`);

  if (idade < 5) {
    console.log("O aluno está muito jovem para participar da competição de natação!",);
  } else if (idade >= 5 && idade <= 9) {
    console.log("Categoria Infantil A!");
  } else if (idade >= 10 && idade <= 13) {
    console.log("Categoria Infantil B!");
  } else if (idade >= 14 && idade <= 17) {
    console.log("Categoria Juvenil!");
  } else if (idade >= 18) {
    console.log("O aluno está na categoria Adulto!");
  } else { console.log("Categoria SÊNIOR!");
  }
 console.log(" ──────────────────────────────────────────────── ");


}
