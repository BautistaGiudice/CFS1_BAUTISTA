"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var correoelEctronico = "gbauti2021@gmail.com";
var contrasena = "hola";
var ingresarCorreo = readlineSync.question("Ingresar correo:  ");
var ingresarContrasena = readlineSync.question("Ingresa contrasena:  ");
var edad = parseInt(readlineSync.question("Ingresar edad"));
if (ingresarCorreo == correoelEctronico && ingresarContrasena == contrasena && edad >= 18) {
    console.log("Ingreso exitoso");
}
else {
    console.log("Datos erroneos");
}
