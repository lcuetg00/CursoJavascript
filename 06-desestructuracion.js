//Desestructuracion de objetos
//Asignacion desestructurante

const persona = {
    nombre: 'luis',
    edad: 22,
    clave: 'hola'
};
console.log(persona.nombre);


//Extraer del objeto lo necesitamos para no hacer objeto.atributo cada vez que necesitemos algo
//Al hacer nombre:nombre2 creamos nombre2 que almacena lo que hay en persona.nombre
const { nombre, edad:edad2 , clave:clave2 } = persona;
console.log(nombre);
console.log(edad2);
console.log(clave2);

//Usando funcion normal
const returnPersona = ( usuario ) => {
    console.log(usuario);
}
returnPersona(persona);

//Usando desestructuracion: (hay que añadir {} a los parametros)

const returnPersonaDesestructurado = ( {clave, nombre, edad, rango='capitan'} ) => {
    console.log(nombre, edad, rango, clave); //Si le escribimos una propiedad que tiene, la usa
    //Si le escribimos una propiedad que no tiene, quedara como undefined a menos que le demos valor

}
returnPersonaDesestructurado(persona);

//Cambiar el nombre de la funcion a useContext
const useContext = ({nombre, edad, clave}) => {
    return {
        nombreClave: clave,
        anios:edad,
        latitud: {
            lat: 12.234234234,
            num: 4564
        }
    }
}

//const {nombreClave, anios, latitud} = useContext(persona);
//console.log(nombreClave, anios);
//console.log(latitutd);

const {nombreClave:nombreCla, anios:an, latitud:{ lat , num }} = useContext(persona);
//De esta forma, no existe "latitud", existe lat y num por separado
console.log(lat,num);

//Tambien se puede hacer:
//const {nombreClave, anios, latitud} = useContext(persona);
//const {lat, num} = latitud;