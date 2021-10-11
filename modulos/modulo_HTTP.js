// Importamos el módulo HTTP
const http = require('http');

// Creamos el servidor u objeto server con una función callback con request y response como parámetros.
const server = http.createServer((req, resp) => {
    // Si el request es igual al home...
     if(req.url === '/') {
         // Se escribe el response
         resp.write('Hola Mundo!');
         // Finaliza el response
         resp.end();
     }

     if(req.url === '/api/productos') {
         resp.write(JSON.stringify(['manzana','pera','mandarina','naranja','banana'])); 
         resp.end();
     }
}); 

// Registramos eventos
// server.on('connection', (port) => {
//     console.log('Nueva conexión...');
// });

// Seteamos el servidor escuchando en el puerto 3000.
server.listen(3000);
console.log('Servidor escuchando en el puerto 3000...');
