const nombre = "Luis";
const apellido = "Cueto";

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`  //Utilizando Template String

//Con salto de línea:
const template = `
${nombre}
${apellido}
${1+1}`

console.log(nombreCompleto);
console.log(template);

function getSaludo(nombre) {
    return 'Hola mundo, soy ' + nombre;
}

console.log(`Este es un saludo: ${getSaludo(nombre)}`);