// Importamos el módulo OS
const os = require('os');

// Obtenemos los valores del OS.
var arquitecturaSO = os.arch();
var extremidadDelSO = os.endianness();
var memoriaLibre = os.freemem();
var memoriaTotal = os.totalmem();
var homeDir = os.homedir();
var hostName = os.hostname();
var loadAVG = os.loadavg();
var platform = os.platform();
var releaseSO = os.release();
var tmpdir = os.tmpdir();
var type = os.type();
var uptime = os.uptime();
var version = os.version();

// Mostramos el resultado en consola.
console.log('Arquitectura del SO: ' + arquitecturaSO);
console.log('Extremidad del SO: ' + extremidadDelSO);
console.log('Memoria libre: ' + (memoriaLibre/1e+9) + ' Gb');
console.log('Memoria total: ' + (memoriaTotal/1e+9) + ' Gb');
console.log('Dirección del Home del Usuario Actual: ' + homeDir);
console.log('Nombre del Usuario Actual: ' + hostName);
console.log('Promedio de carga: ' + loadAVG);
console.log('Plataforma del SO: ' + platform);
console.log('Kernel del SO: ' + releaseSO);
console.log('Dirección de archivos temporales: ' + tmpdir);
console.log('Nombre del SO: ' + type);
console.log('Tiempo de actividad del SO: ' + uptime + ' segundos');
console.log('Versión del Kernel: ' + version);