// Importamos el mósulo path
const path = require('path');

// Declaramos un objeto y lo parseamos según su __filename.
const objPath = path.parse(__filename);

// Mostramos el objeto en consola.
console.log(objPath);

// Mostramos el nombre del objeto en consola.
console.log(objPath.name);