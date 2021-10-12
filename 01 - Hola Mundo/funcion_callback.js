// Funciones Callback (funciones que reciben otra función como parámetro)
function mensaje(callback) {
    console.log('Mensaje antes de la llamada al callback.');
    callback();
}
function saludo() {
    console.log('Mensaje después de la llamada al callback.');
}
mensaje(saludo);

// ----------- //
function sumar(num1, num2, callback) {
    let resultado = num1 + num2;
    callback(resultado);
}
function resultado(res) {
    console.log(res);
}
sumar(5,8,resultado);

// ----------- // setTimeout es una función callback por defecto.
setTimeout(() => console.log('Esto se va a ejecutar después de 3 segundos.'), 3000);