const estatusPedido=()=>{
    const estatus = Math.random() < 0.8;
    // console.log();
    // return estatus;
}


for(let i = 0; i<10; i++){
    console.log(estatusPedido());
} 

const miPedidoDePizza = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(estatusPedido()){
            resolve('Pedido exitoso xd');
        }else{
            reject('algo fallo')
        }
    },3000);
});

// const manejarPedido = (mensajeDeConfirmacion)=>{
//     console.log(mensajeDeConfirmacion);
// }

// const rechazarPedido = (mensajeDeError)=>{
//     console.log(mensajeDeError);
// };

// miPedidoDePizza.then(manejarPedido, rechazarPedido);

miPedidoDePizza 
    .then((mensajeDeConfirmacion)=>{
        console.log(mensajeDeConfirmacion);

    })
    .catch( (mensajeDeError)=>{
        console.log(mensajeDeError);
    });


const manejarPedido = (mensajeDeConfirmacion)=>{
    console.log(mensajeDeError);
}

const manejarRechazo = (mensajeDeError)=>{
    console.log(mensajeDeError);
};

miPedidoDePizza.then(manejarPedido).catch(manejarRechazo);