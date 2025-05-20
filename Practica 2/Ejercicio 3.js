const personas = [
    {nombre:"Ana",edad:22},
    {nombre:"Luis",edad:35},
    {nombre:"Maria",edad:28},
]

let luis = personas.find(personas => personas.nombre == "Luis")

const SumEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);


personas.forEach(persona => {
    console.log(persona.nombre," Tiene ",persona.edad," anios")
})

console.log(luis)
console.log("La suma de las edades es: ",SumEdades)
