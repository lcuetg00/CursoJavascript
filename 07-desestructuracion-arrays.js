//Desestructuracion arrays

const personas = ['Paco', 'David','Antonio'];

console.log(personas[0]);


//Extraerlos de forma independiente
//Persona numero 1
const [ p1 ] = personas;
console.log(p1);

//Persona numero 2
const [ ,p2 ] = personas;
console.log(p2);

//Persona numero 1
const [ ,,p3 ] = personas;
console.log(p3);

const returnArray = () => {
    return ['ABC',123];
}

const array = returnArray();
const [letras, numeros] = returnArray(); //Extraerlos de forma independiente

console.log(array);
console.log(letras);
console.log(numeros);

//Meter funciones en arrays
const funcion1 = ( valor ) => {
    return [valor, ()=>{ console.log('Hola mundo') } ];
}

const arr = funcion1('Luis');
arr[1](); //Con los parentesis por ser funcion

//Mucho mas logico que llamar a una funcion arr[1]()
const [valor, setNombre] = funcion1('Nombre');
setNombre();