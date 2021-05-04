let pokemonRepository=(function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    let modalContainer = document.querySelector('#modal-container');
    
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
    
    async function loadList() {
        showLoadingMessage();
        try {
          const response = await fetch(apiUrl);
          const json = await response.json();
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url,
            };
            addPokemon(pokemon);
          });
          hideLoadingMessage();
        } catch (e) {
          console.error(e);
          hideLoadingMessage();
        }
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

      function showLoadingMessage() {
        console.log('Loading Data...');
        let pokemonList = document.querySelector('.pokemon-list');
        //pokemonList.insertBefore(message, pokemonList.firstChild);
      }
    
      function hideLoadingMessage() {
        console.log('Data successfully loaded!');
        let pokemonList = document.querySelector('.pokemon-list');
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
          showModal(pokemon);
          });
        }

        function showModal(pokemon, details) {
          let modalContainer = document.querySelector('#modal-container');
          modalContainer.innerHTML = '';

          let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

   
    let imageElement = document.createElement('img');
    imageElement.src = pokemon.imageUrl;

    let heightElement = document.createElement('p');
    heightElement.innerText = 'Height: ' + pokemon.height;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(imageElement);
    modal.appendChild(heightElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
  modalContainer.classList.remove('is-visible');
}

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });



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