// db.js

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexión a la base de datos exitosa"))
  .catch((err) =>
    console.error("Error en la conexión a la base de datos:", err)
  );
