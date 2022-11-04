
//Esto solo funciona si en el fichero que queremos le hacemos export
import { heroes } from './data/heroes'

console.log(heroes);
/*
const getHeroeById = (id) => {
    return heroes.find((heroe) => {
        if(heroe.id === id) {
            return true;
        } else {
            return false;
        }
    });
}
*/

/*
const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id); //se puede escribir ese heroe sin parentesis
}
*/

const getHeroeById = (id) => {
    //heroe es el argumento de la funcion
    return heroes.find((heroe) => heroe.id === id); 
}

console.log(getHeroeById(2));

//Recoger más de una línea: utilziando filter
const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner); 
}

console.log(getHeroesByOwner("Marvel"));