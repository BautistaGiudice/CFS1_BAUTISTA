"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
console.log("Comprando botellas...");
var cantidad = parseInt(readlineSync.question("¿Cuantas quieres comprar?"));
var mes = readlineSync.question("Ingresa el mes de la compra.");
var precioBotella = 15;
var precio = precioBotella * cantidad;
if (mes.toLowerCase() == "octubre") {
    var precioFinal = (precio - (precio * 0.15));
    console.log("Compra realizada: x".concat(cantidad, " Botellas = ") + precio);
    console.log("Mes de compra: Octubre");
    console.log("Tienes descuento del 15%!! :)");
    console.log("Tendr\u00E1s un descuento de: ".concat(precio * 0.15, " Pesos"));
    console.log("Precio final: " + precioFinal);
}
else {
    console.log("Compra realizada: x".concat(cantidad, " Botellas = ") + precio);
    console.log("Mes de compra: " + mes);
}
