"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var posicion = parseInt(readlineSync.question("Ingresa posicion de la carrera"));
switch (posicion) {
    case 1:
        console.log("Premio recibido: Medalla de oro");
        break;
    case 2:
        console.log("Premio recibido: Medalla de plata");
        break;
    case 3:
        console.log("Premio recibido: Medalla de bronce");
        break;
    default:
        console.log("Premio recibido: Certificado de participación");
}
