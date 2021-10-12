// Importamos Express dentro de una const.
const express = require('express');

// Creamos una instancia de express (nuestra app).
const app = express();

// Definimos un arreglo de usuarios, con id y nombre.
const usuarios = [
    {id:1, nombre:'Damián'},
    {id:2, nombre:'Pedro'},
    {id:3, nombre:'María'},
    {id:4, nombre:'Carolina'},
    {id:5, nombre:'Fabio'}
]; 

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
    // Definimos una variable usuario, la cual consta de una función find que busca el id de cada usuario del arreglo y lo compara con el id del request que enviamos como parámetro al servidor.
    // Como el valor que devuelve el get es un string, debemos parsearlo a Integer.
    let usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    // Si no encuentra el usuario, status 404.
    if(!usuario) res.status(404).send('El usuario no fue encontrado');
    // Si lo encuentra, que el servidor me envíe el usuario como respuesta.
    res.send(usuario);
});

// Creamos una variable de entorno a través del método process, para definir el puerto.
const port =  process.env.PORT || 3000;   

// Indicamos el puerto en el que va a estar escuchando el servidor web.
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port }...`);
});





