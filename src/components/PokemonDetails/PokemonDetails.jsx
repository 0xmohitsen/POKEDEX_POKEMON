//CSS imports
import './PokemonDetails.css';

import { Link } from 'react-router-dom';
import usePokemon from '../../hooks/usePokemon';
import Pokemon from '../Pokemon/Pokemon';

function PokemonDetails({pokemonName}){

   
    // Custom hook
    const [pokemonDetail , pokemonListState] = usePokemon(pokemonName);

    return (
      <>
        <Link className='link-style' to={`/`}><h1 className="PokeDex-redirect">Pokdex</h1></Link>
        {pokemonDetail && (
        <div className='pokemon-detail-wrapper'>
          <div className='pokemon-detail-name'>
            {pokemonDetail.name}
          </div>

          <div>
            <img src={pokemonDetail.image}/>
          </div>

          <div className='pokemon-attr'>
            <div>
                Height : {pokemonDetail.height}
            </div>
            <div>
            Weight : {pokemonDetail.weight}
            </div>
          </div>

          <div className='pokemon-types'>
            <h1>Type :</h1> {pokemonDetail.types.map(t => <span className='pokemon-type' key={t.type.name}>{t.type.name}</span> )}
          </div>
        </div>)}

        <div className='similar-pokemon'>
          <h2>Similar Pokemons</h2>

          <div className='pokemon-similar-boxes'>
            {pokemonListState.pokemonList.length > 0 &&
             pokemonListState.pokemonList.map((pokemon) => <Pokemon name={pokemon.name} url={pokemon.image} key={pokemon.id} id={pokemon.id}/>)
             }
          </div>
        </div>
        </>
    )
}

export default PokemonDetails;