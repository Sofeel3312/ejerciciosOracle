document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formPAT");
  const archivo = document.getElementById("archivoPAT");
  const mensaje = document.getElementById("mensajePAT");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const file = archivo.files[0];
    if (!file || !file.name.endsWith(".xlsm")) {
      mensaje.textContent = "Solo se aceptan archivos .xlsm";
      return;
    }
    mensaje.style.color = "green";
    mensaje.textContent = `Archivo "${file.name}" cargado correctamente.`;
  });
});
