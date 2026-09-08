// Crie um programa que peça o nome do usuário e o ano de nascimento. O programa deve calcular a idade e dizer se ele ja tem idade suficiente para votar (16 anos). Ultilize 'if/else'.

const entrada = require(`readline-sync`)

const nome = entrada.question("Digite o seu nome:");
const Idade = entrada.questionFloat("Digite sua idade: ")

if (Idade <= 16 ) {
    console.log(`O Eleitor ${nome} pode votar!`);
} else {
    console.log(`O Eleitor ${nome} não pode votar!`);
}


