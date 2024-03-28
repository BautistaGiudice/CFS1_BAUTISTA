"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var ingreseNumero = parseInt(readlineSync.question("Ingrese un numero"));
var valor = 1;
var check = ((ingreseNumero > 0) || (ingreseNumero < 0));
while (check) {
    if (ingreseNumero > valor && check) {
        valor = ingreseNumero;
    }
    else if (ingreseNumero === 0) {
        break;
    }
    console.log("Numero: ".concat(ingreseNumero));
    ingreseNumero = parseInt(readlineSync.question("Ingrese un numero: "));
    check = (ingreseNumero !== 0);
}
console.log("El maximo es ".concat(valor));
