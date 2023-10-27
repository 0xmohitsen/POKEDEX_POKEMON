//CSS imports
import './PokemonDetails.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PokemonDetails(){

    const POKEMON_DETAIL_URL = "https://pokeapi.co/api/v2/pokemon/";

    const { id } = useParams();
    const [pokemonDetail , setPokemonDetail] = useState(null);

    async function downloadPokemonData(){

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
        downloadPokemonData();
    }, []);
    
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