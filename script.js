const api = "http://localhost:3000/colaboradores";

const form = document.getElementById("form");
const lista = document.getElementById("lista");

async function listar() {
    try {
        const resposta = await fetch(api);
        const dados = await resposta.json();

        lista.innerHTML = "";

        dados.forEach((c) => {
            const item = document.createElement("p");

            item.innerHTML = `
                <strong>${c.nome_completo}</strong> - ${c.cargo}
            `;

            lista.appendChild(item);
        });

    } catch (erro) {
        console.error("Erro ao listar:", erro);
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {

        const colaborador = {
            nome_completo: document.getElementById("nome").value,
            idade: Number(document.getElementById("idade").value),
            cargo: document.getElementById("cargo").value,
            salario: Number(document.getElementById("salario").value),
            tempo_empresa: "1 ano",
            data_admissao: "2025-01-01",
            setor: "TI",
            status: "Ativo"
        };

        const resposta = await fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(colaborador)
        });

        if (!resposta.ok) {
            throw new Error("Erro ao cadastrar");
        }

        alert("Colaborador cadastrado com sucesso!");

        form.reset();

        await listar();

    } catch (erro) {
        console.error(erro);
        alert("Erro ao cadastrar colaborador.");
    }
});

listar();