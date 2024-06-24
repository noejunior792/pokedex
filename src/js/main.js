const limit = 0
const offset = 0
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;


function convertPokemonToHtml(pokemon) {
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

console.log(document.getElementsByClassName('pokemon'))

fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemonList) => {
    for (let i = 0; i < pokemonList.length; i++) {
      const pokemon = pokemonList[i];
      console.log(convertPokemonToHtml(pokemon))

    }
  })
  .catch((error) => console.log(error))