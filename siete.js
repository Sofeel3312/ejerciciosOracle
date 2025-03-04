//Día 1

//Igualdad entre valores que retornan true
console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0);
console.log( ' ' == 0 );

//Reescribir código
let numeroUno = 1
let stringUn = '1'
let numeroTreinta =30
let stringTreinta = '30'
let numeroDiez = 10
let stringDiez = '10'

if (numeroUn == stringUn) {
    console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
} else {
    console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}

if (numeroTreinta == stringTreinta) {
    consolelog('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
} else {
    console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}

if (numeroDiez == stringDiez) {
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
} else {
    console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}

//Día 2

//Preguntar al usuario para el llenado de variables
//Capturar y almacenar valores en variables
let nombre = prompt('¿Cuál es tu nombre?:');
let edad = prompt('¿Cuál es tu edad?:');
let lenguaje = prompt('¿Qué lenguaje de programación estás estudiando?:');

//Utilizar las variables con un prompt y un console.log
let mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;
alert (mensaje);

//Desafío opcional
let respuesta1 = prompt (`¿Te gusta estudiar ${lenguaje}?`);




