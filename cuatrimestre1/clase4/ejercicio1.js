"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var notaSuma = 0;
for (var i = 1; i < 11; i++) {
    var nota = parseInt(readlineSync.question("Ingresa la nota ".concat(i, ": ")));
    notaSuma += nota;
    console.log("Nota ".concat(i, " = ").concat(nota));
}
console.log("El promedio final de las notas es ".concat(notaSuma / 10));
