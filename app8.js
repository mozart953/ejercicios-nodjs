const http = require('http');
const {infoCursos} = require('./cursos');



const servidor = http.createServer((req,res)=>{
   // const{method} = req;

   const method = req.method;


    switch(method){
        case 'GET':
            return manejarSolicitudGET(req, res);
        
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            res.statusCode = 501;
            res.end(`El metodo usado no puede ser manejado por el servidor: ${method}`)


    }
});

function manejarSolicitudPOST(req, res){
    const path = req.url;

    if(path === '/cursos/programacion'){
       res.statusCode = 200;
       
        return res.end('El servidor recibio una solicitud POST para /curosos/programacion')

    }
}


function manejarSolicitudGET(req, res){
    const path = req.url ;

    console.log(res.statusCode);

    if(path === '/'){
        //res.statusCode = 200;
        res.writeHead(200,{'Content-Type':'application/json'});
       return res.end ('Bienvenidos')
    }else if(path==='/cursos'){
        //res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos));
    }else if (path ==='/cursos/programacion'){
        //res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos.programacion));
    }

    res.statusCode = 404;
    res.end('El recurso solicitado no existe');
}


const PUERTO = 3000;



servidor.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto  ${PUERTO}`)
});