"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function potencias() {
    var base = parseInt(readlineSync.question('Ingrese la base: '));
    var exponente = parseInt(readlineSync.question('Ingrese el exponente: '));
    var resultado = 1;
    if (exponente < 0) {
        console.log("Solo se admiten exponentes iguales o mayores a 0");
    }
    if (exponente == 0) {
        console.log('1');
        return false;
    }
    for (var i = 1; i <= exponente; i++) {
        resultado *= base;
    }
    console.log(resultado);
}
potencias();
function potencia2() {
    var base = parseInt(readlineSync.question('Ingrese la base: '));
    var exponente = parseInt(readlineSync.question('Ingrese el exponente: '));
    console.log(Math.pow(base, exponente));
}
potencia2();
