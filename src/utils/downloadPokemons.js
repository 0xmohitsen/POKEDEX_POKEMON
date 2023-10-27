import axios from 'axios';

async function downloadPokeDexData(pokemonListState, setPokemonListState, defaultUrl , limit = 20){

    const response = await axios.get(pokemonListState.pokeDexUrl ? pokemonListState.pokeDexUrl : defaultUrl);

    let pokemonResults = response.data.results ? response.data.results : response.data.pokemon; // array of pokemons

    pokemonResults = pokemonResults.slice(0 , limit);
    
    const pokemonPromise = pokemonResults.map((p) => {
        if(p.url){
           return  axios.get(p.url)
        } else if(p.pokemon.url){
            return axios.get(p.pokemon.url);
        }
    });

    const pokemonListData = await axios.all(pokemonPromise);

    const pokemonData = pokemonListData.map((pokemonData) => {
        const pokemon = pokemonData.data;

        return {
            id : pokemon.id,
            name : pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default,
            type:pokemon.types
        }
    })
    //  setPokemonList(pokemonData);
    setPokemonListState(({...pokemonListState , pokemonList : pokemonData , prevUrl : response.data.previous , nextUrl : response.data.next}))
}

export default downloadPokeDexData;