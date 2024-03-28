import * as readlineSync from 'readline-sync'

console.log("Comprando botellas...")
let cantidad:number = parseInt(readlineSync.question("¿Cuantas quieres comprar?"))
let mes:string = readlineSync.question("Ingresa el mes de la compra.")
let precioBotella:number = 15
let precio:number = precioBotella * cantidad

if (mes.toLowerCase() == "octubre") {
    let precioFinal = (precio - (precio * 0.15))
    console.log(`Compra realizada: x${cantidad} Botellas = ` + precio)
    console.log("Mes de compra: Octubre")
    console.log("Tienes descuento del 15%!! :)")
    console.log(`Tendrás un descuento de: ${precio * 0.15} Pesos`)
    console.log("Precio final: " + precioFinal)
} else {
    console.log(`Compra realizada: x${cantidad} Botellas = ` + precio)
    console.log("Mes de compra: " + mes)
}
