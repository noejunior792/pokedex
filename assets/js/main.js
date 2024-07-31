const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 5;
let offset = 0;

function createPokemonItem(pokemon) {
    const li = document.createElement('li');
    li.classList.add('pokemon', pokemon.type);

    const number = document.createElement('span');
    number.classList.add('number');
    number.textContent = `#${pokemon.number}`;

    const name = document.createElement('span');
    name.classList.add('name');
    name.textContent = pokemon.name;

    const detail = document.createElement('div');
    detail.classList.add('detail');

    const types = document.createElement('ol');
    types.classList.add('types');
    pokemon.types.forEach(type => {
        const typeLi = document.createElement('li');
        typeLi.classList.add('type', type);
        typeLi.textContent = type;
        types.appendChild(typeLi);
    });

    const img = document.createElement('img');
    img.src = pokemon.photo;
    img.alt = pokemon.name;

    detail.appendChild(types);
    detail.appendChild(img);

    li.appendChild(number);
    li.appendChild(name);
    li.appendChild(detail);

    return li;
}

function appendPokemons(pokemons) {
    const fragment = document.createDocumentFragment();
    pokemons.forEach(pokemon => {
        const pokemonItem = createPokemonItem(pokemon);
        fragment.appendChild(pokemonItem);
    });
    pokemonList.appendChild(fragment);
}

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        appendPokemons(pokemons);
    });
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonItems(offset, limit);
});
