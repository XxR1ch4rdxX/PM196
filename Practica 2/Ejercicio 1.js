const persona = {
    nombre: "Ricardo Giovanny",
    edad: 21,
    direccion:{
        ciudad: "Qro",
        pais:"Mx"
    }
}

const {nombre, edad, direccion: { ciudad,pais }} = persona
console.log("Me llamo ",nombre,", tengo ",edad," anios y vivo en ",ciudad," ",pais)