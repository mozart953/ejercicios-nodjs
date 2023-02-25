// const mate = require('./matematica');

// console.log("suma: " + mate.add(1,2) + " resta: "+ mate.substract(1,2)+ " multiplicacion: " + mate.multiply(1,2) + " division:" + mate.divide(1,0));

//console.log(mate.add(1,2));

// const modulo = require ('os') ;

// console.log(modulo.platform);

// const fs = require('fs');

// fs.writeFile('./texto.txt', 'linea 1', function(){
//     if(err){
//         console.log(err);
//     }
//     console.log("archivo creado")
// });

// const http = require('http');

// const handleServer = function(req, res){
//     res.writeHead(200,{'content type':'text/html'});
//     res.write('<h1> Hola mundo desde nodjs </h1>');
//     res.end();

// };


// const server = http.createServer(handleServer);

// server.listen(3000, function(){
//     console.log("servidor en el puerto 4000")
// });

// console.log('hola mundo!')

// console.warn('error')
// console.error('error')

// console.error(new Error (' ocurrio un error'));

//  function mostrarTema(tema){
//     console.log(`Estoy aprendiendo ${tema}`)
//  }

//  setTimeout(mostrarTema,5000, 'hola mundo')

//  console.log('Antes de setInmidiate()');

//  setImmediate(mostrarTema, 'hola mundo xd');

//  console.log('Despues de setInmidiate()');

function temas(tema){
    console.log(`el tema es ${tema}`);

}

setInterval(temas, 1500, 'hola mundo');

