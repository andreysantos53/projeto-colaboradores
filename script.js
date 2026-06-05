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

listar();