<<<<<<< HEAD
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

=======
const API = "http://localhost:3000/colaboradores";

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nome_completo: nome.value,
    idade: idade.value,
    cargo: cargo.value,
    salario: salario.value,
    tempo_empresa: tempo.value,
    data_admissao: data.value,
    setor: setor.value,
    status: status.value
  };

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  listar();
});

async function listar() {
  const res = await fetch(API);
  const data = await res.json();

  lista.innerHTML = data.map(c =>
    `<p>${c.nome_completo} - ${c.cargo} - R$${c.salario}</p>`
  ).join("");
}

>>>>>>> f9dd5d021fea218b998bd4d7480335e9968cb39f
listar();