// Importamos Express y Joi.
const express = require('express');
const Joi = require('joi');

// Creamos una instancia de express (nuestra app).
const app = express();

// Para enviar por POST al servidor (en formato JSON) debemos trabajar con Middlewares para que parseen este tipo de datos cuando el servidor los reciba.
// Cargamos el middleware express.json() en la app con el método use(), el cual permite recibir como requerimiento formato del tipo JSON.
app.use(express.json());

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

/////// PETICIONES GET ///////
// Definimos las rutas.

// Solicitamos información al servidor.
app.get('/',(req, res) => {
    res.send('Hola Mundo desde Express');
}); 

// Solicitamos información al servidor.
app.get('/api/usuarios',(req, res) => {
    res.send(usuarios);
}); 

// Solicitamos información al servidor.
app.get('/api/usuarios/:id',(req, res) => {
    // Definimos una variable usuario, la cual consta de una función find() que busca el id de cada usuario del arreglo y lo compara con el id del request que solicitamos como parámetro al servidor.
    // Como el valor que devuelve el get es un string, debemos parsearlo a Integer.
    let usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    // Si no encuentra el usuario, status 404.
    if(!usuario) res.status(404).send('El usuario no fue encontrado');
    // Si lo encuentra, que el servidor me envíe el usuario como respuesta.
    res.send(usuario);
});

/////// PETICIONES POST ///////
// Enviamos información al servidor.
app.post('/api/usuarios',(req, res) => {
    // Validación de la petición con librería Joi.
    // Definimos el schema de validación.
    const schema = Joi.object({
        nombre: Joi.string()
                    .min(3)
                    .required()
    });
    // Utilizamos el schema en una variable result.
    //const result = schema.validate({nombre: req.body.nombre});

    // Corroboramos con un console.log() lo que se arroja en consola al enviar un usuario que no pasa la validación por POSTMAN.
    //console.log(result);

    // En consola se muestra esto:

    // {
    //     value: { nombre: 'Gi' },
    //     error: [Error [ValidationError]: "nombre" length must be at least 3 characters long] {
    //       _original: { nombre: 'Gi' },
    //       details: [ [Object] ]
    //     }
    // }

    // Desestructuramos la variable result.
    const {error, value} = schema.validate({nombre: req.body.nombre});

    // Validamos. Si no existe error:
    if(!error) {
        // Creamos el nuevo usuario.
        const usuario = {
            id: usuarios.length + 1,
            nombre: value.nombre
        };
        // Introducimos el nuevo usuario en el arreglo.
        usuarios.push(usuario);
        // Enviamos el usuario.
        res.send(usuario);
    } else {
        const mensaje = error.details[0].message;
        res.status(400).send(mensaje);
    }

    // Validación sencilla de la petición.
    // Si no existe el dato que estoy requiriendo dentro del body que se llama nombre o es menor a 2 caracteres, entonces que responda con un status 400 Bad Request.
    // if(!req.body.nombre || req.body.nombre.length <= 2) {
    //     res.status(400).send('Debe ingresar un nombre que tenga como mínimo 3 letras.');
    //     // Colocamos un return para que no continue la petición cuando detecte este comportamiento y así no se agregue un usuario vacío.
    //     return;
    // }
    // // Creamos el nuevo usuario.
    // const usuario = {
    //     id: usuarios.length + 1,
    //     nombre: req.body.nombre
    // };
    // // Introducimos el nuevo usuario en el arreglo.
    // usuarios.push(usuario);
    // // Enviamos el usuario.
    // res.send(usuario);
});

/////// PETICIONES PUT ///////
app.put('/api/usuarios/:id',(req, res) => {
    // Comprobar si existe el objeto usuario a modificar.
    // Para ello, definimos un usuario, hacemos la busqueda en el arreglo de usuarios, parseamos el id que estamos recibiendo como parámetro, comparamos el id del request y del usuario.
    let usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    // Si no encuentra el usuario, status 404.
    if(!usuario) res.status(404).send('El usuario no fue encontrado');

    // Validamos si el dato que está viniendo es un dato correcto (nombre).
    const schema = Joi.object({
        nombre: Joi.string()
                    .min(3)
                    .required()
    });
    // Desestructuramos la variable result.
    const {error, value} = schema.validate({nombre: req.body.nombre});

    // Validamos si existe un error.
    if(error) {
        const mensaje = error.details[0].message;
        res.status(400).send(mensaje);
        return;
    }

    // Validamos el usuario modificado y lo enviamos.
    usuario.nombre = value.nombre;
    res.send(usuario);
});

// Creamos una variable de entorno a través del método process, para definir el puerto.
const port =  process.env.PORT || 3000;   

// Indicamos el puerto en el que va a estar escuchando el servidor web.
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port }...`);
});





