import * as readlineSync from "readline-sync";
let notaSuma:number = 0;

for (let i:number = 1; i < 11; i++) {
  let nota:number = parseInt(readlineSync.question(`Ingresa la nota ${i}: `));
  notaSuma += nota;
  console.log(`Nota ${i} = ${nota}`);
}

console.log(`El promedio final de las notas es ${notaSuma / 10}`);