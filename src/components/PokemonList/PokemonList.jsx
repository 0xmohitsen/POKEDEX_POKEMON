// CSS imports
import './PokemonList.css';

import { useEffect , useState } from 'react';
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList(){
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
    const [pokeDexUrl , setPokeDexUrl] = useState(DEFAULT_URL);
    const [pokemonList , setPokemonList] = useState([]);
    const[nextUrl , setNextUrl] = useState(DEFAULT_URL);
    const[prevUrl , setPrevUrl] = useState(DEFAULT_URL);

    async function downloadPokeDexData(){

        const response = await axios.get(pokeDexUrl ? pokeDexUrl : DEFAULT_URL);

        const pokemonResults = response.data.results; // array of pokemons

        setPrevUrl(response.data.previous);
        setNextUrl(response.data.next);

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
         setPokemonList(pokemonData);
    }
    
    useEffect(() => {
        downloadPokeDexData();
    }, [pokeDexUrl])
    return (
        <div className='pokemon-list-wrapper'>
        <h1 id='pokemon-list-heading'>Pokemon List</h1>

        <div className='page-controller'>
            <button onClick={() => setPokeDexUrl(prevUrl)}>prev</button>
            <button onClick={() => setPokeDexUrl(nextUrl)}>next</button>
        </div>
         <div className='pokemon-list'>
           {pokemonList.map((pokemon) => <Pokemon name={pokemon.name} url={pokemon.image} key={pokemon.id} id={pokemon.id}/>)}
         </div>
        </div>

    )
}

export default PokemonList;