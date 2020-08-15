import React from "react";
import PokemonItem from "./PokemonItem";

import { connect } from 'react-redux';

const PokeList = ({click}) => {
  return (
    <div className="list-container">
      {/* On affiche la valeur de click */} 
      <h2>Try : {click}</h2>
      <h2>Pokedex</h2>
      <ul>
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
      </ul>
    </div>
  );
};

// On mappe (reproduit) le state (store/reducer.js) en props
// en destructuring on prend juste la propriété {click} de l'objet state
const mapStateToProps = ({ click }) => {
  // On enregistre la propriété click en mémoire 
   // Pour pouvor l'utiliser dans la fonction PocketList
  return {
    click
  };
};
// Et on connecte la fonction mapStateToProps à (PokeList)
export default connect(mapStateToProps)(PokeList);