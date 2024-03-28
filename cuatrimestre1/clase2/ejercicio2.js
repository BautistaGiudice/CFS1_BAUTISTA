"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
console.log("Ejercicio de carrera");
var posicion1 = '1';
var posicion2 = '2';
var posicion3 = '3';
var preguntaPosicion = readlineSync.question("Posicion en la carrera");
if (preguntaPosicion == posicion1) {
    console.log("Premio recibido: Medalla de oro");
}
else if (preguntaPosicion == posicion2) {
    console.log("Premio recibido: Medalla de plata");
}
else if (preguntaPosicion == posicion3) {
    console.log("Premio recibido: Medalla de bronce");
}
else {
    console.log("Premio recibido: Certificado de participacion");
}
console.log("Ejercicio de login");
var nombreUsuario = 'Bautista';
var contraseñaUsuario = 'hola123';
var ingresarUsuario = readlineSync.question("Nombre de usuario: ");
var ingresarContraseña = readlineSync.question("Contraseña: ");
if (ingresarUsuario == nombreUsuario && ingresarContraseña == contraseñaUsuario) {
    console.log("Acceso permitido");
}
else {
    console.log("Datos erroneos");
}
console.log("Ejercicio de compra");
var descuento = 10;
var precio = readlineSync.question("¿Cuanto gastó el cliente?");
if (precio >= 1000) {
    var precioNumero = (precio - (precio * (descuento / 100)));
    console.log("Precio final a pagar: " + precioNumero);
}
else {
    console.log("Precio final a pagar: " + precio);
}
