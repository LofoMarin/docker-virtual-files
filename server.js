const express = require("express");
const app = express();
const PORT = 3000;

// Servir archivos estáticos
app.use(express.static("public"));

// Ruta raíz
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/prueba.html");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});
