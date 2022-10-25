//Variables y constantes
//Cualquier valor que no se inicalice en javascript tiene valor de undefined
//En una funcion si no hay un retorno especificado (escribir "return"), devuelve undefined
const nombre = "Luis"; //Esta constante no se puede reasignar
let valorDado = 5;

console.log(nombre,valorDado);

if(true) {
    let valorDado = 3;
    console.log(valorDado);
}


//Arrays constantes
//En arrays, const define una referencia constante a un array
//Se puede añadir elementos a ese array
const array = ['Manzana','Platano'];
//Hacer lo siguiente daria error:
//array = ['Pera]

//Podemos añadir elementos nuevos a ese array
array.push('Pera');


