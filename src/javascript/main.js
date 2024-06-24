const limit = 0
const offset = 0
const url  = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;


function convertLanguagueToHtml(language){
    return `<li class="languague">
                <span class="number">#001</span>
                <span class="name">${language.name}</span>

                <div class="detail">
                    <ol class="tpyes">
                        <li class="types">Secure</li>
                        <li class="types">Fast</li>
                    </ol>


                    <img src="https://skillicons.dev/icons?i=javascript" alt=${language.name}/>
                </div>
            </li>`
}

console.log(document.getElementsByClassName('language'))

fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((languageList) => {
  for (let i = 0; i < languageList.length; i++) {
    const language = languageList[i];
    console.log(convertLanguagueToHtml(language))
    
  }
  })
  .catch((error) => console.log(error))