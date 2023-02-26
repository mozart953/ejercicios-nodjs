const http = require('http');
const cursos = require('./cursos');



const servidor = http.createServer((req,res)=>{
    const{method} = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGET(req, res);
        
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            console.log(`El metodo usado no puede ser manejado por el servidor: ${method}`)


    }
});

function manejarSolicitudPOST(rq, res){
    const path = req.url;
    if(){

    }
}


function manejarSolicitudGET(req, res){
    const path = req.url ;

    if(path === '/'){
        res.statusCode = 200;
        res.end ('Bienvenidos')
    }else if(path==='/cursos'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos));
    }else if (path ==='/cursos/programacion'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.programacion));
    }

    res.statusCode = 404;
    res.end('El recurso solicitado no existe');
}


const PUERTO = 3000;



servidor.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto  ${PUERTO}`)
});