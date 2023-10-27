//CSS imports
import './PokeDex.css';

import Pokemon from '../Pokemon/Pokemon';
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';

function PokeDex(){

    return (
        <div className='PokeDex-wrapper'>
        <h1 id='heading'>PokeDex</h1>
        <Search/>
        <PokemonList/>
        <Pokemon/>
        </div>
    )
}

export default PokeDex;