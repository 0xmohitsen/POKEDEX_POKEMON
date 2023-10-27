import { useEffect , useState } from 'react';
import downloadPokeDexData from '../utils/downloadPokemons';

function usePokemonList(DEFAULT_URL){

    const [pokemonListState , setPokemonListState] = useState({

        pokemonList : [],
        pokeDexUrl : DEFAULT_URL,
        prevUrl : DEFAULT_URL,
        nextUrl : DEFAULT_URL
    })
    
    useEffect(() => {
        downloadPokeDexData(pokemonListState, setPokemonListState ,DEFAULT_URL);
    }, [pokemonListState.pokeDexUrl])

    return [pokemonListState , setPokemonListState];
}

export default usePokemonList;