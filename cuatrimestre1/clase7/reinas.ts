let tablero:number[][] = [
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0]]

for (let i = 0; i < tablero.length; i++) {
  for (let j = 0; j < tablero[i].length; j++)
  if (tablero[i][j] == 0) {
    tablero[i][j] = 1
  }
}

console.log(tablero)