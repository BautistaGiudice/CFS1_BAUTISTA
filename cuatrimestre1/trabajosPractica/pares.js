"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var cantidad = 0;
var numeroInicial = parseInt(readlineSync.question("¿A partir de que numero quieres saber cuales seran sus siguientes 100 numeros pares?"));
for (var i = numeroInicial; i < (numeroInicial + 200); i++) {
    if (i % 2 == 0) {
        console.log(i);
        cantidad++;
    }
}
console.log(cantidad);
