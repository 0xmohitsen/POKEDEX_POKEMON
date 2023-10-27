// CSS imports
import './PokemonList.css';

import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../../hooks/usePokemonList';

function PokemonList(){
    // Custom hook
    const [pokemonListState , setPokemonListState] = usePokemonList();

    
    return (
        <div className='pokemon-list-wrapper'>
        <h1 id='pokemon-list-heading'>Pokemon List</h1>

        <div className='page-controller'>
            <button onClick={() => setPokemonListState({...pokemonListState , pokeDexUrl : pokemonListState.prevUrl})}>prev</button>
            <button onClick={() => setPokemonListState({...pokemonListState , pokeDexUrl : pokemonListState.nextUrl})}>next</button>
        </div>
         <div className='pokemon-list'>
           {pokemonListState.pokemonList.map((pokemon) => <Pokemon name={pokemon.name} url={pokemon.image} key={pokemon.id} id={pokemon.id}/>)}
         </div>
        </div>

    )
}

export default PokemonList;