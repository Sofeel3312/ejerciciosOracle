function cerrarPanel() {
    document.getElementById("panel").style.display = "none";
}

function actualizarDatos() {
    alert("Datos actualizados correctamente");
}

function cerrarModoAdministrador() {
    window.location.href = "PAT.html"; // Regresa al usuario a la pantalla principal
}

function guardarConfiguracion() {
    sessionStorage.setItem("areaSeleccionada", document.getElementById("areaAdmin").value);
    alert("Configuración guardada correctamente.");
}

document.addEventListener("DOMContentLoaded", function() {
    const usuarioActivo = sessionStorage.getItem("usuarioActivo", "admin");

    if (!usuarioActivo) {
        alert("Acceso restringido. Debes iniciar sesión como administrador.");
        window.location.href = "PAT-accesoUsuario.html";
    } else {
        document.getElementById("panel").style.display = "block"
    }
    
});










/*
const password = "#e6f2ff";
const loginBtn = document.getElementById("loginBtn");
const adminPassword = document.getElementById("adminPassword");
const adminSection = document.getElementById("adminSection");
const addIndicatorBtn = document.getElementById("addIndicatorBtn");
const adminArea = document.getElementById("adminArea");
const adminIndicator = document.getElementById("adminIndicator");
const adminMessage = document.getElementById("adminMessage");

loginBtn.addEventListener("click", () => {
  if (adminPassword.value === password) {
    adminSection.style.display = "block";
  } else {
    alert("Contraseña incorrecta");
  }
});

addIndicatorBtn.addEventListener("click", () => {
  const area = adminArea.value.trim();
  const indicator = adminIndicator.value.trim();
  if (!area || !indicator) {
    adminMessage.textContent = "Debe llenar todos los campos.";
    return;
  }
  // Aquí iría lógica para guardar en backend o localStorage
  adminMessage.textContent = `Indicador "${indicator}" agregado al área "${area}".`;
  adminArea.value = "";
  adminIndicator.value = "";
});
*/


/*
let modoAdminActivo = false;

function activarModoProgramador() {
  const clave = document.getElementById('claveAdmin').value;
  if (clave === '#e6f2ff') {  // Contraseña correcta
    modoAdminActivo = true;
    alert('Modo administrador activado.');
    document.getElementById('claveAdmin').disabled = true; // Deshabilitar la contraseña
    document.querySelector('button[onclick="activarModoProgramador()"]').disabled = true; // Deshabilitar el botón de "Entrar"
    mostrarFormularioAdmin();
  } else {
    alert('Contraseña incorrecta. No tienes permiso para hacer cambios.');
  }
}

function mostrarFormularioAdmin() {
  // Mostrar las opciones administrativas al ser administrador
  const formularioAdmin = document.querySelector('.contenedor');
  formularioAdmin.innerHTML += `
    <h3>Agregar Indicador</h3>
    <select id="areaNuevoIndicador">
      <option disabled selected>Seleccione Área</option>
      <option value="accion">Coordinación de Acción Comunitaria</option>
      <option value="calidad">Coordinación de Calidad e Información Estratégica</option>
      <option value="transparencia">Coordinación de Transparencia y Vinculación</option>
      <option value="salud">Unidad de Atención a la Salud</option>
      <option value="juridica">Unidad Jurídica</option>
      <option value="planeacion">Unidad de Planeación Estratégica y Coordinaciones Estatales</option>
      <option value="infraestructura">Unidad de Infraestructura</option>
      <option value="finanzas">Unidad de Administración y Finanzas</option>
    </select>
    
    <input type="text" id="nuevoIndicador" placeholder="Nombre del nuevo indicador" 
           oninput="this.value = this.value.replace(/[^a-zA-Z0-9\\s]/g, '')" />

    <button onclick="guardarIndicador()">Guardar Indicador</button>

    <hr>

    <button onclick="eliminarDatos()">Eliminar todos los datos</button>
  `;
}

function guardarIndicador() {
  if (!modoAdminActivo) {
    alert('Acción no permitida. Solo los administradores pueden agregar indicadores.');
    return;
  }

  const nuevoIndicador = document.getElementById('nuevoIndicador').value;
  const area = document.getElementById('areaNuevoIndicador').value;

  if (!nuevoIndicador || !area) {
    alert("Debe ingresar el nombre del indicador y seleccionar un área.");
    return;
  }

  // Añadir el nuevo indicador al objeto "indicadores" en el área seleccionada
  indicadores[area].push(nuevoIndicador);
  document.getElementById('nuevoIndicador').value = ''; // Limpiar el campo
  alert('Indicador agregado correctamente.');
}

function eliminarDatos() {
  if (!modoAdminActivo) {
    alert('Acción no permitida. Solo los administradores pueden eliminar datos.');
    return;
  }

  // Limpiar la tabla de metas
  document.getElementById('cuerpoTabla').innerHTML = '';
  alert('Todos los datos han sido eliminados.');
}
*/