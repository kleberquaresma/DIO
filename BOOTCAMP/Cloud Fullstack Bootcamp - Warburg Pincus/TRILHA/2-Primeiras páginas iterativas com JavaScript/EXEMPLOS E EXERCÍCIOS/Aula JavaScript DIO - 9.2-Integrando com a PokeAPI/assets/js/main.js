const offset=0
const limit=10
const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

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

pokeApi.getPokemons().then((pokemons) => {

        const listItems = []

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i]

           // pokemonList.innerHTML +=   convertPokemonToLi(pokemon) // Aqui concatena item a item, o que funciona, mas não é o ideal. Melhor concatenar tudo de uma vez.

           listItems.push(convertPokemonToLi(pokemon))
        }

    })
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição concluída'))