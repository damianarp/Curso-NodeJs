// Serie de Fibonacci
// 1 1 2 3 5 8 13 21 34 55 89 144...

// Importamos serie.js
const serie = require('./serie');

// Definimos la cantidad de números de la serie
let cantidad = 20;

// Llamamos al método crearSerie (que retorna una promesa) y lo manejamos.
serie.crearSerie(cantidad)
    .then((mensaje) => console.log(mensaje))
    .catch((mensaje) => console.log(mensaje));
