import { useEffect, useState } from "react";
import axios from "axios";
import downloadPokeDexData from "../utils/downloadPokemons";
import { useParams } from "react-router-dom";

function usePokemon(pokemonName) {
  const { id } = useParams();
  const POKEMON_DETAIL_URL = "https://pokeapi.co/api/v2/pokemon/";

  const [pokemonDetail, setPokemonDetail] = useState(null);

  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    pokeDexUrl: "",
    prevUrl: "",
    nextUrl: "",
  });

  async function downloadPokemonData(id) {
    const response = await axios.get(
      POKEMON_DETAIL_URL + (pokemonName ? pokemonName : id)
    );

    const pokemon = response.data;

    setPokemonDetail({
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types,
    });

    const types = response.data.types.map((t) => t.type.name);
    return types[0];
  }

  async function downloadPokeDexDataAndRelated(id) {
    try {
      const type = await downloadPokemonData(id);

      await downloadPokeDexData(
        pokemonListState,
        setPokemonListState,
        `https://pokeapi.co/api/v2/type/${type}`
      );
    } catch (e) {
      console.log("No pokemon found!");
    }
  }

  useEffect(() => {
    downloadPokeDexDataAndRelated(id);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id, pokemonName]);

  return [pokemonDetail, pokemonListState];
}

export default usePokemon;
