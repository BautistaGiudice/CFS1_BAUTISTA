import * as readlineSync from 'readline-sync';

const correoelEctronico:string = "gbauti2021@gmail.com"
const contrasena:string = "hola"

let ingresarCorreo = readlineSync.question("Ingresar correo:  ")
let ingresarContrasena = readlineSync.question("Ingresa contrasena:  ")
let edad: number = parseInt(readlineSync.question("Ingresar edad"));

if (ingresarCorreo == correoelEctronico && ingresarContrasena == contrasena && edad >= 18) {
    console.log("Ingreso exitoso")
} else {
    console.log("Datos erroneos")
}