import React, { useEffect } from "react";
import "./styles.css";
// Connection au Store
import { connect } from 'react-redux';
import { CLICK } from './store/action'
import fetchpokemons from './store/fetchPokemons';

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";

const App = ({handleClick, fetchpokemons}) => {
  
  // On veut qu'au chargement de l'app on fetch les Pokemons
  useEffect(() => {
    fetchpokemons()
  }, [fetchpokemons])// Le tableau veut dire, si fetchpokemons est modifié tu relance fetchpokemons

  return (
    <div className="App">
      <button onClick={() => handleClick()}>click</button>
      <GameBoy />
      <PokeList />
    </div>
  );
};
// On fera afficher le resultat du clic dans PoketList (voir le fichier)

// On mappe notre dispatch de l'action CLICK sur les props de notre Component
const mapDispatchToProps = dispatch => {
/* On enregistre en mémoire l'objet qui contient 
   la propriété click lequel nous renvoie 
   en valeur une fonction qui va dispatcher un objet
   avec la propriété type et la valeur CLICK de l'action
   qu'on a importé en haut
   */
  return {
  /*Ici on dispatch une fonction qui va dispatcher une action */
    fetchpokemons: () => dispatch(fetchpokemons()),
    handleClick: () => dispatch({ type: CLICK })
  }
}
/*  mapStateToProps ou null doit être le 1er argument de la fonction connect()
    mapDispatchToProps doit être le 2e argument de la fonction connect()
 */
export default connect(null, mapDispatchToProps)(App);
