//Funciones

//Distintas formas de hacer funciones
const saludar = function( nombre ){
    return `Hola, ${nombre}`;
}
console.log(saludar("Luis1"));

//saludar2 es el nombre de la funcion
const saludar2 = ( nombre ) => `Hola, ${nombre}`;
console.log(saludar2('Luis2'));

const getUser = () => ({
        uid: 'ABC123',
        username: 'Usuario1'
});
const user = getUser();
console.log(user);



function getUsuarioActivo( nombre ) {
    return {
        uid: 'LASJD234',
        username: nombre
    }
};
const usuarioActivo = getUsuarioActivo('Luis');
console.log(usuarioActivo);

//Trasnformar en una funcion de flecha

const getUsuarioActivo2 = ( nombre ) => ({uid: 'LASJD234', username: nombre});
console.log(getUsuarioActivo2);




