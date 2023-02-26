const http = require('http');

const servidro = http.createServer((req, res)=>{
    //proceso
    console.log('soliciitud nueva')
    res.end('hola mundo');
});

const puerto = 3000;

servidro.listen(puerto, ()=>{
    console.log(`el servidor esta escuchando en el puerto http://localhost:${puerto}`);
});