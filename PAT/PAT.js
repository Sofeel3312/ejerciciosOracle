// Obtener usuario activo
const usuario = sessionStorage.getItem("usuarioActivo");
const bienvenida = document.createElement("div");
bienvenida.className = "mensaje-bienvenida";
bienvenida.textContent = `¡Bienvenida, ${usuario}! Has ingresado correctamente al sistema.`;
document.body.insertBefore(bienvenida, document.body.firstChild);
document.getElementById("usuario").textContent = `Usuario: ${usuario}`;

// Mapeo de unidades
const unidades = {
  salud: "Unidad de Atención a la Salud",
  finanzas: "Unidad de Administración y Finanzas",
  infraestructura: "Unidad de Infraestructura",
  juridica: "Unidad Jurídica",
  planeacion: "Unidad de Planeación Estratégica",
  comunitaria: "Coordinación de Acción Comunitaria",
  transparencia: "Coordinación de Transparencia y Vinculación",
  calidad: "Coordinación de Calidad e Información Estratégica",
  admin: "Administrador"
};

// Mostrar área correspondiente
document.getElementById("areaText").textContent = unidades[usuario] || "Área desconocida";

// Función para cerrar sesión
function cerrarSesion() {
  sessionStorage.removeItem("usuarioActivo");
  window.location.href = "PAT-accesoUsuario.html";
}

// Modal de administrador
function mostrarModalAdmin() {
  document.getElementById("adminAuth").style.display = "block";
}

function cerrarModalAdmin() {
  document.getElementById("adminAuth").style.display = "none";
}

function validarAdministrador() {
  const password = document.getElementById("passwordAdmin").value;
  if (usuario === "admin" && password === "admin123") {
    alert("Modo administrador activado");
    cerrarModalAdmin();
    // Aquí podrías habilitar edición de tabla, carga de archivos, etc.
  } else {
    document.getElementById("errorMensaje").textContent = "Contraseña incorrecta.";
  }
}

