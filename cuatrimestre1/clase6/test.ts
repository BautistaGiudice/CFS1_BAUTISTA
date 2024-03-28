import * as readlineSync from 'readline-sync'

let array:number[] = [];
let ceros:number = 0
let positivos:number = 0
let negativos:number = 0

let cantidad:number = parseInt(readlineSync.question("¿Cuantos valores deseas ingresar"))

while (isNaN(cantidad)) {
  cantidad = parseInt(readlineSync.question("Solo se admiten numeros, ¿Cuantos valores deseas ingresar"))
}

for (let i = 0; i < cantidad; i++) {
  let ingreseValorStr: string = readlineSync.question(`Ingrese el valor ${i} del array: `);
  let ingreseValor: number = parseInt(ingreseValorStr);
  
  while (isNaN(ingreseValor)) {
    ingreseValorStr = readlineSync.question(`Solo se admiten numeros. Ingrese el valor ${i} del array: `);
    ingreseValor = parseInt(ingreseValorStr);
  }

  array[i] = ingreseValor;
}

for (let i = 0; i < cantidad; i++) {
  if (array[i] == 0) {
    ceros += 1
  } else if (array[i] > 0) {
    positivos += 1
  } else {
    negativos += 1
  }
}


console.log(array)

console.log(`En el array hay: ${ceros} ceros, ${positivos} positivos y ${negativos}.`)