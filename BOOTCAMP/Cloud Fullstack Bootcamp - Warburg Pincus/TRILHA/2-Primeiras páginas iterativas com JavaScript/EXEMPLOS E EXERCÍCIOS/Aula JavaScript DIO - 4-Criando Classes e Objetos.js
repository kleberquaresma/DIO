/*
Aula JavaScript DIO 

- Criando Classes e Objetos - 
*/

// EXEMPLO 01: Estrutura básica de um Objeto literal.

console.log('EXEMPLO 01: Estrutura básica de um Objeto literal.')

const kleber = {
    nome: 'Kleber Nogueira Quaresma',
    idade: 44
};

console.log(kleber.nome);
console.log(kleber.idade);
console.log(kleber);


// EXEMPLO 02: Incremento dinâmico ao Objeto.
console.log('EXEMPLO 02: Incremento dinâmico ao Objeto.');

kleber.altura = 1.70;

console.log(kleber);


// EXEMPLO 03: Remoção dinâmica de atributo do Objeto.
console.log('EXEMPLO 03: Remoção dinâmica de atributo do Objeto.');

delete kleber.idade;

console.log(kleber);

// EXEMPLO 04: Incluindo Funções (Métodos) dentro de Objetos.
console.log('EXEMPLO 04: Incluindo Funções (Métodos) dentro de Objetos.');

const pessoa = {
    nome: 'Matheus Modesto',
    idade: 16,
    descreve: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
};

pessoa.descreve();


// EXEMPLO 05: Acessando dinâmicamente os valores dos atributos de um Objeto.
console.log('EXEMPLO 05: Acessando dinâmicamente os valores dos atributos de um Objeto.');


const atributo = 'nome'; // o conteúdo da constant coincide com o nome de um dos atributos do Objeto.

console.log(`O conteúdo do atributo '${atributo}' é ` + pessoa[atributo]);

console.log(pessoa['idade']);


// EXEMPLO 06: Formas dinâmica e direta de atribuir valores a atributos de um Objeto.
console.log('EXEMPLO 06: Formas dinâmica e direta de atribuir valores a atributos de um Objeto.');

pessoa.nome = 'Maria';
pessoa.idade = 60;

pessoa.descreve();

pessoa['nome'] = 'Kleber';
pessoa['idade'] = '44';

pessoa.descreve();


// EXEMPLO 07: Criando uma Classe.
console.log('EXEMPLO 07: Criando uma Classe.');

class Pessoa {
    nome;
    idade;

    descreve () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);        
    }
}

const jose = new Pessoa(); // cria uma "Instância".

console.log(jose);

jose.nome = 'José';
jose.idade = 50;

console.log(jose);

jose.descreve();


const paula = new Pessoa();

paula.nome = 'Paula';
paula.idade = 20;

console.log(paula);

paula.descreve();


// EXEMPLO 08: Usando o "Construtor" de uma Classe para forçar a passagem de valores na criação de uma Instância.
console.log('EXEMPLO 08: Usando o "Construtor" de uma Classe para forçar a passagem de valores na criação de uma Instância.');

class Pessoa2 {
    nome;
    idade;

    constructor(){
        this.nome = 'Kleber';
        this.idade = '44';
    }

    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);        
    }
}

const novaInstancia = new Pessoa2(); // cria uma "Instância".

console.log(novaInstancia);


class Pessoa3 {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);        
    }
}

const novaInstancia2 = new Pessoa3('Cecilia', 23); // cria uma "Instância".

console.log(novaInstancia2);


class Pessoa4 {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);        
    }
}

const novaInstancia3 = new Pessoa4('Cecilia', 23); // cria uma "Instância".

console.log(novaInstancia3);


// EXEMPLO 09: Usando atributos de um Objeto em uma Função.
console.log('EXEMPLO 09: Usando atributos de um Objeto em uma Função.');


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade.`);
    } 
}

const ruan = new Pessoa3('Ruan', 33);
const jorge = new Pessoa3('Jorge', 33);

compararPessoas(ruan, jorge);


/*
EXERCÍCIO 01: Crie uma Classe para representar carros:

Os carros possuem uma marca, uma cor, e um gasto médio de combustível por quilômetro rodado.

Crie um método que dado a quantidade de quilômetro e o preço do combustível nos dê o valor gasto em reais para realizar esse percurso.
*/

console.log('EXERCÍCIO 01: Crie uma Classe para representar carros.');

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoPercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const tiggo2 = new Carro('Caoa Chery', 'Branco', 1/9);
console.log(tiggo2);
console.log(tiggo2.calcularGastoPercurso(100, 5.40));


const uno = new Carro('Fiat', 'Preto', 1/14);
console.log(uno);
console.log(uno.calcularGastoPercurso(100, 5.40));


/*
EXERCÍCIO 02: Crie uma Classe para representar pessoas:

Para cada pessoa teremos os atributos nome, peso e altura.

As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)).

Instancie uma pessoa chamada Antonio que tenha 70Kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC.
*/

console.log('EXERCÍCIO 02: Crie uma Classe para representar pessoas.');

class Pessoa5 {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }
    calcularIMC (){
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC(){
        if (this.calcularIMC() < 18.5) {
            return 'Abaixo do Peso';
        } else if (this.calcularIMC() >= 18.5 && this.calcularIMC() < 25) {
            return 'Peso Normal';
        } else if (this.calcularIMC() >= 25 && this.calcularIMC() < 30) {
            return 'Acima do Peso';
        } else if (this.calcularIMC() >= 30 && this.calcularIMC() <= 40) {
            return 'Obeso';
        } else {
            return 'Obesidade Grave';
        } 
    }
}

const antonio = new Pessoa5('Antonio', 70, 1.75);
console.log(antonio);
console.log(antonio.calcularIMC());
console.log(antonio.classificarIMC());


// EXTRAS

class Pessoa6 {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
    }
}

new Pessoa6('Renan', 30).descrever();



class Pessoa7 {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function descreverPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`);
}

const renan = new Pessoa7('Renan', 30);

console.log(descreverPessoa(renan));