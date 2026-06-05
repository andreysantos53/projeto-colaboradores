const express = require("express");
const router = express.Router();
const db = require("../src/database/connection");

// GET
router.get("/", (req,res)=>{
    db.query("SELECT * FROM colaboradores",
    (err,result)=>{
        if(err) return res.status(500).json(err);
        res.json(result);
    });
});

router.post("/", (req, res) => {

    console.log("BODY RECEBIDO:", req.body);

    const {
        nome_completo,
        idade,
        cargo,
        salario,
        tempo_empresa,
        data_admissao,
        setor,
        status
    } = req.body;

    db.query(
        `INSERT INTO colaboradores
        (nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            nome_completo,
            idade,
            cargo,
            salario,
            tempo_empresa,
            data_admissao,
            setor,
            status
        ],
        (err, result) => {

            if (err) {
                console.log("ERRO MYSQL:", err);
                return res.status(500).json(err);
            }

            console.log("INSERT REALIZADO:", result);

            res.json({
                mensagem: "Colaborador cadastrado!"
            });
        }
    );
});
// PUT
router.put("/:id",(req,res)=>{

    const {id} = req.params;

    const {
        nome_completo,
        idade,
        cargo,
        salario,
        tempo_empresa,
        data_admissao,
        setor,
        status
    } = req.body;

    db.query(
        `UPDATE colaboradores SET
        nome_completo=?,
        idade=?,
        cargo=?,
        salario=?,
        tempo_empresa=?,
        data_admissao=?,
        setor=?,
        status=?
        WHERE id=?`,
        [
            nome_completo,
            idade,
            cargo,
            salario,
            tempo_empresa,
            data_admissao,
            setor,
            status,
            id
        ],
        (err,result)=>{
            if(err) return res.status(500).json(err);

            res.json({
                mensagem:"Atualizado com sucesso!"
            });
        }
    );
});

// DELETE
router.delete("/:id",(req,res)=>{

    const {id} = req.params;

    db.query(
        "DELETE FROM colaboradores WHERE id=?",
        [id],
        (err,result)=>{
            if(err) return res.status(500).json(err);

            res.json({
                mensagem:"Removido com sucesso!"
            });
        }
    );
});

module.exports = router;