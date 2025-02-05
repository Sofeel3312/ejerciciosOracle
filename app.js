//Se utiliza querySelector para traer un valor de otro archivo
//Selectores
//Se bajan las dos primeras lìneas a function asignarTextoElemento ()
let numeroSecreto = generarNumeroSecreto();
let intentos =1;
//console.log(numeroSecreto);
function asignarTextoElemento (elemento,texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}
//let titulo = document.querySelector('h1');
//titulo.innerHTML ='Juego del nùmero secreto';
//let parrafo = document.querySelector ('p');
//parrafo.innerHTML = 'Indica un nùmero del 1 al 10';
//function intentoDelUsuario() 
function verificarIntento() {
  //alert(ˋClick desde el botòn');
  let numeroDeUsuario = (parseInt(document.getElementById("ValorUsuario").value);
  //console.log(typeof(numeroDeUsuario));
  //console.log(numeroSecreto);
  //console.log(typeof(numeroSecreto));
  //console.log(numeroDeUsuario);
  //console.lo(numeroDeUsuario === numeroSecreto);
  if(numeroDeUsuario === numeroSecreto){
    //asignarTextoElemento ('p','Acertaste el nùmero');
    asignarTextoElemento ('p',ˋAcertaste el nùmero en ${intentos} ${intentos ===1} ? 'vez' : 'veces')ˋ); 
 document.getElementById ('reiniciar').removeAttribute('disabled');
  } else {
    //El usuario no acertò
    if(numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p','El nùmero secreto es menor');
    } else {
      asignarTextoElemento('p','El nùmero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }
    return;
}
function limpiarCaja() {
  //let valorCaja = document.querySelector ('#valorUsuario')
  document.querySelector ('#valorUsuario').value= '';
  //valorCaja.value = '';
function generaNumeroSecreto() {
  return Math.floor(Math.random()*10)1;
}
//asignarTextoElemento('h1','Juego del nùmero secreto');
//asignarTextoElemento('p','Indica un nùmero del 1 al 10');
  function condicionesIniciales();{
    asignarTextoElemento('h1','Juego del nùmero secreto');
    asignarTextoElemento('p','Indica un nùmero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
  }
  function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de nùmeros
    //Generar el nùmero aleatorio
    //Inicializar el nùmero de intentos
    condicionesIniciales();
    //Deshabilitar el botòn de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
  }
  condicionesIniciales();
  

