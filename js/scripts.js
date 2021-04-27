let pokemonRepository=(function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    
    function addListItem(pokemon){
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon &&
            'detailsUrl' in pokemon
          ) {
            pokemonList.push(pokemon);
          } else {
            console.log(
              'Error in the Pokédex. The Pokémon data could not be loaded. Professor Oaks team will correct the error as soon as possible.'
            );
          }
        }
    
    function getAll(){
    return pokemonList;
    }
    
    function pokemonListListener(button, pokemon) {
        button.addEventListener('click', function () {
          showDetails(pokemon);
        });
      }

    function addPokemon(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function(){
    showDetails(pokemon);
    });
    }
    

      async function loadDetails(pokemon) {
        showLoadingMessage();
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
        await delay(2000);
        let url = pokemon.detailsUrl;
        try {
          const response = await fetch(url);
          const details = await response.json();
          pokemon.id = details.id;
          pokemon.imageUrl =
            details['sprites']['other']['official-artwork']['front_default'];
          pokemon.height = details.height;
          pokemon.weight = details.weight;
          pokemon.types = details.types;
          hideLoadingMessage();
        } catch (e) {
          console.error(e);
          hideLoadingMessage();
        }
      }

      

      function remove() {
        console.log(
          `The last Pokémon ("${
            pokemonList[pokemonList.length - 1].name
          }") has been deleted`
        );
        pokemonList.pop();
      }




    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
          });
        }

    return {
    addListItem: addListItem,
    getAll: getAll,
    addPokemon: addPokemon,
    loadList: loadList,
    loadDetails: loadDetails,
    remove: remove,
  };
})();
    
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addPokemon(pokemon);
    });
  });