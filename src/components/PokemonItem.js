import React from "react";

const PokemonItem = ({pokemon}) => {
  return (
    <li className="pokemon-item">
      <img src={pokemon.img} alt={pokemon.name} />
      {pokemon.name}
    </li>
  );
};

export default PokemonItem;
