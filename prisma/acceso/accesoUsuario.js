document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("loginForm");
  const mensaje = document.getElementById("mensaje");

  const usuarios = {
      salud: { nombre: "Unidad de Atención a la Salud", password: "salud123" },
      finanzas: { nombre: "Unidad de Administración y Finanzas", password: "finanzas123" },
      infraestructura: { nombre: "Unidad de Infraestructura", password: "infra123" },
      juridico: { nombre: "Unidad Jurídica", password: "juridico123" },
      planeacion: { nombre: "Unidad de Planeación Estratégica y Coordinaciones Estatales", password: "upece123" },
      comunitaria: { nombre: "Coordinación de Acción Comunitaria", password: "cac123" },
      transparencia: { nombre: "Coordinación de Transparencia y Vinculación", password: "ctv123" },
      calidad: { nombre: "Coordinación de Calidad e Información Estratégica", password: "ccie123" },

  };

  formulario.addEventListener("submit", e => {
    e.preventDefault();
    const usuario = document.getElementById("usuario").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();

    if (usuarios[usuario] && password === usuarios[usuario].password) {
      sessionStorage.setItem("usuarioActivo", usuario);
      sessionStorage.setItem("nombreUnidad", usuarios[usuario].nombre);
      window.location.href = "../tablero/tableroUsuario.html";
    } else {
      mensaje.textContent = "Credenciales incorrectas o acceso no autorizado.";
    }
  });
});

