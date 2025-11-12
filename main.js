function buscarRestaurante() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultado = document.getElementById("resultado");

  const restaurantes = [
    { nombre: "Todo en Parrilla", direccion: "Calle 10D #25-36" },
    { nombre: "mar y tierra", direccion: "Calle 37c #18-20" },
    { nombre: "verde & salud", direccion: "Calle 12 #30-12" },
  ];

  const encontrado = restaurantes.find(r => r.nombre.includes(input));

  if (encontrado) {
    resultado.innerHTML = `<p><strong>${encontrado.nombre.toUpperCase()}</strong><br>${encontrado.direccion}</p>`;
  } else {
    resultado.innerHTML = "<p>No se encontró el restaurante.</p>";
  }
}

