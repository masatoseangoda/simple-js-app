let pokemonRepository=(function() {
    let pokemonList = [
    { name: "Bulbasaur",
    height:0.7,
    type: "grass"
    },
    { name: "Wartortle",
    height: 1,
    type: "water"
    },
    {name: "Beedrill",
    height: 1,
    type: "bug"
    }
    ];
    
    function addListItem(pokemon){
    if (typeof pokemon === 'object' && typeof pokemon !== null) {
    pokemonList.push(item);
    } else {
    console.log('you need an object');
    }}
    
    function getAll(){
    return pokemonList;
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
    
    function showDetails(pokemon) {
    console.log(pokemon);
    }
    
    return {
    addListItem: addListItem,
    getAll: getAll,
    addPokemon: addPokemon,
    };
    })();
    
    pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addPokemon(pokemon);
    });
