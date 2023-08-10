// Consigna:
// Crear un programa que permita escoger entre cara o cruz. El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no. El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a 0. También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar. Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.

let rondasAcertadas = 0;
let salir = '';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

while (salir !== 'SALIR') {
    let jugada = prompt('Ingrese CARA, CRUZ o SALIR si desea salir del juego').toUpperCase();
    let jugadaPrograma = getRandomInt(2);
    if ((jugadaPrograma === 0 && jugada === "CARA") || (jugadaPrograma === 1 && jugada === "CRUZ")) {
        rondasAcertadas = rondasAcertadas + 1;
        alert(`Acertaste! Van ${rondasAcertadas} rondas acertadas`);
    } else if (jugada === "SALIR") {
        alert(`Acertaste ${rondasAcertadas} rondas, Gracias por jugar!`);
    } else {
        rondasAcertadas = 0;
        alert("No acertaste");
    }
    salir = jugada;
}