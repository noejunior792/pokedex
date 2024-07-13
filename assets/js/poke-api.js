const pokeApi = {};

pokeApi.getPokemonDetail = (pokemon) =>{
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 0) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

    return fetch(url)
          .then((response) => response.json())
          .then((jsonBody) => jsonBody.results)
          .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
          .then((detailRequest) => Promise.all(detailRequest))
          .then((pokemonsDetails) => pokemonsDetails)
}