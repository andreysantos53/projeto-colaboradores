const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const colaboradoresRoutes = require("./src/routes/colaboradoresRoutes");

app.use("/colaboradores", colaboradoresRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});