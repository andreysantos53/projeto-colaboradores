const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
const colaboradores = require("./routes/colaboradores");

app.use("/colaboradores", colaboradores);

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
=======
const colaboradoresRoutes = require("./src/routes/colaboradoresRoutes");

app.use("/colaboradores", colaboradoresRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
>>>>>>> f9dd5d021fea218b998bd4d7480335e9968cb39f
});