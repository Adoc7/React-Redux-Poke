// Pour une petite applicaton 
// Pas obligé de créer un fichier spécifique
// CA aurait pu être utilisé dans le fichier map

// Permettra de dispatcher l'action
export const CLICK = 'CLICK'

// Action pour récupérer l'API
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS"

// Les {} entourées de () dans la fonction permettent 
// de retourner directement et implicitement un objet
// On passe en propriété la liste des pokemons qu'on récupere depuis l'API
export const fetchPokemonSuccess = (pokemons) => ({
    type: FETCH_POKEMON_SUCCESS,
    pokemons
})