import * as readlineSync from "readline-sync";

let palabraClave: string = readlineSync.question("Ingresa la palabra clave");
let intentos: number = 0;

while (!(palabraClave == "euroka") && intentos < 2){
  console.log("Palabra incorrecta");
  palabraClave = readlineSync.question("Ingresa nuevamente la palabra clave");
  intentos += 1;
}

if (palabraClave == "euroka"){
  console.log("Ingresaste correctamente la palabra clave");
}else{
  console.log("Excediste la cantidad de intentos");
}
