/*
Aula JavaScript DIO 

- Importação e Exportação com JavaScript - 
*/

/* EXERCÍCIO:

Uma sala contem 5 alunos e, para cada aluno, foi sorteado um número de 1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:

5
50
10
98
23

Saída:
98
*/


const {gets, print} = require ('./Aula JavaScript DIO - 6.4-Importação e Exportação com JavaScript (funções auxiliares_2)');

/*
print(gets());
print(gets());
print(gets());
print(gets());
print(gets());
*/

/*
const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

print(numerosSorteados);

let maiorValor = 0

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);
*/

// Outra forma, com código mais otimizado, de encontrar o maior valor:

let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);