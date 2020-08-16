import React from "react";
import PokemonItem from "./PokemonItem";

import { connect } from 'react-redux';

const PokeList = ({click, pokemons}) => {
  console.log(pokemons)
  return (
    <div className="list-container">
      {/* On affiche la valeur de click */} 
      <h2>Try : {click}</h2>
      {/* On veut filtrer si les Pokemons sont capturés ou pas divisé par le nombre de pokemons dans le*/}   
      <h2> {pokemons.filter(pokemon => pokemon.isCatch).length} / {pokemons.length}</h2>
      <ul>   
        {/* Les accolades veulent dire qu'on passe en JS */}        
        {
            /* Pour chaque pokemon qu'on crée ici tu vas retourner 
            le component <PokemonItem/> C'est un itérable 
            alors il faut passer une clé puis les pokemon
            qu'on pourra traiter dans PokemonItem*/
            pokemons.map(pokemon => (
            <PokemonItem key={pokemon.id} pokemon={pokemon} />
            ))
        }
        {/*pokemons.map prend ici en parametre une fonction flechée courte
        qui aurait pu être ecrite comme ceci :
        pokemons.map(function(pokemon) {
              return (
            <PokemonItem key={pokemon.id} pokemon={pokemon} />
        )}) */}

      </ul>
    </div>
  );
};

// On mappe (reproduit) le state (store/reducer.js) en props
// en destructuring on prend juste la propriété {click} de l'objet state
const mapStateToProps = ({ click, pokemons }) => {
  // On enregistre la propriété click en mémoire 
   // Pour pouvor l'utiliser dans la fonction PocketList
  return {
    click,
    pokemons
  };
};
// Et on connecte la fonction mapStateToProps à (PokeList)
export default connect(mapStateToProps)(PokeList);