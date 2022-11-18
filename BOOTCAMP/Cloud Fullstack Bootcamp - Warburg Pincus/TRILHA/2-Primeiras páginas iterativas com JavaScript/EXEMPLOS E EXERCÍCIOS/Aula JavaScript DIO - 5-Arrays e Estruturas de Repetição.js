/*
Aula JavaScript DIO 

- Arrays e Estruturas de Repetição - 
*/

// Estrutura básica de uma lista.

console.log('EXEMPLO 01: Estrutura básica de uma lista.');

const alunos = ['João', 'Maria', 'José'];

console.log(alunos); // Consultar toda a lista.

console.log(alunos[0]); // Consultar item específico da lista.

alunos.push('Pedro'); // Acrescenta dinaicamente novo item ao final da lista.

console.log(alunos);

alunos[2] = 'Marcos'; // Substitui valor, caso já exista, ou acrescenta à lista.

console.log(alunos);

alunos.push(100); // Insere um tipo de dado diferente de string à lista. Listas podem conter tipos diferentes de dados.

console.log(alunos);

console.log(alunos.pop()); //Remover o último item da lista.

console.log(alunos);

console.log(alunos.shift()); //Remover o primeiro item da lista.

console.log(alunos);


const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(10);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(notas);
console.log(soma / notas.length);


// Estrutura de Repetição (FOR).

console.log('EXEMPLO 02: Estrutura de Repetição (FOR).');

for (let i = 0; i < 10; i++) {
    console.log(i);
}


console.log('EXEMPLO 03: Percorrer uma string tendo como base seu índice e utilizando o FOR.');

const nome = 'Kleber Nogueira Quaresma';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}


const notas2 = [];

notas2.push(6);
notas2.push(7);
notas2.push(8);
notas2.push(5);
notas2.push(10);

let soma2 = 0;

for (let i = 0; i < notas2.length; i++) {
    soma2 = soma2 + notas2[i]; 
}

console.log(soma2 / notas2.length);


/*
EXERCÍCIO 01: Crie um programa que, dado um número, imprima a sua tabuada.
*/

console.log('EXERCÍCIO 01: Crie um programa que, dado um número, imprima a sua tabuada.');

const numero = 3;

console.log('TABUADA DA SOMA:');
for (let i = 1; i <= 10 ; i++) {
    console.log(`${numero} + ${i} = ` + (numero + i));
}
console.log('TABUADA DA MULTIPLICAÇÃO:');
for (let i = 1; i <= 10 ; i++) {
    console.log(`${numero} * ${i} = ` + (numero * i));
}
console.log('TABUADA DA DIVISÃO:');
for (let i = 1; i <= 10 ; i++) {
     console.log(`${numero * i} / ${numero} = ` + i);
}


/*
EXERCÍCIO 02: Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.
*/

console.log('EXERCÍCIO 02: Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.');

const lista = [0,1,2,3,4,5,6,7,8,9,10];

lista[0] = 0;
lista[1] = 50;
lista[2] = 2;
lista[3] = 3;
lista[4] = 4;
lista[5] = 5;
lista[6] = 34;

for (i = 0; i < lista.length; i++) {
    if ((lista[i] % 2) === 0) {
        console.log(lista[i]);
    }   
}



const numerosPares = [];

for (let i = 0; i < 10; i++) {
    const numeroPar = i % 2 === 0;
    if (numeroPar) {
        numerosPares.push(i);
    }
}

console.log(numerosPares);