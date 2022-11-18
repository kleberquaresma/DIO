/*
Aula JavaScript DIO 

- Importação e Exportação com JavaScript - 
*/

// Funções Auxiliares

const entradas = [6, 50, 10, 98, 23, 40, 80, 88, 76, 100];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};