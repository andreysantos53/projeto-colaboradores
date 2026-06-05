const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "empresa"
});

connection.connect((err) => {
  if (err) {
    console.log("Erro ao conectar:", err);
  } else {
    console.log("Banco conectado com sucesso!");
  }
});

module.exports = connection;