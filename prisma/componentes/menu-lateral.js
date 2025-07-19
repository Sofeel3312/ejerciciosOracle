fetch("../componentes/menu-lateral.html")
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status} - ${res.statusText}`);
    return res.text();
  })
  .then(html => {
    document.body.insertAdjacentHTML("afterbegin", html);
  })
  .catch(err => {
    console.error("❌ Error al cargar el menú lateral:", err);
  });
