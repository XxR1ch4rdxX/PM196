function simularAPI(){
    return new Promise(resolve  => {
        setTimeout(() => {
            resolve("Usuario Juan inicio sesion como invitado");
        }, 5000);
    });
}

const msg =() => {
    console.log("Esperando respuesta api...");
}

async function ObtenerDatos(){
   await simularAPI()
   .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });
}

ObtenerDatos();
msg();