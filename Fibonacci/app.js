// Serie de Fibonacci
// 1 1 2 3 5 8 13 21 34 55 89 144...

// Definimos las 2 variables iniciales de la secuencia.
let fibo1 = 1;
let fibo2 = 1;

// Mostramos el primer número de la serie.
console.log(fibo1); 

// Hacemos un for para realizar la serie
for(let i = 2; i <= 20; i++) {
    console.log(fibo2);
    fibo2 = fibo1 + fibo2;
    fibo1 = fibo2 - fibo1;
}