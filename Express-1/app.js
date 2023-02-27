const express = require('express');

const app= express();


const {infoCursos} =  require('./cursos.js');

// console.log(infoCursos);

app.get('/',(req, res)=>{
    res.send('servidor express')    

});

app.get('/api/cursos/programacion', (req,res)=>{
    res.send(JSON.stringify(infoCursos.programacion));
});

app.get('/api/cursos/matematicas',(req, res)=>{
    res.send(JSON.stringify(infoCursos.matematicas));
});


app.get('/api/cursos', (req,res)=>{
    res.send(JSON.stringify(infoCursos));
});



const PUERTO = process.env.PUERTO || 3000;

app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
});