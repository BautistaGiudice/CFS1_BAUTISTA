import * as readlineSync from 'readline-sync'

let ingreseNumero:number = parseInt(readlineSync.question("Ingrese un numero"))

let valor:number = 0
let check:boolean = ((ingreseNumero > 0) || (ingreseNumero < 0))

while (check) {
    if (ingreseNumero > valor && check) {
        valor = ingreseNumero;
    } else if (ingreseNumero === 0) {
        break;
    }
    console.log(`Numero: ${ingreseNumero}`)
    ingreseNumero = parseInt(readlineSync.question("Ingrese un numero: "));
    check = (ingreseNumero !== 0)
}

console.log(`El maximo es ${valor}`)