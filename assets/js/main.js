
function convertPokemonToLi(pokemon) {
  return `<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="tpyes">
                        <li class="types">Secure</li>
                        <li class="types">Fast</li>
                    </ol>


                    <img src="https://skillicons.dev/icons?i=javascript" alt=${pokemon.name}/>
                </div>
            </li>`
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons) => {

  const listItems =[];

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    listItems.push(convertPokemonToLi(pokemon));
  }
})
