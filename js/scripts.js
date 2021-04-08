let pokemonRepositry=(function() {
let pokemonList = [];
pokemonList = [
    { name: "Bulbasaur", 
    height:0.7, 
    type: "grass"
},
    { name: "Wartortle" , 
    height: "1" ,
    type: "water"
},
    {name: "Beedrill",
     height: "1", 
     type: "bug"
    }
];

function add(item){
    if(typeof item === "object"){
    pokemonList.push(item)
   }
   else alert("not possible")
};

function getAll(){
    return pokemonList
}

return {
    add: add,
    getAll: getAll
}
})();

function loopFunction(pokemonList){
    if(pokemon.height > 1){
        document.write(`<h1>${pokemonList.name}</h1> <p><strong> height:</strong> ${pokemonList.height} WOW! Is Bigger than one Meter!</p><br>`)
    }
    else{
        document.write(`<h1>${pokemonList.name}</h1> <p><strong> height:</strong> ${pokemonList.height} Meter</p> <br>`)
    }
}

function findgrass(pokemonList){
    if(pokemonList.type === "grass"){
        return pokemon
    }
}
