const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user"); // Importar el modelo de usuario que representa la colección en la base de datos

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verificar si el usuario ya está registrado
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "El usuario ya está registrado" });
    }

    // Encriptar la contraseña antes de guardarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario en la base de datos
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: "Registro exitoso" });
  } catch (error) {
    return res.status(500).json({ error: "Error en el servidor" });
  }
});

module.exports = router;
