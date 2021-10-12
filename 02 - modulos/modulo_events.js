// Importamos el módulo de events, declarándolo en una clase EventEmitter.
const EventEmitter = require('events');

// Creamos una instancia de la clase EventEmitter.
const emitter = new EventEmitter(); 

// Registramos el listener con el método 'on' que estará escuchando el evento.
emitter.on('mensajeLogger', (arg) => {
    console.log('Listener llamado', arg);
});

// Registramos el evento y le pasamos parámetros.
emitter.emit('mensajeLogger', {id:1, url:'http://damianarp.com'});
