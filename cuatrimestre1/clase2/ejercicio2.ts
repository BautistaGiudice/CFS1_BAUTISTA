import * as readlineSync from "readline-sync";

console.log("Ejercicio de carrera");

const posicion1:string = "1";
const posicion2:string = "2";
const posicion3:string = "3";

let preguntaPosicion:string = readlineSync.question("Posicion en la carrera");

if(preguntaPosicion == posicion1){
  console.log("Premio recibido: Medalla de oro");
}else if(preguntaPosicion == posicion2){
  console.log("Premio recibido: Medalla de plata");
}else if(preguntaPosicion == posicion3){
  console.log("Premio recibido: Medalla de bronce");
}else{
  console.log("Premio recibido: Certificado de participacion");
}

console.log("Ejercicio de login");

const nombreUsuario:string = "Bautista";
const contraseñaUsuario:string = "hola123";

let ingresarUsuario:string = readlineSync.question("Nombre de usuario: ");
let ingresarContraseña:string = readlineSync.question("Contraseña: ");

if(ingresarUsuario == nombreUsuario && ingresarContraseña == contraseñaUsuario){
    console.log("Acceso permitido");
}else{
  console.log("Datos erroneos");
};

console.log("Ejercicio de compra");

const descuento:number = 10;

let precio:number = readlineSync.questionInt("¿Cuanto gastó el cliente?");

if (precio >= 1000) {
  let precioNumero:number = precio - (precio * (descuento / 100));
  console.log("Precio final a pagar: " + precioNumero);
} else {
  console.log("Precio final a pagar: " + precio);
}
