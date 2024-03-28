function multiplos(a, b):void { //a es el dividendo, mientras b es el divisor
  if (a % b == 0) {
    console.log(`${a} es multiplo de ${b}`);
  } else {
    console.log(`${a} no es multiplo de ${b}`);
  }
}

//multiplos(36, 3);

function divisores(a): void { //a es el dividendo, y la función se encargará de buscar cuales son sus divisores y cuantos son.
  let cantidad = 0;
  for (let i = 0; i <= a; i++) {
    if (a % i == 0) {
      cantidad++;
      multiplos(a, i)
    }
  }
  console.log(`${a} tiene ${cantidad} multiplos.`);
}

divisores(16);
