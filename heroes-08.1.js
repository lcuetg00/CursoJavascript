//Al final poner el default export con el nombre de lo que quiero exportar
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export default heroes;

export const owners = ['DC','Marvel'];

//Si usamos esta, tenemos que:
//import {heroes, owners} from './data/heroes'

//export {
//    heroes,
//    owners

//}

export {
    //heroes as default,
    //owners
}