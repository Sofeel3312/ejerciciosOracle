document.addEventListener("DOMContentLoaded", function () {
  // Conecta el formulario al evento submit
  const formulario = document.getElementById("loginForm");
  const mensaje = document.getElementById("mensaje");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío por defecto

    // 🧠 Obtener valores del formulario
    const usuario = document.getElementById("usuario").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();

    // ✋ Validar campos vacíos
    if (!usuario || !password) {
      mensaje.textContent = "Por favor, completa todos los campos.";
      mensaje.classList.add("error-message");
      return;
    }

    // 🔐 Lista de usuarios válidos
    const usuarios = {
      salud: { nombre: "Unidad de Atención a la Salud", password: "salud123" },
      finanzas: { nombre: "Unidad de Administración y Finanzas", password: "finanzas123" },
      infraestructura: { nombre: "Unidad de Infraestructura", password: "infra123" },
      juridico: { nombre: "Unidad Jurídica", password: "juridico123" },
      planeacion: { nombre: "Unidad de Planeación Estratégica y Coordinaciones Estatales", password: "upece123" },
      comunitaria: { nombre: "Coordinación de Acción Comunitaria", password: "cac123" },
      transparencia: { nombre: "Coordinación de Transparencia y Vinculación", password: "ctv123" },
      calidad: { nombre: "Coordinación de Calidad e Información Estratégica", password: "ccie123" },
      admin: { nombre: "Administrador", password: "admin123" }
    };

    // ✅ Validar credenciales
    if (usuarios[usuario] && password === usuarios[usuario].password) {
      // 🧾 Guardar sesión
      sessionStorage.setItem("usuarioActivo", usuario);
      sessionStorage.setItem("nombreUnidad", usuarios[usuario].nombre);

      // 🟢 Redireccionar al tablero institucional
      window.location.href = "../PAT-tablero.html";
    } else {
      mensaje.textContent = "Usuario no reconocido o contraseña incorrecta.";
      mensaje.classList.add("error-message");
    }
  });
});









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