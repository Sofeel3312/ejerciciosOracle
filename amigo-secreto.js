function agregarAmigos () {
  //Obtenemos el valor del campo 
  let agregarAmigosTexto = document.getElementById("Amigo").value;

  //Validamos que el valor no sea vacío
  if(agregarAmigosTexto === "") {
    alert('Por favor, ingrese una tarea');
    return;
  }

  //Crear elemento en la lista
  let amigosLista = document.creatElement("li");

  amigosLista.textContent = agregarAmigosTexto + " ";

  
  
