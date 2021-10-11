// Serie de Fibonacci
// 1 1 2 3 5 8 13 21 34 55 89 144...

// Importamos el módulo file system para poder guardar la serie en un archivo.
const fs = require('fs');

// Definimos las 2 variables iniciales de la secuencia y otra para la serie inicializada vacía.
let fibo1 = 1;
let fibo2 = 1;
let serie = '';

// Mostramos el primer número de la serie.
serie += `${fibo1}\t`; 

// Hacemos un for para realizar la serie
for(let i = 2; i <= 20; i++) {
    serie += `${fibo2}\t`;
    fibo2 = fibo1 + fibo2;
    fibo1 = fibo2 - fibo1;
}

// Grabamos la serie en un archivo.
fs.writeFile('fibonacci.txt', serie, (err) => {
    if (err) throw err;
    console.log('El archivo fue creado con éxito!');
});