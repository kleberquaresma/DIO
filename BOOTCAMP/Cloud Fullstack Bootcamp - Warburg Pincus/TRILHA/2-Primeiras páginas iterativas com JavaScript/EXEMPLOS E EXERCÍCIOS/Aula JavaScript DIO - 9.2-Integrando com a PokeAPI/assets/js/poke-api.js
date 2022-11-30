const pokeApi = {} // Criação do objeto pokeApi

// Métodos do objeto:
    pokeApi.getPokemons = (offset = 0, limit = 10) => { // usando Arrow Function e passando valores default
        /*const offset=0
        const limit=10*/
        const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.log(error))
    }


    //EXEMPLO 01: Usar um "Promise" para "esperar" pelo resultado de requisições e conseguirmos pega os detalhes dos Pokemons.

    Promise.all([
        fetch('https://pokeapi.co/api/v2/pokemon/1/'),
        fetch('https://pokeapi.co/api/v2/pokemon/2/'),
        fetch('https://pokeapi.co/api/v2/pokemon/3/'),
        fetch('https://pokeapi.co/api/v2/pokemon/4/'),
    ]).then((results) => {
        console.log(results)
    })