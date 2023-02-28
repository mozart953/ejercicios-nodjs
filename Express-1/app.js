const express = require('express');

const app= express();


const {infoCursos} =  require('./cursos.js');

// console.log(infoCursos);

//routers

const routerProgramacion = express.Router();
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = express.Router();
app.use('/api/cursos/matematicas', routerMatematicas);


app.get('/',(req, res)=>{
    res.send('servidor express')    

});

//matematicas

routerMatematicas.get('/', (req,res)=>{
    res.send(JSON.stringify(infoCursos.matematicas));
});

routerMatematicas.get('/:tema',(req, res)=>{
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);
    
    if(resultados.length ===0){
      return  res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    
    res.send(JSON.stringify(resultados));
});


//programacion

routerProgramacion.get('/',(req,res)=>{
    res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.get('/:lenguaje',(req, res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);
    
    if(resultados.length ===0){
      return  res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
    
    res.send(JSON.stringify(resultados));
});


routerProgramacion.get('/:lenguaje/:nivel',(req, res)=>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados1 = infoCursos.programacion.filter(curso=>curso.lenguaje ===lenguaje && curso.nivel === nivel);
    //const resultados2 = infoCursos.programacion.filter(curso =>curso.nivel= nivel);

    if(resultados1.length ===0 ){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} y nivel ${nivel} `)
    }

    if(req.query.ordenar === 'vistas'){
       return res.send(JSON.stringify(resultados1.sort((a,b)=> b.vistas - a.vistas)))
    }
    res.send(JSON.stringify(resultados1));
    

  

});


app.get('/api/cursos', (req,res)=>{
    res.send(JSON.stringify(infoCursos));
});



const PUERTO = process.env.PUERTO || 3000;

app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
});