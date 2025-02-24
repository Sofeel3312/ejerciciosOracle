//Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos =1;
//let palabraVeces = 'vez';
let maximosIntentos = 2;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
      //Acertamos, fue verdadera la condición
      alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
      if (numeroUsuario > numeroSecreto) {
        alert('El número secreto es menor');
      } else {
        alert('El número secreto es mayor');
      }
      //Incrementamos el contador cuando no acierta
      //Intentos = intentos +1;
      //Intentos += 1;
      intentos++;

      //palabraVeces = 'veces';
    }
}
