/*
Aula JavaScript DIO 

- Funções - 
*/

// Estrutura básica da função.
function teste() {
    console.log('Teste Função');
}


// EXEMPLO 01: Invocar uma função.

console.log('EXEMPLO 01: Invocar uma função.')
teste();


// EXEMPLO 02: Passando parâmetro na função.
function sayMyName(name) {
    console.log('Seu nome é: ' + name);
}

console.log('EXEMPLO 02: Passando parâmetro na função.')
sayMyName('Kleber');


// EXEMPLO 03: Retornando um valor através de uma função.

function quadrado(valor) {
    return Math.pow(valor, 2);
}

const valor = 5

console.log('EXEMPLO 03: Retornando um valor através de uma função.')
console.log(quadrado(valor));


// EXEMPLO 04: Retornando mais de um valor através de uma função.

function incrementarJuros(valor, percJuros) {
    const valorDeAcrescimo = ((percJuros * 100) / valor);
    return valor + valorDeAcrescimo;
}

const valor2 = 100;
const percJuros = 20;

console.log('EXEMPLO 04: Retornando mais de um valor através de uma função.')
console.log(incrementarJuros(valor2, percJuros));

console.log(incrementarJuros(100,5));


/* EXEMPLO 05:
O IMC - Índice de Massa Corporal é um critério da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = Peso / (altura * altura)

Elabore um algoritmo que, dado o peso e a altura de um adulto, mosre sua condição de acordo com a tabela abaixo:
- Abaixo de 18.5: Abaixo do Peso;
- Entre 18.5 e 25: Peso Normal;
- Entre 25 e 30: Acima do Peso;
- Entre 30 e 40: Obeso;
- Acima de 40: Obesidade Grave.
*/

console.log('EXEMPLO 05: Elabore um algoritmo que, dado o peso e a altura de um adulto, mostre sua condição.');

function calculaImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if (IMC < 18.5) {
        return 'Abaixo do Peso';
    } else if (IMC >= 18.5 && IMC < 25) {
        return 'Peso Normal';
    } else if (IMC >= 25 && IMC < 30) {
        return 'Acima do Peso';
    } else if (IMC >= 30 && IMC <= 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}

function main(){
    const peso = 50;
    const altura = 1.70;
    
    IMC = calculaImc(peso, altura);
    console.log(`IMC = ${IMC.toFixed(2)}`);
    
    console.log(classificarImc(IMC));
}

main();


// EXEMPLO 06:

// Função funcionando como se fosse uma variável.
console.log('EXEMPLO 06: Função funcionando como se fosse uma variável.')

main = function(){
    console.log('Alterou o valor original da função main');
}

main();

main2 = main;

main2();


// EXEMPLO 07:

// Autoinvocando uma função não nomeada.

console.log('EXEMPLO 07: Autoinvocando uma função não nomeada.');

(function () {
    const peso = 50;
    const altura = 1.70;
    
    IMC = calculaImc(peso, altura);
    console.log(`IMC = ${IMC.toFixed(2)}`);
    
    console.log(classificarImc(IMC));
})();


// EXERCÍCIO 01:

// Função para escrever meu nome.

console.log('EXERCÍCIO 01: Função para escrever meu nome.')

function escrevaMeuNome(nome){
    console.log('Meu nome é ' + nome);
}

escrevaMeuNome('Kleber Nogueira');


// EXERCÍCIO 02:

// Função para saber se eu sou maior de idade.

console.log('EXERCÍCIO 02: Função para saber se eu sou maior de idade.')


const idade = 18

function verificaIdade(idade){
    if (idade >= 18){
        return 'Você é maior de idade';
    } else {
        return 'Você é menor de idade';
    }
}

console.log(verificaIdade(idade));


// EXERCÍCIO 03:

// Função chamando outra função.

console.log('EXERCÍCIO 03: Função chamando outra função.')

function escrevaMeuNome(nome){
    return ('Meu nome é ' + nome);
}


function verificaIdade(idade){
    if (idade >= 18){
        return ' e sou maior de idade';
    } else {
        return 'e sou menor de idade';
    }
}

const idade2 = 18
const nome = 'Kleber Nogueira'
console.log(escrevaMeuNome(nome) + verificaIdade(idade2));


/*
EXERCÍCIO 04: Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Condição de Pagamento:
- 1 - À Vista Débito, recebe 10% de desconto;
- 2 - À Vista no Dinheiro ou PIX, recebe 15% de desconto;
- 3 - Em duas vezes, preço normal de etiqueta sem juros;
- 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

console.log('EXERCÍCIO 04: Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.');

const formaPagamento = 4; // 1 = Débito; 2 = Dinheiro ou PIX; 3 = Duas vezes; 4 = Acima de duas vezes.
const percDebito = 10;
const percDinheiroPix = 15;
const percJurosAte2Parc = 0;
const percJurosAcima2Parc = 10;
const precoEtiqueta = 10;
const moeda = 'R$';

function aplicarDesconto(valor, desconto){
    return (valor - ((valor * desconto) / 100));
}

function aplicarJuros(valor, juros){
    return (valor + ((valor * juros) / 100));
}

function calculaValorPagar(opcaoPagamento){
    if (opcaoPagamento === 1){
        valorPagar = aplicarDesconto(precoEtiqueta, percDebito);
        console.log('Valor à Pagar ' + '(' + moeda + '): ' + valorPagar.toFixed(2));
    } else if (opcaoPagamento === 2){
        valorPagar = aplicarDesconto(precoEtiqueta, percDinheiroPix);
        console.log('Valor à Pagar ' + '(' + moeda + '): ' + valorPagar.toFixed(2));
    } else if (opcaoPagamento === 3){
        valorPagar = aplicarDesconto(precoEtiqueta, percJurosAte2Parc);
        console.log('Valor à Pagar ' + '(' + moeda + '): ' + valorPagar.toFixed(2));
    } else if (opcaoPagamento === 4){
        valorPagar = aplicarJuros(precoEtiqueta, percJurosAcima2Parc);
        console.log('Valor à Pagar ' + '(' + moeda + '): ' + valorPagar.toFixed(2));
    } else {
        console.log('Forma de Pagamento não aceita.');
    }    
}

calculaValorPagar(4);