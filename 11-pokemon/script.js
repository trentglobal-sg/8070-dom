const url = "https://pokeapi.co/api/v2/pokemon"

document.addEventListener("DOMContentLoaded", function(){
    const searchBtn = document.querySelector("#search-btn");
    searchBtn.addEventListener("click", async function(){
        const searchTerms = document.querySelector("#search-terms").value;
        const pokemonData = await searchPokemon(searchTerms);
        
        document.querySelector("#output").innerHTML = `
            <h1>${pokemonData.name}</h1>
            <img src="${pokemonData.sprites.other.dream_world.front_default}"/>
        `

    });
})


async function searchPokemon(searchTerms) {
    const response = await axios.get(url + "/" + searchTerms);
    return response.data;
}