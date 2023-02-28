const express = require('express');

const {programacion} = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router(); 



routerProgramacion.get('/',(req,res)=>{
    res.send(JSON.stringify(programacion));
});

routerProgramacion.get('/:lenguaje',(req, res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);
    
    if(resultados.length ===0){
      return  res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
    
    res.send(JSON.stringify(resultados));
});


routerProgramacion.get('/:lenguaje/:nivel',(req, res)=>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados1 = programacion.filter(curso=>curso.lenguaje ===lenguaje && curso.nivel === nivel);
    //const resultados2 = infoCursos.programacion.filter(curso =>curso.nivel= nivel);

    if(resultados1.length ===0 ){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} y nivel ${nivel} `)
    }

    if(req.query.ordenar === 'vistas'){
       return res.send(JSON.stringify(resultados1.sort((a,b)=> b.vistas - a.vistas)))
    }
    res.send(JSON.stringify(resultados1));
    

  

});

module.exports = routerProgramacion;