let pokemonList = [];
pokemonList = [
    { name: "Bulbasaur", height:0.7, type: ["grass"]},
    { name: "Wartortle" , height: "1" ,type:["water"]},
    {name: "Beedrill", height: "1", type: ["bug"]}
]

let pokemonSizeThreshold = 0.8;

for( i = 0; i <= pokemonList.length; i++) {
    let pokemonString = `${pokemonList[i].name} ( Height: ${ pokemonList[i].height} )`;
    let pokemon = pokemonList[i].height >= pokemonSizeThreshold ? `<p> ${pokemonString} - Wow, that’s big! </p>` : `<p> ${pokemonString} </p>`;
    document.write(pokemon);
}

