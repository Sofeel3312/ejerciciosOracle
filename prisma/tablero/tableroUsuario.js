document.addEventListener("DOMContentLoaded", () => {
  const nombreUnidad = sessionStorage.getItem("nombreUnidad");
  document.getElementById("bienvenidaHeader").textContent = `Bienvenido, ${nombreUnidad}`;
  const contenedor = document.getElementById("contenidoModulo");

  // 🔁 Espera a que el menú se cargue
  const esperarMenu = setInterval(() => {
    const menu = document.getElementById("menuLateral");
    if (!menu) return;

    clearInterval(esperarMenu);
    const descripciones = {
      "Inicio": "Retorna",
      "Archivos actualizados": "Descarga de archivos y consultas",
      "Dashboard": "Inhabilitado, solo para consultas",
      "Anexo Estadístico": "Carga tu información aquí",
      "Informe Escrito": "Carga tu información aquí",
      "PAT": "Carga tu información aquí",
      "Indicadores": "Inhabilitado, solo para consultas",
      "Calendario": "Cronograma anual y eventos institucionales",
      "Comunicados": "Capacitaciones y formación",
    };
    const iconos = {
      "Inicio": "🏠",
      "Archivos actualizados": "📁",
      "Dashboard": "📊",
      "Anexo Estadístico": "📈",
      "Informe Escrito": "📝",
      "PAT": "🎯",
      "Indicadores": "📈",
      "Calendario": "📅",
      "Comunicados": "📢",
    };

    const datos = {
      salud: {
        menu: ["Inicio", "Archivos actualizados", "Dashboard", "Anexo Estadístico", "Informe Escrito", "PAT", "Indicadores", "Calendario", "Comunicados"],
        mensaje: "Este es tu tablero personalizado. Aquí puedes consultar tus archivos, indicadores y reportes."
      },
      // otros perfiles como admin, juridico, etc.
    };

    if (!usuario || !datos[usuario]) {
      alert("Acceso no autorizado");
      window.location.href = "../acceso/accesoUsuario.html";
      return;
    }

    document.getElementById("bienvenidaHeader").textContent = `Bienvenido, ${nombreUnidad}`;
    document.getElementById("mensajeUnidad").textContent = datos[usuario].mensaje;

    datos[usuario].menu.forEach(opcion => {
      const li = document.createElement("li");
      const icono = iconos[opcion] || "📄";

      const enlace = document.createElement("a");
      enlace.href = "#";
      enlace.innerHTML = `<span class="icono">${icono}</span>${opcion}`;
      enlace.setAttribute("data-modulo", opcion);
      enlace.setAttribute("data-tooltip", descripciones[opcion] || `Ir a ${opcion}`);

      li.appendChild(enlace);
      menu.appendChild(li);
    });
    // ✅ Delegar clic dentro del menú ya cargado
    menu.addEventListener("click", e => {
      const enlace = e.target.closest("a[data-modulo]");
      if (!enlace) return;

      const modulo = enlace.dataset.modulo;

      fetch(`../modulos/${modulo}.html`)
        .then(res => res.text())
        .then(html => {
          contenedor.innerHTML = html;

          const script = document.createElement("script");
          script.src = `../modulos/${modulo}.js`;
          script.defer = true;
          document.body.appendChild(script);
        })
        .catch(() => {
          contenedor.innerHTML = `<p>No se pudo cargar el módulo <strong>${modulo}</strong>.</p>`;
        });
    });
  }, 100);

  window.cerrarSesion = function () {
    sessionStorage.clear();
    window.location.href = "../acceso/accesoUsuario.html";
  };
});


