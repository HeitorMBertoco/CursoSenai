-- Tabela para funcionários do SENAI
-- Execute este SQL no banco de dados 'fronteira' ou crie um novo banco 'senai'
CREATE DATABASE escola;

use escola;
CREATE TABLE IF NOT EXISTS funcionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    foto VARCHAR(255) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
