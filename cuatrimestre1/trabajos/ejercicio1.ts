let numero1:number = 3
let numero2:number = 7
let numero3:number = 3

let numeroMayor:number = 0

if (numero1 > numero2) {
    numeroMayor = numero1
} else if (numero1 == numero2) {
    console.log("Ingrese el numero1 denuevo")
} else {
    numeroMayor = numero2
}

if (numero3 > numeroMayor) {
    numeroMayor = numero3
} else if (numero3 == numeroMayor) {
    console.log("Ingrese el numero3 igualmente")
}

console.log(numeroMayor)