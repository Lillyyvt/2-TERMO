const readline = require("readline-sync");


const nome = readline.question("Digite o nome do aluno: ");
const disciplina = readline.question("Digite a disciplina: ");


const nota1 = Number(readline.question("Digite a primeira nota: "));
const nota2 = Number(readline.question("Digite a segunda nota: "));
const faltas = Number(readline.question("Digite a quantidade de faltas: "));

const escola = readline.question("Digite o nome da escola: ");
const anoLetivo = readline.question("Digite o ano letivo: ");

const media = (nota1 + nota2) / 2;


console.log("─ ⋆⋅𖤓⋅⋆ ── Relatório do Aluno ── ⋆⋅𖤓⋅⋆ ─|");
console.log("Escola:", escola);
console.log("Ano Letivo:", anoLetivo);
console.log("Aluno:", nome);
console.log("Disciplina:", disciplina);
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Média:", media);
console.log("Faltas:", faltas);

console.log("|─ ⋆⋅𖤓⋅⋆ ── Fim do Relatório ── ⋆⋅𖤓⋅⋆ ─|");