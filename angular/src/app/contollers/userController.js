// backend/controllers/userController.js

const connection = require("../db");

exports.getUserById = (req, res) => {
  const userId = req.params.id;

  // Ejecuta una consulta SQL para obtener los datos del usuario por su ID
  const sql = "SELECT * FROM usuarios WHERE id = ?";
  const values = [userId];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error al obtener el usuario:", err);
      res.status(500).json({ message: "Error al obtener el usuario" });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: "Usuario no encontrado" });
      } else {
        res.json(result[0]);
      }
    }
  });
};
