const http = require('http');

const servidor = http.createServer((req, res)=>{
    // console.log('===> req(solicitud)');
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    console.log('===> res(solicitud)');
    console.log(res.statusCode);

    res.statusCode=404;
    console.log(res.statusCode);
});

const puerto = 3000;

servidor.listen(puerto, ()=>{
    console.log(`El servidor esta escruchando en el puerto ${puerto}`)
});
