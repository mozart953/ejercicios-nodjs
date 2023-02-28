const express = require('express');

const app= express();


const {infoCursos} =  require('./datos/cursos.js');

// console.log(infoCursos);

//routers

const routerMatematicas = require('./rutas/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

const routerProgramacion = require('./rutas/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);




app.get('/',(req, res)=>{
    res.send('servidor express')    

});

//matematicas


//programacion


app.get('/api/cursos', (req,res)=>{
    res.send(JSON.stringify(infoCursos));
});



const PUERTO = process.env.PUERTO || 3000;

app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
});