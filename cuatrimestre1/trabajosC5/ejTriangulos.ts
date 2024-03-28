import * as readlineSync from 'readline-sync'

function calcularTriangulo(b:number, h:number):number {
    return ((b * h) / 2)
}

console.log(calcularTriangulo(3, 6))