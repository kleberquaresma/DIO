// Função base para criação da lista de Pokemons.

function convertPokemonToLi(pokemon){
    return `
            <li class="pokemon ${pokemon.type}">
                <spam class="number">${pokemon.number}</spam>
                <spam class="name">${pokemon.name}</spam>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
            `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {

    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('') // Aqui o "=" está substituindo o HTML pelo novo resultado.

})
.catch((error) => console.log(error))
.finally(() => console.log('Requisição concluída'))