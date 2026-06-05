const mysql = require("mysql2");

const connection = mysql.createConnection({
<<<<<<< HEAD
    host: "localhost",
    user: "root",
    password: "1234",
    database: "empresa"
});

connection.connect((err) => {
    if(err){
        console.log("Erro ao conectar:", err);
    }else{
        console.log("MySQL conectado!");
    }
=======
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
>>>>>>> f9dd5d021fea218b998bd4d7480335e9968cb39f
});

module.exports = connection;