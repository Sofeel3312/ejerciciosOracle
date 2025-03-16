//Ejercicios
//Alert y prompt
/*let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert(mensajeDeBienvenida);
*/

//Cambiando el valor de las variables
/*alert('Bienvenidos al juego del número secreto');
let eleccion = prompt('Elige un número entre 1 y 10')
//Se puede utilizar un Math.random para cambiar el número secreto
let numeroSecreto = 4;
if (eleccion == numeroSecreto) {
    alert('Adivinaste');
}
*/

//¿Dónde está el error?
/*let contraseniaDelSistema = "contraseniaPrueba!";
let contrasenia = prompt("Ingrese la contraseña del sistema:");
if (contrasenia == contraseniaDelSistema){
    alert("Acceso al sistema garantizado");
}
*/

//Edad mínima para conducir
/*let edad = prompt("Ingrese su edad:");

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}
    */

//Cambiando el mensaje alert
/*alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');
let numeroSecreto = 4;
console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    alert('El número secreto era ' + numeroSecreto + ', pero elegiste ' + intento);
}
*/

//Trabajando con condicionales
/*const numero = prompt("Introduce un número:");
if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}
*/  

//Haga lo que hicimos en aula: console.log
/*alert('Bienvenido al juego del número secreto');
// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);
let numeroSecreto = 4;
// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);
if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}
*/

//Contador 1
/*let contador = 1;
while (contador < 4) {
  console.log('Ejecutando la iteración ' + contador);
  contador = contador + 1;
}
*/

//Bucle Infinito
/*let cantidadNumeros = prompt('Ingrese la cantidad de números para el cálculo del promedio:');
let suma = 0;
let contador = cantidadNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Ingrese el numero:'));
    suma += numero;
    contador--;
}

let promedio = suma / cantidadNumeros;

console.log(promedio);
*/

//Solo 5 intentos
/*let numeroSecreto = Math.floor(Math.random() * 10);
let intentos = 0;
while (intentos < 5) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  intentos++;
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
    break;
  }
}
  */

//Refactorizando
//let palabraPersona = cantidadPersonas == 1 ? "persona" : "personas";

//Números aleatorios
//let numeroAleatorio1a3 = parseInt(Math.random() * 3) + 1;

//Manipulando contenido HTML con JavaScript
/*let titulo = document.querySelector('h1')
titulo.innerHTML = 'Bienvenido al mundo dev'
*/

//Función onclick
/*<button onclick="alertFunction()">Haz clic aquí</button> para html*/
/*
function alertFunction() {
  alert("¡Hola, has hecho clic en el botón!");
}
*/

//Trabajando con DOM
let h2 = document.querySelector('h2');
h2.innerHTML = 'Has agregado una nueva canción!';