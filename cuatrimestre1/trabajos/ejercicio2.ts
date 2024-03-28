import * as readlineSync from "readline-sync";

let numeroStr: number = parseInt(
  readlineSync.question("¿Que numero quieres saber si es par/impar?")
);

if (numeroStr > 0 && !isNaN(numeroStr)) {
  switch (numeroStr % 2 == 0) {
    case true:
      console.log(`El número ${numeroStr} es par`);
      break;
    case false:
      console.log(`El número ${numeroStr} es impar`);
      break;
  }
} else if (numeroStr === 0) {
  console.log(`El número ${numeroStr} es cero`);
} else if (numeroStr < 0) {
  console.log("Solo se admiten valores positivos");
} else {
  console.log("Solo se admiten numeros.");
}
