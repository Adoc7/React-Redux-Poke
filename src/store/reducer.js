import initialState from "./initialState";
import { CLICK, FETCH_POKEMON_SUCCESS } from './action';

// Reducer n'est pas du React, juste du JAVASCRIPT
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // Si action.type est égale à la case CLICK
        case CLICK:
            // Alors on enregistre un objet
            return {
                // On ne mute pas l'objet state, alors on le copie
                ...state,
                // On va juste modifier la valeur 
                // de la propriété click du state
                click: state.click + 1
            }
            case FETCH_POKEMON_SUCCESS:
                return {
                ...state,
                // On met à jour le tableau vide de l'initialState
                pokemons: action.pokemons
                // on va appeller cette fonction dans App
            }
        default:
            return state;
    }
}
export default reducer;