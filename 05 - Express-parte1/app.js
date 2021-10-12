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
    res.send(['María', 'Rodrigo', 'Pedro', 'Carla', 'Marcelo']);
}); 

app.get('/api/usuarios/:id',(req, res) => {
    // Enviamos información al servidor.
    res.send(req.params.id)  ;
});

// Creamos una variable de entorno a través del método process, para definir el puerto.
const port =  process.env.PORT || 3000;   

// Indicamos el puerto en el que va a estar escuchando el servidor web.
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port }...`);
});





