function ordenarProducto(producto){
    return new Promise((resolve,reject)=>{
        console.log(`ordenando ${producto}`);
        setTimeout(()=>{
            if(producto==='taza'){
                resolve('ordenando una taza');
            }else{
                reject('Este producto no esta disponible actualmente');
            }

        }, 2000);
    });
}

function procesarPedido(respuesta){
    return new Promise((resolve, reject)=>{
        console.log('procesando respuesta');
        console.log(`La respuesta fue: ${respuesta} `)
        setTimeout(()=>{
            resolve('gracias por tu compra');
        }, 4000);
    })
}

ordenarProducto('taza')
    .then(respuesta=>{
        console.log('respuesta recibida');
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
    .then(respuestaProcesada=>{
        console.log();
    })
    .catch(error=>{
        console.log(error);
    });