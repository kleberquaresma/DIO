/*
Aula JavaScript DIO 

- Variáveis e Operadores - 
*/

// 1-Declarar variável volátil.
console.log('1-Declaração da variável volátil');
let variavel = 10;

// 2-Declarar variável Constante.
console.log('2-Declaração da variável constante');
const pi = 3.14;

// 3-Imprimir valor da variável.
console.log('3-Impressão dos valores das variáveis declaradas');
console.log('Imprimir algo');
console.log(variavel);
console.log(pi);

// 4-Redefinir valor da variável volátil.
console.log('4-Redefinição do valor da variável volátil');
variavel = 20;

console.log('Variavel volátil redefinida = ' + variavel);

// 5-Tentativa de redefinir valor de variável constante (erro)
console.log('5-Tentativa de redefinir valor de variável constante (erro)');
// pi = 2 // Comentado para o debugger prosseguir com as demais operações

// 6-Operadores Matemáticos
console.log('6-Cálculos com operadores matemáticos');
variavel = 10 + 10;
console.log('SOMA: ' + variavel);
variavel = 10 * 10;
console.log('MULTIPLICAÇÃO: ' + variavel);
variavel = 10 - 10;
console.log('SUBTRAÇÃO: ' + variavel);
variavel = 10 / 10;
console.log('DIVISÃO: ' + variavel);

/*
 7-Programa para calcular o valor gasto com combiustível em uma viagem - Versão 01

 Você terá três variáveis:
 - Preço do compustível;
 - Gasto médio de combustível do carro por Km rodado;
 - Distância em Km da viagem

// Imprimir no console o valor que será gasto de combustível para realizar esta viagem:
*/
console.log('7-Programa para calcular o valor gasto com combiustível em uma viagem - Versão 01');

const precoCombustivel = 4.79;
const kmPorLitros = 10;
const distanciaEmKm = 123;

console.log('Valor Gasto: ' + (distanciaEmKm / kmPorLitros) * precoCombustivel);

// Arredondar o resultado do Valor Gasto:

const valorGasto = (distanciaEmKm / kmPorLitros) * precoCombustivel;
console.log('Valor Gasto Arredondado: ' + valorGasto.toFixed(2))