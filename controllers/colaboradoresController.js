const db = require("../database/connection");

// CREATE
exports.create = (req, res) => {
  const data = req.body;

  const sql = `
    INSERT INTO colaboradores 
    (nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, Object.values(data), (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Colaborador criado com sucesso!" });
  });
};

// READ
exports.read = (req, res) => {
  db.query("SELECT * FROM colaboradores", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// UPDATE
exports.update = (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const sql = `
    UPDATE colaboradores SET
    nome_completo=?, idade=?, cargo=?, salario=?, tempo_empresa=?,
    data_admissao=?, setor=?, status=?
    WHERE id=?
  `;

  db.query(sql, [...Object.values(data), id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Atualizado com sucesso!" });
  });
};

// DELETE
exports.delete = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM colaboradores WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Removido com sucesso!" });
  });
};