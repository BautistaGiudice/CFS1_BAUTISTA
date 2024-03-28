import * as readlineSync from 'readline-sync'

let preguntarSueldo:number = parseInt(readlineSync.question("Ingresa tu sueldo para saber el aumento."))
let sueldoNuevo:number = 0

if (preguntarSueldo < 1) {
    console.log("Seguro hay un error con el valor ingresado, vuelve a intentrlo")
}
else if (preguntarSueldo <= 15000) {
    console.log(`Tendrás un aumento de un 20%, proximo monto a cobrar: ${(preguntarSueldo + (preguntarSueldo * 0.2))}`)
    sueldoNuevo = (preguntarSueldo + (preguntarSueldo * 0.2))
} else if (preguntarSueldo > 15000 && preguntarSueldo <= 20000) {
    console.log(`Tendrás un aumento de un 10%, proximo monto a cobrar: ${(preguntarSueldo + (preguntarSueldo * 0.1))}`)
    sueldoNuevo = (preguntarSueldo + (preguntarSueldo * 0.1))
} else if (preguntarSueldo > 20000 && preguntarSueldo <= 25000) {
    console.log(`Tendrás un aumento de un 5%, proximo monto a cobrar: ${(preguntarSueldo + (preguntarSueldo * 0.05))}`)
    sueldoNuevo = (preguntarSueldo + (preguntarSueldo * 0.05))
} else if (preguntarSueldo > 25000) {
    console.log("No hay aumento para este sueldo.")
}
