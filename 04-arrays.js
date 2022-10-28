//Arrays en javascript

//Solo se recomienda crearlo asi para crearlo con un tamaño.
//Este tamaño no es permanente, se pueden añadir mas posiciones
//const array = new Array(100); //Tiene 100 posiciones vacias. 

const array = [1,2,3,4]
//array.push(1);
//array.push(2);
//array.push(3);
//array.push(4);
//No es recomendado usar push para arrays, usar el operador spread '...'

let array2 = [...array, 5];
console.log(array);
console.log(array2)

//map() crea un nuevo array con los resultados de la funcion indiciada
const array3 = array2.map( function(numero) {
    return numero*2;
})
console.log(array3)
