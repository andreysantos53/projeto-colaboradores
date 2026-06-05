CREATE DATABASE empresa;

USE empresa;

CREATE TABLE colaboradores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    cargo VARCHAR(100) NOT NULL,
    salario DECIMAL(10,2) NOT NULL,
    tempo_empresa VARCHAR(50),
    data_admissao DATE,
    setor VARCHAR(100),
    status ENUM('Ativo','Inativo')
);

INSERT INTO colaboradores
(nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status)
VALUES
('Amanda Maria',32,'Analista de Sistemas',4500,'3 anos','2023-02-10','TI','Ativo'),
('Andrey Carvalho',28,'Assistente RH',2800,'2 anos','2024-01-15','RH','Ativo'),
('Rayssa Araujo',41,'Gerente Financeiro',8500,'8 anos','2018-06-20','Financeiro','Ativo'),
('Mylena Oliveira',25,'Recepcionista',2200,'1 ano','2025-03-10','Administrativo','Ativo'),
('Yasmin Araujo',37,'Desenvolvedor',5500,'4 anos','2022-04-15','TI','Ativo'),
('Lucas Ferreira',30,'Analista de Marketing',3800,'2 anos','2024-03-10','Marketing','Ativo'),
('Fernanda Costa',34,'Contadora',5200,'5 anos','2021-08-09','Financeiro','Ativo'),
('Gabriel Almeida',27,'Suporte Técnico',3000,'2 anos','2024-02-14','TI','Ativo'),
('Patricia Mendes',36,'Coordenadora RH',6200,'6 anos','2020-01-12','RH','Ativo'),
('João Pereira',29,'Assistente Administrativo',2500,'1 ano','2025-01-05','Administrativo','Ativo');