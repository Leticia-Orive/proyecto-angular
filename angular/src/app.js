const express = require("express");
const app = express();

// Importar el controlador de autenticación
const authController = require("./controllers/auth.controller");

// Usar el controlador de autenticación como middleware para las rutas de autenticación y registro
app.use("/api", authController);

// ... Otras rutas de tu aplicación ...

// Escuchar en un puerto específico
const port = 3000;
app.listen(port, () =>
  console.log(`Servidor en funcionamiento en el puerto ${port}`)
);
