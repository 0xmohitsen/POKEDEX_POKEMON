import { useEffect , useState } from 'react';
import axios from 'axios';

function usePokemonList(){
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

    const [pokemonListState , setPokemonListState] = useState({

        pokemonList : [],
        pokeDexUrl : DEFAULT_URL,
        prevUrl : DEFAULT_URL,
        nextUrl : DEFAULT_URL
    })

    async function downloadPokeDexData(){

        const response = await axios.get(pokemonListState.pokeDexUrl ? pokemonListState.pokeDexUrl : DEFAULT_URL);

        const pokemonResults = response.data.results; // array of pokemons

        const pokemonPromise = pokemonResults.map((Pokemon) => axios.get(Pokemon.url));

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
        setPokemonListState((state) => ({...state , pokemonList : pokemonData , prevUrl : response.data.previous , nextUrl : response.data.next}))
    }
    
    useEffect(() => {
        downloadPokeDexData();
    }, [pokemonListState.pokeDexUrl])

    return [pokemonListState , setPokemonListState];
}

export default usePokemonList;