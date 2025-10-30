
DROP DATABASE IF EXISTS loja;


CREATE DATABASE loja;


USE loja;


CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);


INSERT INTO produtos (nome) VALUES ('Camisa'), ('Calça');

INSERT INTO vendas (produto_id, quantidade, valor) VALUES 
(1, 3, 29.90),  
(2, 2, 49.90),  
(1, 1, 29.90),  
(2, 4, 49.90);  

SELECT 
    SUM(quantidade) AS soma_quantidades,
    AVG(quantidade) AS media_quantidades
FROM vendas;


SELECT 
    p.nome AS produto,
    SUM(v.quantidade) AS soma_quantidades
FROM vendas v
JOIN produtos p ON v.produto_id = p.id
GROUP BY p.nome;


SELECT 
    p.nome AS produto,
    AVG(v.valor) AS media_valor
FROM vendas v
JOIN produtos p ON v.produto_id = p.id
GROUP BY p.nome;