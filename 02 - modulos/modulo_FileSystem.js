// Importamos el módulo de File System.
const fs = require('fs');

// Declaramos un objeto carpeta y averiguamos cuántos archivos tengo en esa carpeta de manera síncrona.
// const archivos = fs.readdirSync('./');
// console.log(archivos);

// Averiguamos cuántos archivos tengo en esa carpeta de manera asíncrona.
fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Resultado', files);
});