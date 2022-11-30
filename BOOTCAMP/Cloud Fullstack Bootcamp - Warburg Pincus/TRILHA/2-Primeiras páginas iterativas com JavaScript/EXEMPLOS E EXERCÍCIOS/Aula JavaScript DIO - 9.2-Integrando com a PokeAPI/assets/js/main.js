// Função base para criação da lista de Pokemons.

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


// EXEMPLO 01

pokeApi.getPokemons().then((pokemons = []) => {

        const listItems = []

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i]

           //pokemonList.innerHTML +=   convertPokemonToLi(pokemon) // Aqui concatena item a item, o que funciona, mas não é o ideal. Melhor concatenar tudo de uma vez através de um Array.

           listItems.push(convertPokemonToLi(pokemon))
        }

        console.log(listItems)

    })
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição concluída'))

    
// EXEMPLO 02: utilizando o MAP. Resultado é semelhante ao item anterior, só que está retornando apenas os nomes dos Pokeons.

pokeApi.getPokemons().then((pokemons = []) => {

    const newList = pokemons.map((pokemon) => {
        return pokemon.name
    })

    console.log(newList)

})
.catch((error) => console.log(error))
.finally(() => console.log('Requisição concluída'))


// EXEMPLO 03: utilizando o MAP. Resultado é o mesmo do EXEMPLO 01, só que com código reduzido, sem pecisar usar o FOR, substintuindo-o pelo MAP.

pokeApi.getPokemons().then((pokemons = []) => {

    const newList = pokemons.map((pokemon) => {
        return convertPokemonToLi(pokemon)
    })

    console.log(newList)

})
.catch((error) => console.log(error))
.finally(() => console.log('Requisição concluída'))


// EXEMPLO 04: utilizando o MAP. Juntando os itens da lista para exibição na página.

pokeApi.getPokemons().then((pokemons = []) => {

    const newList = pokemons.map(convertPokemonToLi) // Quando a Arro Funtion tem apenas uma linha pode-se retirar {}, deixando o código ainda mais reduzido. Além disso, no MAP já pode ser passado direto o resultado da função "convertPokemonToLi".

    const newHtml = newList.join('') // O "join" junta os itens e as aspas não está indicando separador entre os itens.

    pokemonList.innerHTML += newHtml // Cria o novo HTML e exibe os pokemons em lista. O "+=" concatena.

})
.catch((error) => console.log(error))
.finally(() => console.log('Requisição concluída'))


// EXEMPLO 05: utilizando o MAP. Reduzindo ainda mais o código.

pokeApi.getPokemons().then((pokemons = []) => {

    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('') // Aqui o "=" está substituindo o HTML pelo novo resultado.

})
.catch((error) => console.log(error))
.finally(() => console.log('Requisição concluída'))