console.log("hola");

const objetoLiteral = {
}

console.log(objetoLiteral);

const persona = {
    nombre: 'Luigi',
    apellido: 'Mario',
    edad: 22,
    direccion: {
        ciudad: 'New York',
        zip: 34534756,
        lat: 34545674
    }
}

//Imprimir una variable del objeto:
//console.log(persona.nombre);

//console.log({persona:persona});
//console.log('\n');
//console.log(persona);
//console.table(persona);

//Copia por referencia
//persona2 = persona;
//Si cambiamos el nombre en persona2, se cambia tambien en persona:
//persona2.nombre = 'Peter';
//console.log(persona2);

//Copia por valor (clon del objeto) utilizando el operador spreat '...'
//spread manda individualmente cada uno de los elementos
const persona3 = {...persona};
//console.table(persona3);
persona3.nombre = 'Peter';
console.log(persona3.nombre);
console.log(persona.nombre);