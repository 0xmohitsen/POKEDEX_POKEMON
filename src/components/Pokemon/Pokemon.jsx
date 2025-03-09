//CSS imports
import "./Pokemon.css";

import { Link } from "react-router-dom";

function Pokemon({ name, url, id }) {
  console.log("What is the Id here :", id);

  return (
    <Link to={`/pokemon/${id}`} className="pokemon-link-wrapper">
      <div className="pokemon-wrapper">
        <div className="pokemon-name">{name}</div>
        <img className="pokemon-img" src={url} />
      </div>
    </Link>
  );
}

export default Pokemon;
