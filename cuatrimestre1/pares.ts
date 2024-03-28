import * as readlineSync from 'readline-sync'

let cantidad = 0

let numeroInicial = parseInt(readlineSync.question("¿A partir de que numero quieres saber cuales seran sus siguientes 100 numeros pares?"))

for (let i = numeroInicial; i < (numeroInicial + 200); i++) {
  if (i % 2 == 0) {
    console.log(i)
    cantidad++
  }
}

console.log(cantidad)
