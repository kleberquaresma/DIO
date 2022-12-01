// Funções base para criação da lista de Pokemons.

function convertPokemonTypeToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon){
    return `
            <li class="pokemon">
                <spam class="number">${pokemon.order}</spam>
                <spam class="name">${pokemon.name}</spam>
                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypeToLi(pokemon.types).join('')}
                    </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt='${pokemon.name}'>
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