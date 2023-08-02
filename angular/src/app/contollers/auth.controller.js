const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt"); // Para encriptar contraseñas
const jwt = require("jsonwebtoken"); // Para generar tokens de autenticación

// Ruta para el registro de nuevos usuarios
router.post("/register", async (req, res) => {
  try {
    // Obtener los datos del usuario desde el cuerpo de la solicitud
    const { username, password } = req.body;

    // Verificar si el usuario ya está registrado (esto dependerá de cómo almacenes la información del usuario en tu base de datos)
    const userExists = false; // Ejemplo: Aquí deberías realizar una consulta a tu base de datos para verificar si el usuario ya existe

    if (userExists) {
      return res.status(400).json({ error: "El usuario ya está registrado" });
    }

    // Encriptar la contraseña antes de guardarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);

    // Aquí deberías guardar la información del usuario en tu base de datos (por ejemplo, MongoDB o MySQL)

    return res.status(201).json({ message: "Registro exitoso" });
  } catch (error) {
    return res.status(500).json({ error: "Error en el servidor" });
  }
});

// Ruta para el inicio de sesión
router.post("/login", async (req, res) => {
  try {
    // Obtener los datos del usuario desde el cuerpo de la solicitud
    const { username, password } = req.body;

    // Aquí deberías realizar una consulta a tu base de datos para obtener la información del usuario por su nombre de usuario
    const user = null; // Ejemplo: Aquí deberías obtener el usuario de la base de datos según el nombre de usuario proporcionado

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
