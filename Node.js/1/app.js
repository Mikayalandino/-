let dolarOficial = 126.03;
let impuestoPais = 0.30;
let afip  = 0.35

let dolarHoy = dolarOficial + (dolarOficial * impuestoPais) + (dolarOficial * afip)
console.log(dolarHoy)

let compus = [
    {
        modelo: "HP 14 x100",
        precio: 399,
    },
    {
        modelo: "Asus 15 Vivo",
        precio: 449
    }

]

for (let compu of compus) {
    console.log(`El costo del modelo ${compu.modelo} es de $${(compu.precio * dolarHoy).toFixed(2)}`)
}