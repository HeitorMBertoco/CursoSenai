-- ============================================
-- BANCO DE DADOS: LOJA DE ELETRÔNICOS
-- ============================================

-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS loja_eletronica;
USE loja_eletronica;

-- ============================================
-- TABELA: CAIXA
-- ============================================
CREATE TABLE caixa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    saldo DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Inserir saldo inicial do caixa
INSERT INTO caixa (saldo) VALUES (1000.00);

-- ============================================
-- TABELA: PRODUTO
-- ============================================
CREATE TABLE produto (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL DEFAULT 0,
    preco DECIMAL(10, 2) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (quantidade >= 0),
    CHECK (preco >= 0)
);

-- Inserir produtos para teste
INSERT INTO produto (nome, quantidade, preco) VALUES
('Notebook Dell Inspiron 15', 10, 3500.00),
('Mouse Logitech MX Master', 25, 120.00),
('Teclado Mecânico RGB', 15, 450.00),
('Monitor LG 24" Full HD', 8, 890.00),
('Webcam HD 1080p', 12, 280.00),
('Headset Gamer RGB', 20, 350.00),
('SSD 480GB Samsung', 30, 380.00),
('Impressora HP Multifuncional', 5, 650.00);

-- ============================================
-- TABELA: VENDA (Para histórico)
-- ============================================
CREATE TABLE venda (
    id INT PRIMARY KEY AUTO_INCREMENT,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    valor_unitario DECIMAL(10, 2) NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL,
    data_venda TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (produto_id) REFERENCES produto(id),
    CHECK (quantidade > 0),
    CHECK (valor_unitario >= 0),
    CHECK (valor_total >= 0)
);

-- ============================================
-- STORED PROCEDURE: REALIZAR VENDA
-- Com TRANSAÇÃO ATÔMICA (tudo ou nada!)
-- ============================================
DELIMITER //

CREATE PROCEDURE realizar_venda(
    IN p_produto_id INT,
    IN p_quantidade INT,
    OUT p_mensagem VARCHAR(255),
    OUT p_sucesso BOOLEAN
)
BEGIN
    DECLARE v_preco DECIMAL(10, 2);
    DECLARE v_estoque INT;
    DECLARE v_total DECIMAL(10, 2);
    DECLARE v_erro VARCHAR(255);
    
    -- Declarar handler para erros
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        -- Em caso de erro, fazer ROLLBACK
        ROLLBACK;
        SET p_sucesso = FALSE;
        SET p_mensagem = CONCAT('Erro na transação: ', v_erro);
    END;
    
    -- Iniciar transação
    START TRANSACTION;
    
    -- 1. Buscar informações do produto (com LOCK para evitar concorrência)
    SELECT preco, quantidade INTO v_preco, v_estoque
    FROM produto
    WHERE id = p_produto_id
    FOR UPDATE;
    
    -- 2. Validar se produto existe
    IF v_preco IS NULL THEN
        SET v_erro = 'Produto não encontrado';
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Produto não encontrado';
    END IF;
    
    -- 3. Validar estoque
    IF v_estoque < p_quantidade THEN
        SET v_erro = CONCAT('Estoque insuficiente. Disponível: ', v_estoque);
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = v_erro;
    END IF;
    
    -- 4. Calcular total
    SET v_total = v_preco * p_quantidade;
    
    -- 5. Atualizar estoque (REDUZIR)
    UPDATE produto
    SET quantidade = quantidade - p_quantidade
    WHERE id = p_produto_id;
    
    -- 6. Atualizar caixa (ADICIONAR)
    UPDATE caixa
    SET saldo = saldo + v_total
    WHERE id = 1;
    
    -- 7. Registrar venda no histórico
    INSERT INTO venda (produto_id, quantidade, valor_unitario, valor_total)
    VALUES (p_produto_id, p_quantidade, v_preco, v_total);
    
    -- 8. Confirmar transação (COMMIT)
    COMMIT;
    
    -- Retornar sucesso
    SET p_sucesso = TRUE;
    SET p_mensagem = CONCAT('Venda realizada com sucesso! Total: R$ ', v_total);
END //

DELIMITER ;

-- ============================================
-- VIEWS ÚTEIS
-- ============================================

-- View: Status do Caixa
CREATE VIEW v_status_caixa AS
SELECT 
    id,
    CONCAT('R$ ', FORMAT(saldo, 2, 'pt_BR')) AS saldo_formatado,
    saldo,
    data_atualizacao
FROM caixa;

-- View: Produtos com Estoque Baixo
CREATE VIEW v_estoque_baixo AS
SELECT 
    id,
    nome,
    quantidade,
    CONCAT('R$ ', FORMAT(preco, 2, 'pt_BR')) AS preco_formatado,
    preco
FROM produto
WHERE quantidade < 10
ORDER BY quantidade ASC;

-- View: Relatório de Vendas
CREATE VIEW v_relatorio_vendas AS
SELECT 
    v.id AS venda_id,
    p.nome AS produto,
    v.quantidade,
    CONCAT('R$ ', FORMAT(v.valor_unitario, 2, 'pt_BR')) AS valor_unitario,
    CONCAT('R$ ', FORMAT(v.valor_total, 2, 'pt_BR')) AS valor_total,
    v.data_venda
FROM venda v
INNER JOIN produto p ON v.produto_id = p.id
ORDER BY v.data_venda DESC;

-- ============================================
-- CONSULTAS ÚTEIS
-- ============================================

-- Consultar saldo do caixa
SELECT * FROM v_status_caixa;

-- Consultar todos os produtos
SELECT 
    id,
    nome,
    quantidade AS estoque,
    CONCAT('R$ ', FORMAT(preco, 2, 'pt_BR')) AS preco
FROM produto
ORDER BY nome;

-- Consultar produtos com estoque baixo
SELECT * FROM v_estoque_baixo;

-- ============================================
-- EXEMPLOS DE USO DA PROCEDURE
-- ============================================

-- Exemplo 1: Vender 2 Notebooks (ID = 1)
CALL realizar_venda(1, 2, @msg, @ok);
SELECT @ok AS sucesso, @msg AS mensagem;

-- Exemplo 2: Vender 5 Mouses (ID = 2)
CALL realizar_venda(2, 5, @msg, @ok);
SELECT @ok AS sucesso, @msg AS mensagem;

-- Exemplo 3: Tentar vender mais do que tem em estoque (deve FALHAR)
CALL realizar_venda(1, 999, @msg, @ok);
SELECT @ok AS sucesso, @msg AS mensagem;

-- ============================================
-- CONSULTAS DE VERIFICAÇÃO
-- ============================================

-- Ver saldo atual do caixa
SELECT saldo FROM caixa WHERE id = 1;

-- Ver estoque atual de todos os produtos
SELECT nome, quantidade FROM produto;

-- Ver histórico de vendas
SELECT * FROM v_relatorio_vendas;

-- Ver total vendido
SELECT 
    COUNT(*) AS total_vendas,
    SUM(quantidade) AS itens_vendidos,
    CONCAT('R$ ', FORMAT(SUM(valor_total), 2, 'pt_BR')) AS total_vendido
FROM venda;