// Función para agregar metas
function agregarMetaUsuario(tipo) {
  const indicador = document.getElementById("indicadorText").textContent || "Indicador X";
  const area = document.getElementById("areaText").textContent;
  const periodicidad = document.getElementById("periodicidadText").textContent || "Mensual";
  const tipoMeta = document.getElementById("tipoMetaText").textContent;
  const trimestre = document.getElementById("trimestreText").textContent || "1er Trimestre";

  let valor = "";
  if (tipo === "programada") {
    valor = document.getElementById("metaProgramadaUsuario").value;
  } else if (tipo === "modificada") {
    valor = document.getElementById("metaModificadaUsuario").value;
  } else if (tipo === "alcanzada") {
    valor = document.getElementById("metaAlcanzadaUsuario").value;
  }

  if (!valor) {
    alert("Por favor, ingresa un valor para la meta.");
    return;
  }

  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${indicador}</td>
    <td>${area}</td>
    <td>${periodicidad}</td>
    <td>${tipoMeta}</td>
    <td>${tipo === "programada" ? valor : ""}</td>
    <td></td><td></td><td></td>
    <td>${tipo === "modificada" ? valor : ""}</td>
    <td></td><td></td><td></td>
    <td>${tipo === "alcanzada" ? valor : ""}</td>
    <td></td><td></td><td></td>
  `;
  document.getElementById("cuerpoTabla").appendChild(fila);

  // Limpiar campo
  if (tipo === "programada") {
    document.getElementById("metaProgramadaUsuario").value = "";
  } else if (tipo === "modificada") {
    document.getElementById("metaModificadaUsuario").value = "";
  } else if (tipo === "alcanzada") {
    document.getElementById("metaAlcanzadaUsuario").value = "";
  }
}




/*
document.addEventListener("DOMContentLoaded", function() {
  const usuarioActivo = sessionStorage.getItem("usuarioActivo");

  if (!usuarioActivo) {
      alert("Debes iniciar sesión para acceder al sistema.");
      window.location.href = "PAT-accesoUsuario.html";
  } else {
        document.getElementById("usuario").textContent = `Bienvenido, ${usuarioActivo}`;
      //cargar valores configurados por el administrador 
        document.getElementById("areaText").textContent = sessionStorage.getItem("areaSeleccionada") || "No configurado";
        document.getElementById("indicadorText").textContent = sessionStorage.getItem("indicadorSeleccionado") || "No configurado";
        document.getElementById("periodicidadText").textContent = sessionStorage.getItem("periodicidadSeleccionada") || "No configurado";
        document.getElementById("tipoMetaText").textContent = sessionStorage.getItem("tipoMetaSeleccionada") || "No configurado";
        document.getElementById("trimestreText").textContent = sessionStorage.getItem("trimestreSeleccionado") || "No configurado";
      
      //cargar valores guardados en la tabla  
        cargarValoresTabla();
  }
});

// Función para cerrar sesión
function cerrarSesion() {
  sessionStorage.removeItem("usuarioActivo");
  window.location.href = "PAT-accesoUsuario.html";
}

// Mostrar el modal de autenticación antes de acceder al modo administrador
function mostrarModalAdmin() {
  document.getElementById("adminAuth").style.display = "block";
}

// Cerrar el modal de autenticación
function cerrarModalAdmin() {
  document.getElementById("adminAuth").style.display = "none";
}

// Validar acceso al modo administrador con contraseña
function validarAdministrador() {
  const passwordIngresada = document.getElementById("passwordAdmin").value;
  const passwordCorrecta = "clave1234";

  if (passwordIngresada === passwordCorrecta) {
      sessionStorage.setItem("usuarioActivo", "admin");
      window.location.href = "PAT-administrador.html"; // Redirige al panel de administración
  } else {
      document.getElementById("errorMensaje").textContent = "Contraseña incorrecta";
  }
}

//función para agregar valores numéricos en cada meta y reflejarlos en la tabla
function agregarMetaUsuario(tipo) {
  let inputElement = document.getElementById(`meta${tipo.charAt(0).toUpperCase() + tipo.slice(1)}Usuario`);
  let valorIngresado = inputElement.value.trim();

  if (valorIngresado === "" || isNaN(valorIngresado)) {
      alert("Por favor, ingrese un valor numérico válido.");
      return;
  }
  
  //Guardar el valor en sessionStorage
  let valoresGuardados = JSON.parse(sessionStorage.getItem(`valores${tipo}`)) || [];
  valoresGuardados.push(valorIngresado);
  sessionStorage.setItem(`valores${tipo}`, JSON.stringify(valoresGuardados));

    cargarValoresTabla();

    alert(`Valor ${valorIngresado} agregado en Meta ${tipo}.`);
    inputElement.value = "";
}

//función para cargar valores guardados en la tabla al abrir la página
function cargarValoresTabla() {
  document.getElementById("cuerpoTabla").innerHTML = "";

  ["programada", "modificada", "alcanzada"].forEach(tipo => {
      let valores = JSON.parse(sessionStorage.getItem(`valores${tipo}`)) || [];
      valores.forEach(valor => agregarFilaTabla(valor, tipo.charAt(0).toUpperCase() + tipo.slice(1)));
  });
}

function agregarFilaTabla(valor, tipo) {
  let nuevaFila = document.createElement("tr");
  nuevaFila.innerHTML = `
      <td>${sessionStorage.getItem("indicadorSeleccionado") || "No configurado"}</td>
      <td>${sessionStorage.getItem("areaSeleccionada") || "No configurado"}</td>
      <td>${sessionStorage.getItem("periodicidadSeleccionada") || "No configurado"}</td>
      <td>${tipo}</td>
      <td colspan="4">${tipo === 'Programada' ? valor : ''}</td>
      <td colspan="4">${tipo === 'Modificada' ? valor : ''}</td>
      <td colspan="4">${tipo === 'Alcanzada' ? valor : ''}</td>
  `;
  document.getElementById("cuerpoTabla").appendChild(nuevaFila);
}











/*
document.addEventListener("DOMContentLoaded", () => {
  const areaSelect = document.getElementById("area");
  const indicatorSelect = document.getElementById("indicator");
  const quarterSelect = document.getElementById("quarter");
  const valueInput = document.getElementById("value");
  const submitBtn = document.getElementById("submitBtn");

  const areas = {
    "Unidad de Atención a la Salud": [
      "Integrar información de las Unidades de Segundo Nivel de Atención"
    ],
    "Coordinación de Acción Comunitaria": ["Indicador 1", "Indicador 2"],
    "Coordinación de Calidad e Información Estratégica": ["Indicador 3"],
    "Unidad Jurídica": ["Indicador 4"],
    "Unidad de Planeación Estratégica y Coordinaciones Estatales": ["Indicador 5"],
    "Unidad de Infraestructura": ["Indicador 6"],
    "Unidad de Administración y Finanzas": ["Indicador 7"]
  };

  Object.keys(areas).forEach(area => {
    const option = document.createElement("option");
    option.value = area;
    option.textContent = area;
    areaSelect.appendChild(option);
  });

  areaSelect.addEventListener("change", () => {
    indicatorSelect.innerHTML = "";
    const selected = areaSelect.value;
    areas[selected].forEach(indicator => {
      const option = document.createElement("option");
      option.value = indicator;
      option.textContent = indicator;
      indicatorSelect.appendChild(option);
    });
  });

  areaSelect.dispatchEvent(new Event("change")); // cargar por defecto

  const ctx = document.getElementById("resultChart").getContext("2d");
  const resultChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["1", "2", "3", "4"],
      datasets: [{
        label: "Valores Alcanzados",
        data: [null, null, null, null],
        backgroundColor: "#66b2ff"
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  submitBtn.addEventListener("click", () => {
    const quarter = parseInt(quarterSelect.value, 10) - 1;
    const value = parseFloat(valueInput.value);
    if (isNaN(value)) {
      alert("Ingrese un valor válido.");
      return;
    }

    resultChart.data.datasets[0].data[quarter] = value;
    resultChart.update();
    valueInput.value = "";
  });
});
*/




/*
const indicadores = {
  accion: [],
  calidad: [],
  transparencia: [],
  salud: [],
  juridica: [],
  planeacion: [],
  infraestructura: [],
  finanzas: []
};

let modoAdminActivo = false;

function actualizarIndicadores() {
  const area = document.getElementById('areaInput').value;
  const indicadorInput = document.getElementById('indicadorInput');
  indicadorInput.innerHTML = '<option disabled selected>Indicador</option>';
  indicadores[area].forEach(indicador => {
    const option = document.createElement('option');
    option.value = indicador;
    option.textContent = indicador;
    indicadorInput.appendChild(option);
  });
}

function agregarDato() {
  if (!modoAdminActivo) {
    alert('No autorizado. Debes activar el modo administrador.');
    return;
  }

  const area = document.getElementById('areaInput').value;
  const indicador = document.getElementById('indicadorInput').value;
  const tipo = document.getElementById('tipoMeta').value;
  const periodicidad = document.getElementById('periodicidadInput').value;
  const trimestre = parseInt(document.getElementById('trimestre').value);
  const valor = document.getElementById('valorMeta').value;

  if (!area || !indicador || !valor || !periodicidad || isNaN(trimestre)) {
    alert("Todos los campos son requeridos.");
    return;
  }

  let fila = [...document.querySelectorAll('#cuerpoTabla tr')].find(
    row => row.dataset.indicador === indicador && row.dataset.area === area
  );

  if (!fila) {
    fila = document.createElement('tr');
    fila.dataset.indicador = indicador;
    fila.dataset.area = area;
    fila.innerHTML = `
      <td>${indicador}</td>
      <td>${area}</td>
      <td>${periodicidad}</td>
      <td>${tipo}</td>
      ${'<td></td>'.repeat(12)}
    `;
    document.getElementById('cuerpoTabla').appendChild(fila);
  }

  // Columnas:
  // 4-7: Programadas
  // 8-11: Modificadas
  // 12-15: Alcanzadas
  const tipoIndexMap = {
    Programada: 4,
    Modificada: 8,
    Alcanzada: 12
  };

  const baseIndex = tipoIndexMap[tipo];
  fila.children[baseIndex + trimestre].textContent = valor;
}

function bloquearTrimestres() {
  const selected = parseInt(document.getElementById('trimestre').value);
  document.getElementById('valorMeta').disabled = false;

  Array.from(document.getElementById('trimestre').options).forEach((opt, index) => {
    opt.disabled = index !== selected;
  });
}

function mostrarAdminForm() {
  document.getElementById('adminForm').style.display = 'block';
}

function cerrarAdminForm() {
  document.getElementById('adminForm').style.display = 'none';
}

function activarModoProgramador() {
  const clave = document.getElementById('claveAdmin').value;
  if (clave === '#e6f2ff') {
    modoAdminActivo = true;
    alert('Modo administrador activado');
    document.getElementById('adminForm').style.display = 'none';
  } else {
    alert('Contraseña incorrecta. No tienes permiso para hacer cambios.');
  }
}

function evaluarCumplimiento() {
  const filas = document.querySelectorAll('#cuerpoTabla tr');
  filas.forEach(fila => {
    const indicador = fila.children[0].textContent;
    const area = fila.children[1].textContent;

    for (let i = 0; i < 4; i++) {
      const programado = fila.children[4 + i].textContent.trim();
      const modificado = fila.children[8 + i].textContent.trim();
      const alcanzado = fila.children[12 + i].textContent.trim();

      let tipoUsado = '';
      let metaBase = null;

      if (modificado) {
        metaBase = parseFloat(modificado);
        tipoUsado = 'Modificada';
      } else if (programado) {
        metaBase = parseFloat(programado);
        tipoUsado = 'Programada';
      }

      const valorAlcanzado = parseFloat(alcanzado);
      if (!isNaN(metaBase) && !isNaN(valorAlcanzado) && metaBase > 0) {
        const resultado = valorAlcanzado / metaBase;
        const margenMin = valorAlcanzado * 0.8;
        const margenMax = valorAlcanzado * 1.2;
        const dentroRango = metaBase >= margenMin && metaBase <= margenMax;

        alert(`Indicador: ${indicador}
Área: ${area}
Trimestre ${i + 1}
Meta usada: ${tipoUsado}
Resultado: ${(resultado * 100).toFixed(2)}%
Cumple con el rango ±20%: ${dentroRango ? 'Sí' : 'No'}`);
      }
    }
  });
}
*/