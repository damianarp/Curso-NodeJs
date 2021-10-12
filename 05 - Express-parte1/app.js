// Importamos Express dentro de una const.
const express = require('express');

// Creamos una instancia de express (nuestra app).
const app = express();

// Le indicamos a nuestra app los métodos que vamos a utilizar y sus rutas.
// Existen estos métodos:
// app.get(); -> Petición de datos.
// app.post(); -> Envío de datos.
// app.put(); -> Actualización de datos.
// app.delete(); -> Eliminación de datos.

// En esta app solo haremos una petición con el método get.
// Definimos las rutas.
app.get('/',(req, res) => {
    // Enviamos información al servidor.
    res.send('Hola Mundo desde Express');
}); 

app.get('/api/usuarios',(req, res) => {
    // Enviamos información al servidor.
    res.send(['María', 'Rodrigo', 'Pedro', 'Carla']);
}); 

// Indicamos el puerto en el que va a estar escuchando el servidor web.
app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000...');
});





