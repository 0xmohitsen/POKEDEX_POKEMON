//CSS imports
import './PokemonDetails.css';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import usePokemon from '../../hooks/usePokemon';

function PokemonDetails(){

    const { id } = useParams();
    // Custom hook
    const [pokemonDetail] = usePokemon(id);
    return (
        pokemonDetail && (
        <>
        <Link className='link-style' to={`/`}><h1 className="PokeDex-redirect">Pokdex</h1></Link>
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
        </div>
        </>)
    )
}

export default PokemonDetails;