let test = [[[3,2,1], [3,2,1], [3,2,1], [3,2,1]]]
console.log(test)

for (let i = 0; i < test.length; i++) {
  for (let j = 0; j < test[i].length; j++) {
    console.log(".")
    for (let k = 0; k < test[i][j].length; k++) {
      console.log(test[i][j][k]);
    }
  }
}