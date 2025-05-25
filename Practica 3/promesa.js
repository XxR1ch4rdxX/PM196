
const verificarUsuario=(usr) =>{
    return new Promise((resolve, reject)=>{
        if (usr === "admin"){
            resolve("Acceso concedido para " + usr);
        }
        else{
            reject("Acceso denegado para " + usr);
        }
    })
}

verificarUsuario("admin")
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });

verificarUsuario("Richy")
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });