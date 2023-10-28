//CSS imports
import './PokeDex.css';

import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import { useState } from 'react';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

function PokeDex(){

    const [searchTerm , setSearchTerm] = useState('');

    return (
        <div className='PokeDex-wrapper'>
        <h1 id='heading'>PokeDex</h1>
        <Search updateSearchTerm={setSearchTerm}/>
        
        {searchTerm ? <PokemonDetails pokemonName={searchTerm}/> : <PokemonList/>}
        </div>
    )
}

export default PokeDex;