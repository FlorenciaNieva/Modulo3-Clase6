// Consigna:
// Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

let usuario = 'Florencia';
let contrasenia = 'hola1234';
let intentos = 0;

while (intentos < 3) {
    let user = prompt('Ingrese su usuario');
    let password = prompt('Ingrese su contraseña');
    if (usuario === user && contrasenia === password) {
        alert('Bienvenida!!');
        break;
    }
    intentos++
}
if (intentos === 3) {
    alert('Error');
}