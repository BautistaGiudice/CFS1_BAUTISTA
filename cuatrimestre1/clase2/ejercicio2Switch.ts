import * as readlineSync from "readline-sync";

let posicion: number = parseInt(
  readlineSync.question("Ingresa posicion de la carrera")
);

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
