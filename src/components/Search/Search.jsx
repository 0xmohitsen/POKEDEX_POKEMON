// CSS imports
import "./Search.css";

import useDebounce from "../../hooks/useDebounce";

function Search({ updateSearchTerm }) {
  const debounceUpdatedSearch = useDebounce((e) =>
    updateSearchTerm(e.target.value)
  );
  return (
    <>
      <input
        className="search-bar"
        type="text"
        placeholder="Search for the pokemon you're looking for"
        onChange={debounceUpdatedSearch}
      />
    </>
  );
}

export default Search;
