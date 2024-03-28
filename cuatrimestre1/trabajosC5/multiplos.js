function multiplos(a, b) {
    if (a % b == 0) {
        console.log("".concat(a, " es multiplo de ").concat(b));
    }
    else {
        console.log("".concat(a, " no es multiplo de ").concat(b));
    }
}
//multiplos(36, 3);
function divisores(a) {
    var cantidad = 0;
    for (var i = 0; i <= a; i++) {
        if (a % i == 0) {
            cantidad++;
            multiplos(a, i);
        }
    }
    console.log("".concat(a, " tiene ").concat(cantidad, " multiplos."));
}
divisores(16);
