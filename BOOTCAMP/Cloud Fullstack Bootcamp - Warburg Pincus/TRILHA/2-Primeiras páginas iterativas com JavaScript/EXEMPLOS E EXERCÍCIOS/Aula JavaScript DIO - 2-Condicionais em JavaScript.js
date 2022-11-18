/*
Aula JavaScript DIO 

- Estruturas Condicionais - 
*/

console.log('1-Capturar o valor booleano do resto da divisão');

const numero = 11;

// O '%' vai retornar 1 se a divisão tiver resto e 0 se a divisão não tiver resto.
// O '==' faz conversão implícita do string '0' e, por isso, o resultado acaba dando certo. Porém não é o uso mais adequado.
const numeroPar1 = (numero % 2) == '0';
console.log(numeroPar1);
// O '===' NÃO faz conversãao implícita do string '0' e, por isso, o resultado acaba NÃO dando certo porque ele vai comparar um número com uma string, sem fazer conversão direta.
const numeroPar2 = (numero % 2) === '0';
console.log(numeroPar2);


// Condicional "IF" e "ELSEIF"

console.log('2-Condicional IF')

if (numeroPar1) {
    console.log('Número é Par');
}

// A '!' é uma negativa para a variável
if (!numeroPar1) {
    console.log('Número é Ímpar');
}

if (numeroPar1) {
    console.log('Número é Par');
} else {
    console.log('Número é Ímpar');
}


const numero2 = 0;
const numeroDivisivelPorCinco = (numero2 % 5) === 0;

if (numeroDivisivelPorCinco) {
    console.log('SIM, é divisível por 5');
} else {
    console.log('NÃO, não é divisível por 5');
}

if (numero2 === 0) {
    console.log('Número é inválido');
} else if (numeroDivisivelPorCinco) {
    console.log('SIM, é divisível por 5');
} else {
    console.log('NÃO, não é divisível por 5');
}


const numero3 = 0;
const isNumeroPar = (numero3 % 2) === 0;

if (isNumeroPar) {
    console.log('Número é par');
} else {
    console.log('Número é ímpar');
}

/*
 3-Programa para calcular o valor gasto com combiustível em uma viagem - Versão 02

 Você terá cinco variáveis:
 - Preço do etanol;
 - Preço da gasolina;
 - O tipo do combustível que está no seu carro;
 - Gasto médio de combustível do carro por Km rodado;
 - Distância em Km da viagem

// Imprimir no console o valor que será gasto de combustível para realizar esta viagem:
*/

console.log('3-Programa para calcular o valor gasto com combiustível em uma viagem - Versão 02');

const precoEtanol = 4.50;
const precoGasolina = 6.00;
const tipoCombustivel = 'Gasolina';
const kmPorLitros2 = 10;
const distanciaEmKm2 = 123;


if (tipoCombustivel === 'Etanol') {
    const valorGasto = (distanciaEmKm2 / kmPorLitros2) * precoEtanol;
    console.log('Valor Gasto com Etanol: ' + valorGasto.toFixed(02));
} else {
    const valorGasto = (distanciaEmKm2 / kmPorLitros2) * precoGasolina;
    console.log('Valor Gasto com Gasolina: ' + valorGasto.toFixed(2));
}


/*
4- Faça um algoritmo que dada as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua nota e a sua classificação conforme a tabela abaixo:

Media = Nota1 + Nota2 + Nota3 / 3;

Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, aprovado no semestre.
*/

console.log('4- Faça um algoritmo que dada as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua nota e a sua classificação conforme a tabela abaixo:');

const nota1 = 1;
const nota2 = 5;
const nota3 = 10;

media = (nota1 + nota2 + nota3) / 3;

console.log(`Média: ${media.toFixed(2)}`);

if (media < 5) {
    console.log('Reprovado!');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação!');
} else {
    console.log('Aprovado!');
}


/*
5- O IMC - Índice de Massa Corporal é um critério da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = Peso / (altura * altura)

Elabore um algoritmo que, dado o peso e a altura de um adulto, mosre sua condição de acordo com a tabela abaixo:
- Abaixo de 18.5: Abaixo do Peso;
- Entre 18.5 e 25: Peso Normal;
- Entre 25 e 30: Acima do Peso;
- Entre 30 e 40: Obeso;
- Acima de 40: Obesidade Grave.
*/

console.log('5-Elabore um algoritmo que, dado o peso e a altura de um adulto, mostre sua condição.');

const peso = 50;
const altura = 1.70;

IMC = peso / Math.pow(altura, 2);
console.log(`IMC = ${IMC.toFixed(2)}`);

if (IMC < 18.5) {
    console.log('Abaixo do Peso');
} else if (IMC >= 18.5 && IMC < 25) {
    console.log('Peso Normal');
} else if (IMC >= 25 && IMC < 30) {
    console.log('Acima do Peso');
} else if (IMC >= 30 && IMC <= 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}


/*
6- Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Condição de Pagamento:
- 1 - À Vista Débito, recebe 10% de desconto;
- 2 - À Vista no Dinheiro ou PIX, recebe 15% de desconto;
- 3 - Em duas vezes, preço normal de etiqueta sem juros;
- 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

console.log('6- Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.');

const formaPagamento = 2; // 1 = Débito; 2 = Dinheiro ou PIX; 3 = Duas vezes; 4 = Acima de duas vezes.
const percDebito = 10;
const percDinheiroPix = 15;
const percJurosParcelado = 10;
const precoEtiqueta = 10;
const moeda = 'R$';

if (formaPagamento === 1){
    valorPagar = precoEtiqueta - ((precoEtiqueta * percDebito) / 100);
    console.log('Valor à Pagar ' + '(' + moeda + '): ' + valorPagar.toFixed(2));
} else if (formaPagamento === 2){
    valorPagar = precoEtiqueta - ((precoEtiqueta * percDinheiroPix) / 100);
    console.log('Valor à Pagar ' + '(' + moeda + '): ' + valorPagar.toFixed(2));
} else if (formaPagamento === 3){
    console.log('Valor à Pagar ' + '(' + moeda + '): ' + precoEtiqueta.toFixed(2));
} else if (formaPagamento === 4){
    valorPagar = precoEtiqueta + ((precoEtiqueta * percJurosParcelado) / 100);
    console.log('Valor à Pagar ' + '(' + moeda + '): ' + valorPagar.toFixed(2));
} else {
    console.log('Forma de Pagamento não aceita.');
}


// EXTRA
const numero4 = 10;
const numeroEmTexto = '10';
console.log(numero4 === numeroEmTexto); // comparando tipos de dados diferentes.