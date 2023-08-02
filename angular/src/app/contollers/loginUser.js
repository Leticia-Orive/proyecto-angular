const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user"); // Importar el modelo de usuario que representa la colección en la base de datos

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Obtener el usuario desde la base de datos por su nombre de usuario
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Nombre de usuario incorrecto" });
    }

    // Verificar la contraseña ingresada con la almacenada en la base de datos
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Generar un token de autenticación para el usuario
    const token = jwt.sign({ userId: user._id }, "secreto", {
      expiresIn: "1h",
    });

    // Devolver el token como respuesta al inicio de sesión exitoso
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: "Error en el servidor" });
  }
});

module.exports = router;
