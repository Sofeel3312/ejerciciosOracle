    //Desafíos 1
//alert('Bienvenida y bienvenido a nuestro sitio web');
//let nombre = 'Lua';
//let edad = 25;
//let numeroDeVentas = 50;
//let saldoDisponible = 1000;
//alert("¡Error! Completa todos los campos");
//let mensajeDeError = '¡Error! Completa todos los campos'; alert(mensajeDeError);
//let nombre = prompt('Digite su nombre');
//let edad = prompt('Digite su edad');
//if(edad >= 18) {alert('¡Puedes obtener tu licencia de conducir!');}

    //Desafíos 2
//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
/*let diasSemana = prompt('¿Qué día de la semana es?:');
if(diasSemana === 'sábado' || diasSemana === 'domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}
*/

//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
/*/let numero = prompt('Digite un número:');
if(numero >0) {
    alert('El número es positivo');
} else if (numero <0) {
    alert('El número es negativo');
} else {    
    alert('El número es cero');
}
*/

//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
/*let puntuacion = prompt('Digite un número:');
if(puntuacion >= 100) {
    alert('¡felicidades has ganado!');
} else {
    alert('Intentalo nuevamente para ganar');
}
    */
/*let puntuacion = 105;
if (puntuacion >= 100) {
    console.log('¡Enhorabuena, has ganado!');
} else {
    console.log('Inténtalo de nuevo para ganar.');
}
    */

//Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
/*let saldo = 100;
alert(`El saldo de su cuenta es: ${saldo}`);
*/

//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
/*let nombre = prompt('Digite su nombre:');
alert(`¡Bienvenida ${nombre}!`);
*/

    //Desafíos 3
//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
/*let contador = 1;
while (contador <=10) {
    console.log(contador);
    contador++;
}
    */

//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
/*let contador = 10;
while (contador >=0) {
    console.log(contador);
    contador--;
}
    */

//Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
/*let numeroSolicitado = prompt('Digite un número:');
while(numeroSolicitado >=0) {
    console.log(numeroSolicitado);
    numeroSolicitado--;
}
    */

//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
/*let numeroSolicitado = prompt('Digite un número:');
let contador = 0;
while(contador <= numeroSolicitado) {
    console.log(contador);
    contador++;
}
    */

    //Desafíos 4
//Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
//console.log('¡Bienvenido!');

//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
/*let nombre = 'Fernanda';
console.log(`¡Hola, ${nombre}!`);
*/

//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
/*let nombre = 'Fernanda';
alert(`¡Hola, ${nombre}!`);
*/

//Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
/*let lenguaje = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(lenguaje);
*/

//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
/*let valor1 = 8;
let valor2 = 2;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);
*/

//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
/*let valor1 = 12;
let valor2 = 2;
let resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}`);
*/

//Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
/*let edad = prompt('Digite su edad:');
if(edad >=18) {
    alert('Es mayor de edad');
} else {
    alert('Es menor de edad');
}
*/

//Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
/*let numero = prompt('Digite un número');
if(numero >0) {
    alert('El número es positivo');
} else if (numero <0) {
    alert('El número es negativo');
} else {
    alert('El número es cero');
}
*/

//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
/*let contador = 1;
while(contador <= 10);
    console.log(contador);
    contador++;
*/

//Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
/*let nota = 3;
if(nota >= 7){
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}
    */

//Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
/*numeroAleatorio = Math.random();
console.log(numeroAleatorio);
*/

//Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
/*numeroAleatorio = Math.floor((Math.random()*10)+1);
console.log(numeroAleatorio);
*/

//Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
/*numeroAleatorio = Math.floor((Math.random()*1000)+1);
console.log(numeroAleatorio);
*/

    //Desafíos 5

