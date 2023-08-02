const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost", // Cambia esto por la dirección de tu servidor MySQL
  user: "root", // Cambia esto por el usuario de tu base de datos
  password: "password", // Cambia esto por la contraseña de tu base de datos
  database: "my_database", // Cambia esto por el nombre de tu base de datos
});

module.exports = connection;
