let arr = [3,2,1]

let valorBuscado = 1

let elementoEncontrado = arr.find(function(elemento) {
  return elemento === valorBuscado
})

let indice = arr.indexOf(valorBuscado)

if (elementoEncontrado !== undefined) {
  console.log("Se ha encontrado el valor")
  console.log(indice)
} else {
  console.log("no se ha encontrado el valor")
}

arr[2] = 5
console.log(arr[2])

