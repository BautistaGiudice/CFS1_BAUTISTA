"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var array = [];
var ceros = 0;
var positivos = 0;
var negativos = 0;
var cantidad = parseInt(readlineSync.question("¿Cuantos valores deseas ingresar"));
while (isNaN(cantidad)) {
    cantidad = parseInt(readlineSync.question("Solo se admiten numeros, ¿Cuantos valores deseas ingresar"));
}
for (var i = 0; i < cantidad; i++) {
    var ingreseValorStr = readlineSync.question("Ingrese el valor ".concat(i, " del array: "));
    var ingreseValor = parseInt(ingreseValorStr);
    while (isNaN(ingreseValor)) {
        ingreseValorStr = readlineSync.question("Solo se admiten numeros. Ingrese el valor ".concat(i, " del array: "));
        ingreseValor = parseInt(ingreseValorStr);
    }
    array[i] = ingreseValor;
}
for (var i = 0; i < cantidad; i++) {
    if (array[i] == 0) {
        ceros += 1;
    }
    else if (array[i] > 0) {
        positivos += 1;
    }
    else {
        negativos += 1;
    }
}
console.log(array);
console.log("En el array hay: ".concat(ceros, " ceros, ").concat(positivos, " positivos y ").concat(negativos, "."));
