const offset=0
const limit=10

const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

/* Manipulando resultado de uma requisição através de uma Promise.

Verificar os resultados dos exemplos a seguir no depurador do Browser.

EXEMPLO 01:
*/
fetch(url)
    .then(function (response) { // para quando o resultado do Fetch é bem sucedido.
        console.log(response)
    })
    .catch(function (error){ // para quando o resultado do Fetch NÃO é bem sucedido.
        console.log(error)
    })
    .finally(function(){
        console.log('Requisição concluída')
    })

const x = 10 + 10
console.log(x);


/* EXEMPLO 02: semelhante ao Exemplo 01, só que já traz o resultado no formato JSON. */
fetch(url)
    .then(function (response) { // para quando o resultado do Fetch é bem sucedido.
        response.json()
            .then(function(responseBody){ // Este segundo Then recebe a resposta do primeiro Then
                console.log(responseBody)
            })
    })
    .catch(function (error){ // para quando o resultado do Fetch NÃO é bem sucedido.
        console.log(error)
    })
    .finally(function(){
        console.log('Requisição concluída')
    })


/* EXEMPLO 03: Igual ao Exemplo 02, só que escrito de forma mais elegante, evitando Callback dentro de Callback.  */
fetch(url)
    .then(function (response) { // para quando o resultado do Fetch é bem sucedido.
        return response.json()
    })
    .then(function(jsonBody){ // Este segundo Then recebe a resposta do primeiro Then
        console.log(jsonBody)
    })
    .catch(function (error){ // para quando o resultado do Fetch NÃO é bem sucedido.
        console.log(error)
    })
    .finally(function(){
        console.log('Requisição concluída')
    })


/* EXEMPLO 04: Usar Arrow Function para reduzir o código. Semelhante ao Exemplo 03, só que ainda mais reduzido. */
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody)) // Este segundo Then recebe a resposta do primeiro Then
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição concluída'))


/* EXEMPLO 05: Uso do "Debugger". Para ajudar a debugar JavaScript no Browser, ou mesmo no note. */
fetch(url)
    .then((response) => response.json()) 
    .then((jsonBody) => console.log(jsonBody)) // Este segundo Then recebe a resposta do primeiro Then
    /*.then((jsonBody) => {
        debugger
        console.log(jsonBody)
    })*/
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição concluída'))


/* EXEMPLO 06: Pegar a lista de Pokemons através da propriedade "results" do jsonBody. */
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        debugger
        console.log(pokemonList)
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição concluída'))


/* EXEMPLO 07: Converter a lista json em uma lista HTML. */

function convertPokemonToHtml(pokemon){
    return `
            <li class="pokemon">
                <spam class="number">#001</spam>
                <spam class="name">${pokemon.name}</spam>
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt='${pokemon.name}'>
                </div>
            </li>
            `
}

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i]
            console.log(convertPokemonToHtml(pokemon))   
        }
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição concluída'))



/* EXEMPLO 08: Gerar a lista dinâmicamente no arquivo HTML. */

function convertPokemonToLi(pokemon){
    return `
            <li class="pokemon">
                <spam class="number">#001</spam>
                <spam class="name">${pokemon.name}</spam>
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt='${pokemon.name}'>
                </div>
            </li>
            `
}

const pokemonList = document.getElementById('pokemonList')

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i]
            pokemonList.innerHTML +=   convertPokemonToLi(pokemon)
        }

    })
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição concluída'))