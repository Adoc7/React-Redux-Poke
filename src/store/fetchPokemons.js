// On aurez aussi pu mettre le contenu de ce fichier dans action.js
import { fetchPokemonSuccess } from "./action"

// Nombre de pokemons qu'on veut charger
const numberOfPokemons = 80

// On initialise un tableau d'urls vide
// qui stockera toutes les adresses des personnages
const urls = []

// On va pousser pour stocker dans ce tableau d'urls
// le nombre défini dans numberOfPokemons 
// les adresses qu'on veut fetcher (chercher)
for (let i = 1; i <= numberOfPokemons; i++) {
    // adresse de nos pokemon avec variable i incluse
    // ${} permet de passer la variable i en JS
    urls.push(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
}

// On créé un 2ème tableau qui va être un tableau de requete
// Pour cela on transorme le tableau d'urls en tableau de requete
// on mappe sur le tableau d'urls et chaque url on la transforme en une requete
// fetch() d'url permety d'appeller l'API
// requests est un tableau de fetch
const requests = urls.map(url => fetch(url))

export default () => {
    return dispatch => {

        /* Promise.all prend en paramètre un tableau ou un itérable 
        de différentes requetes. C'est ce qu'on a fait au dessus.
        Ca va lui permettre de faire toutes les requetes en même temps
        Ca ne passera pas à la suite tant que l'ensemble des requetes
        n'est pas validé. C'est un mega await qui mettra en pause le code
        tant que l'ensemble des requetes n'est pas terminé
        
        On applique Promise.all sur notre tableau de fetch d'url
        */
        Promise.all(requests)
        /* On récupère toutes nos reponses : ensemble des promesses
        Quand on fait un fetch url, on récupère une promesse. 
        
        Sur l'ensemble des reponses, 
        il faudra faire un 2e Promise.all
        auquel on passe toutes les réponses. Ca ne renvoie pas des données,
        mais juste des promesses. Une promesse, ce n'est pas une donnée réelle.
        Il faut transformer la promesse en donnée réelle.
        On fait un Promise.all sur les responses auwquelles on applique
        une méthode .map appliquée sur res (on peut l'appeller comme on veut)
        qu'on transforme en json
        La méthode .json() transforme unPromesse en objet Javascript lisible pour le code
        */            
        .then(responses => Promise.all(responses.map(res => res.json())))
                /* On fait une selection sur tous les pokemons qu'on va formater
                pour limiter les données avec la méthode .map() qui retournera
                un objet implicite avec pour chaque pokemon juste les seules 
                propriétés dont on a besoin */            
                .then(pokemons => pokemons.map(pokemon => ({
                id: pokemon.id,
                name: pokemon.name,
                captureRate: pokemon.capture_rate,
                isCatch: false,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
            })))
             /* Une fois qu'on a récupéré tout ça, on lui passe
                toutes nos datas formatées avec juste ce qu'on a besoin
                et on va lui demander de dispatcher l'action fetchPokemonSuccess
                avec pokemons en paramètre*/            
                .then(pokemons => dispatch(fetchPokemonSuccess(pokemons)))
              /* Cela nous renverra à l'action de mise à jour de la fonction 
                 fetchPokemonSuccess */
    }
}