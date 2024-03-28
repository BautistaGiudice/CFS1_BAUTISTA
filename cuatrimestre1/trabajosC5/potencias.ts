import * as readlineSync from "readline-sync";

function potencias() {
  //Función de potencias hecha de forma casera para joderme la noche
  let base = parseInt(readlineSync.question("Ingrese la base: "));
  let exponente = parseInt(readlineSync.question("Ingrese el exponente: "));
  let resultado = 1;

  if (exponente < 0) {
    console.log("Solo se admiten exponentes igual o mayor a 0");
    return false;
  }
  if (exponente == 0) {
    console.log("1");
    return false;
  }
  for (let i = 1; i <= exponente; i++) {
    resultado *= base;
  }
  console.log(resultado);
}

potencias();

function potencia2() {
  let base = parseInt(readlineSync.question("Ingrese la base: "));
  let exponente = parseInt(readlineSync.question("Ingrese el exponente: "));

  if (exponente < 0) {
    console.log("Solo se admiten exponentes mayor o igual que 0");
  }
  console.log(base ** exponente);
}

potencia2();
