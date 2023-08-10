// Consigna:
// Realiza un programa que le pida al usuario que teclee la 'letra magica' A (en mayúscula) y mientras no lo haga se lo vuelva a pedir. Usa un bulce do..while y la ventana alert para los mensajes

let letra = "";

do {
    letra = prompt("Ingrese la letra magica");
} while (letra !== "A");
alert(`Acertaste! La letra magica es ${letra}`);