// CSS imports
import "./PokemonList.css";

import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";

function PokemonList() {
  const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

  // Custom hook
  const [pokemonListState, setPokemonListState] = usePokemonList(DEFAULT_URL);

  // Function to scroll smoothly to the Pokémon list
  const scrollToList = () => {
    document
      .getElementById("pokemon-list-heading")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pokemon-list-wrapper">
      <h1 id="pokemon-list-heading">Pokemon List</h1>

      <div className="pokemon-list">
        {pokemonListState.pokemonList.map((pokemon) => (
          <Pokemon
            name={pokemon.name}
            url={pokemon.image}
            key={pokemon.id}
            id={pokemon.id}
          />
        ))}
      </div>

      <div className="page-controller">
        <button
          onClick={() => {
            setPokemonListState({
              ...pokemonListState,
              pokeDexUrl: pokemonListState.prevUrl,
            });
            scrollToList();
          }}
        >
          prev
        </button>
        <button
          onClick={() => {
            setPokemonListState({
              ...pokemonListState,
              pokeDexUrl: pokemonListState.nextUrl,
            });
            scrollToList();
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
