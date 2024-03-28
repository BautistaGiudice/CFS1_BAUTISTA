"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numeroStr = parseInt(readlineSync.question("¿Que numero quieres saber si es par/impar?"));
if (numeroStr > 0 && !isNaN(numeroStr)) {
    switch (numeroStr % 2 == 0) {
        case true:
            console.log("El n\u00FAmero ".concat(numeroStr, " es par"));
            break;
        case false:
            console.log("El n\u00FAmero ".concat(numeroStr, " es impar"));
            break;
    }
}
else if (numeroStr === 0) {
    // Se utiliza === para una comparación estricta
    console.log("El n\u00FAmero ".concat(numeroStr, " es cero"));
}
else if (numeroStr < 0) {
    console.log("Solo se admiten valores positivos");
}
else {
    console.log("Solo se admiten numeros.");
}
