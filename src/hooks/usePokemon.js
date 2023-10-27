import { useEffect, useState } from 'react';
import axios from 'axios';

function usePokemon(id){
    const POKEMON_DETAIL_URL = "https://pokeapi.co/api/v2/pokemon/";

    const [pokemonDetail , setPokemonDetail] = useState(null);

    async function downloadPokemonData(id){

        const response = await axios.get(POKEMON_DETAIL_URL + id);

        const pokemon = response.data;

        setPokemonDetail({
            name : pokemon.name,
            height : pokemon.height,
            weight : pokemon.weight,
            image : pokemon.sprites.other.dream_world.front_default,
            types : pokemon.types
        })
    }

    useEffect(() => {
        downloadPokemonData(id);
    }, []);

    return [pokemonDetail];
}

export default usePokemon;