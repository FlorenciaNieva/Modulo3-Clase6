// Consigna:
// Crear una función repetirLetras que tome como argumento un string palabra y un número entero cantidad, y devuelva una string donde cada letra de palabra esté repetida cantidad de veces.

const repetirLetras = (palabra, cantidad) => {
  let nuevaPalabra = "";
  for (let letra of palabra) {
    nuevaPalabra = nuevaPalabra + letra.repeat(cantidad);
  }
  console.log(nuevaPalabra)
};

repetirLetras("hola", 2); // 'hhoollaa'
repetirLetras("ada", 3); // 'aaadddaaa'
repetirLetras("ah!", 5); // 'aaaaahhhhh!!!!!'
repetirLetras("basta", 1); // 'basta'