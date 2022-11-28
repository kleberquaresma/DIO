const offset=0
const limit=10

const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

/* Manipulando resultado de uma requisição através de uma Promise.

Verificar os resultados dos exemplos a seguir no depurador do Browser.

EXEMPLO 01:
*/
fetch(url)
    .then(function (response) { /* para quando o resultado do Fetch é bem sucedido. */
        console.log(response)
    })
    .catch(function (error){ /* para quando o resultado do Fetch NÃO é bem sucedido. */
        console.log(error)
    })
    .finally(function(){
        console.log('Requisição concluída')
    })

const x = 10 + 10
console.log(x);


/* EXEMPLO 02: semelhante ao Exemplo 01, só que já traz o resultado no formato JSON. */
fetch(url)
    .then(function (response) { /* para quando o resultado do Fetch é bem sucedido. */
        response.json()
            .then(function(responseBody){ /* Este segundo Then recebe a resposta do primeiro Then */
                console.log(responseBody)
            })
    })
    .catch(function (error){ /* para quando o resultado do Fetch NÃO é bem sucedido. */
        console.log(error)
    })
    .finally(function(){
        console.log('Requisição concluída')
    })


/* EXEMPLO 03: Igual ao Exemplo 02, só que escrito de forma mais elegante, evitando Callback dentro de Callback.  */
fetch(url)
    .then(function (response) { /* para quando o resultado do Fetch é bem sucedido. */
        return response.json()
    })
    .then(function(jsonBody){ /* Este segundo Then recebe a resposta do primeiro Then */
        console.log(jsonBody)
    })
    .catch(function (error){ /* para quando o resultado do Fetch NÃO é bem sucedido. */
        console.log(error)
    })
    .finally(function(){
        console.log('Requisição concluída')
    })


/* EXEMPLO 04: Usar Arrow Function para reduzir o código. Semelhante ao Exemplo 03, só que ainda mais reduzido. */
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody)) /* Este segundo Then recebe a resposta do primeiro Then */
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição concluída'))


/* EXEMPLO 05: Uso do "Debugger". Para ajudar a debugar JavaScript no Browser, ou mesmo no note. */
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => {  /* Este segundo Then recebe a resposta do primeiro Then */
        debugger
        console.log(jsonBody)
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição concluída'))