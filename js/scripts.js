let pokemonRepository=(function() {
    let pokemonList = [
    { name: "Bulbasaur",
    height:0.7,
    type: "grass"
    },
    { name: "Wartortle",
    height: "1" ,
    type: "water"
    },
    {name: "Beedrill",
    height: "1",
    type: "bug"
    }
    ];
    
    function add(pokemon){
    if (typeof pokemon === 'object' && typeof pokemon !== null) {
    pokemonList.push(item);
    } else {
    console.log('you need an object');
    }
    }
    
    function getAll(){
    return pokemonList;
    }
    
    return {
    add: add,
    getAll: getAll
    };
    })();
    
    pokemonRepository.getAll().forEach(function(pokemon) {
    if(pokemon.height > 1){
    document.write(`${(pokemon.name)} - Height: ${pokemon.height}cm - Type: ${pokemon.type} - Now that is large! <br/> <br/>`);
    }
    else{
    document.write(`${(pokemon.name)} - Height: ${pokemon.height}cm - Type: ${pokemon.type} <br/> <br/>`);
    }
    })
