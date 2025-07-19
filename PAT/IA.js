function analizar() {
  const docSemestral = document.getElementById("docSemestral").value;
  const docAnual = document.getElementById("docAnual").value;
  const presentacion = document.getElementById("presentacionFinal");

  // Verificación simple: ¿El anual contiene parte del semestral?
  const incluyeSemestral = docAnual.includes(docSemestral.slice(0, 50));

  // Detección de frases que están solo en el semestral
  const frasesSemestral = docSemestral.split(/[.!\n\r]+/).map(f => f.trim()).filter(f => f.length > 30);
  const frasesFaltantes = frasesSemestral.filter(f => !docAnual.includes(f));

  // Corrección simple de tildes mal puestas (simulación)
  const palabrasMalTildadas = frasesSemestral.filter(f => f.includes("ésta") || f.includes("sólo") || f.includes("aún que"));

  // Crear presentación final
  presentacion.innerHTML = `
    <h2>📊 Presentación Ejecutiva Revisada</h2>
    
    <h3>1. Evaluación de Consistencia</h3>
    <p>${incluyeSemestral 
        ? "✅ El informe anual incluye adecuadamente contenido del semestral."
        : "⚠️ El informe anual no refleja claramente lo presentado en el semestral."}</p>

    <h3>2. Frases del Semestral que Faltan en el Anual</h3>
    <ul>${frasesFaltantes.map(f => `<li>${f}</li>`).join("") || "<li>Todo parece estar incluido.</li>"}</ul>

    <h3>3. Posibles errores ortográficos</h3>
    <ul>${palabrasMalTildadas.map(f => `<li>${f}</li>`).join("") || "<li>No se detectaron errores visibles.</li>"}</ul>

    <h3>4. Recomendaciones</h3>
    <ul>
      <li>Verifica que todos los avances semestrales estén incluidos en el anual.</li>
      <li>Corrige errores de tildación innecesaria (como 'ésta', 'sólo').</li>
      <li>Asegúrate de agregar evidencias documentales firmadas en físico.</li>
    </ul>
  `;
}