# Sistema de Gerenciamento de Colaboradores

## Integrantes

- Amanda Maria Silva Matias dos Santos
- Andrey Carvalho
- Rayssa Araujo
- Mylena Oliveira
- Yasmin Araujo

## Descrição do Sistema

Sistema desenvolvido para gerenciamento de colaboradores de uma empresa utilizando Node.js, Express e MySQL.

A aplicação permite cadastrar, listar, atualizar e remover colaboradores através de uma API REST integrada ao banco de dados MySQL.

Também possui uma interface web simples para cadastro e visualização dos colaboradores.

## Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- HTML
- CSS
- JavaScript
- Postman

## Estrutura do Banco de Dados

### Tabela: colaboradores

| Campo | Tipo |
|---------|---------|
| id | INT AUTO_INCREMENT PRIMARY KEY |
| nome_completo | VARCHAR(100) |
| idade | INT |
| cargo | VARCHAR(100) |
| salario | DECIMAL(10,2) |
| tempo_empresa | VARCHAR(50) |
| data_admissao | DATE |
| setor | VARCHAR(100) |
| status | ENUM('Ativo','Inativo') |

## Funcionalidades

- Cadastro de colaboradores
- Listagem de colaboradores
- Atualização de colaboradores
- Remoção de colaboradores
- Integração com MySQL
- Interface web para cadastro e visualização

## Estrutura do Projeto

```text
projeto-colaboradores/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── routes/
│   └── colaboradores.js
│
├── src/
│   └── database/
│       └── connection.js
│
├── database.sql
├── server.js
├── package.json
└── README.md
```

## Como Executar o Projeto

1. Instale as dependências:

```bash
npm install
```

2. Configure o banco de dados MySQL.

3. Execute o servidor:

```bash
node server.js
```

4. Abra o arquivo:

```text
frontend/index.html
```

## Rotas da API

### Listar colaboradores

```http
GET /colaboradores
```

### Cadastrar colaborador

```http
POST /colaboradores
```

### Atualizar colaborador

```http
PUT /colaboradores/:id
```

### Remover colaborador

```http
DELETE /colaboradores/:id
```

## Testes

Todas as rotas da API foram testadas utilizando o Postman:

- GET
- POST
- PUT
- DELETE

## Banco de Dados

Os dados dos colaboradores são armazenados e persistidos no MySQL.

## Resultado

O sistema permite realizar o gerenciamento completo de colaboradores através de operações CRUD integradas ao banco de dados MySQL.