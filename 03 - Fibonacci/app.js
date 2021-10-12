// Serie de Fibonacci
// 1 1 2 3 5 8 13 21 34 55 89 144...

// Importamos serie.js
const serie = require('./serie');

// Declaramos una variable para capturar los argv con el método process.
let argv = process.argv; // Salida: ['ruta donde esta instalado node','ruta del archivo app.js']

// Desde el terminal se pueden agregar mas párametros, por ejemplo:
// node app.js serie=5
// Salida: ['ruta donde esta instalado node','ruta del archivo app.js', serie=5]

// Capturamos el índice 2 para obtener el tercer elemento del arreglo.
// Separamos el valor con un split para obtenerlo -> Salida: ['serie', '5']
// y obtenemos el valor pasándole el índice -> Salida: 5
let valor = argv[2].split('=')[1];

// Podemos comprobar que funciona con un console.log
//console.log(valor);

// Definimos la cantidad de números de la serie
let cantidad = valor;

// Llamamos al método crearSerie (que retorna una promesa) y lo manejamos.
serie.crearSerie(cantidad)
    .then((mensaje) => console.log(mensaje))
    .catch((mensaje) => console.log(mensaje));
