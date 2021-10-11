const years = [2000, 2005, 2008, 2012];

// Función en ES5
var edad = years.map(function(el){
    return 2021 - el;
});
console.log(edad);

// Función flecha en ES6
let edad2 = years.map((el) => 2021 - el);
console.log(edad2);