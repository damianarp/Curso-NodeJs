// Promesas
// Poseen 4 estados:
// fullfilled - La acción relacionada a la promesa se llevó a cabo con éxito.
// rejected - La acción relacionada a la promesa falló.
// pending - Aún no se determinó si la promesa fue fullfilled o rejected.
// settled - Ya se ha determinado si la promesa fue fullfilled o rejected.

// Se puede declarar la promesa como un const.
// const mensaje = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true)
//             resolve('Esto se va a ejecutar después de 3 segundos.')
//         else
//             reject('Hubo un error.');
//     }, 3000);
// });

// Llamamos a la promesa para manejar el resultado o el error.
// mensaje
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// -------- //

// O también se puede declarar la promesa como una función que retorna una promesa.
function mensaje() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true)
                resolve('Esto se va a ejecutar después de 3 segundos.')
            else
                reject('Hubo un error.');
        }, 3000);
    });
}

// Declaramos la función asíncrona llamadaAsync.
async function llamadaAsync(){
    console.log('Llamada...');
    const resultado = await mensaje();
    return resultado;
}

// Llamamos a la función y la manejamos como promesa para mostrar el resultado o el error.
llamadaAsync().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});


