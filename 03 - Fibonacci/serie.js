// Importamos el módulo file system para poder guardar la serie en un archivo.
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

// Creamos el método crearSerie y le pasamos como parámetro la cantidad de elementos de la serie.
let crearSerie = (cantidad) => {
    // Retornamos una Promesa.
    return new Promise((resolve, reject) => {
        // Definimos las 2 variables iniciales de la secuencia y otra para la serie inicializada vacía.
        let fibo1 = 1;
        let fibo2 = 1;
        let serie = '';

        // Mostramos el primer número de la serie.
        serie += `${fibo1}\t`; 

        // Hacemos un for para realizar la serie
        for(let i = 2; i <= cantidad; i++) {
            serie += `${fibo2}\t`;
            fibo2 = fibo1 + fibo2;
            fibo1 = fibo2 - fibo1;
        }

        // Grabamos la serie en un archivo.
        fs.writeFile('fibonacci.txt', serie, (err) => {
            if (err)
                reject('Error al crear el archivo');
            else 
                resolve('El archivo fue creado con éxito!');
        });
    })
}

// Exportamos el archivo serie.js
module.exports = {
    crearSerie
}

