

<?php

$host = 'localhost';
$dbname = 'loja_eletronica';
$username = 'root';  
$password = 'root';      

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Erro na conexão: " . $e->getMessage());
}


$mensagem = '';
$tipo_mensagem = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['realizar_venda'])) {
    $produto_id = (int)$_POST['produto_id'];
    $quantidade = (int)$_POST['quantidade'];
    
    try {
   
        $stmt = $pdo->prepare("CALL realizar_venda(:produto_id, :quantidade, @mensagem, @sucesso)");
        $stmt->bindParam(':produto_id', $produto_id, PDO::PARAM_INT);
        $stmt->bindParam(':quantidade', $quantidade, PDO::PARAM_INT);
        $stmt->execute();
        

        $result = $pdo->query("SELECT @sucesso as sucesso, @mensagem as mensagem")->fetch(PDO::FETCH_ASSOC);
        
        if ($result['sucesso']) {
            $mensagem = $result['mensagem'];
            $tipo_mensagem = 'success';
        } else {
            $mensagem = $result['mensagem'];
            $tipo_mensagem = 'error';
        }
        
        $pdo->query("SELECT 1");
        
    } catch(PDOException $e) {
        $mensagem = "Erro: " . $e->getMessage();
        $tipo_mensagem = 'error';
    }
}



$stmt = $pdo->query("SELECT saldo FROM caixa WHERE id = 1");
$caixa = $stmt->fetch(PDO::FETCH_ASSOC);
$saldo_caixa = $caixa['saldo'];


$stmt = $pdo->query("SELECT id, nome, quantidade, preco FROM produto ORDER BY nome");
$produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);


$stmt = $pdo->query("
    SELECT 
        v.id,
        p.nome as produto,
        v.quantidade,
        v.valor_total,
        v.data_venda
    FROM venda v
    INNER JOIN produto p ON v.produto_id = p.id
    ORDER BY v.data_venda DESC
    LIMIT 10
");
$vendas = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema PDV - Loja de Eletrônicos</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>🛒 Sistema PDV - Loja de Eletrônicos</h1>
        
        <div class="dashboard">
            
            <div class="card">
                <h2>💰 Caixa</h2>
                <div class="saldo">R$ <?php echo number_format($saldo_caixa, 2, ',', '.'); ?></div>
                <div style="text-align: center; color: #666; margin-top: 10px;">
                    <small>Atualizado em tempo real</small>
                </div>
            </div>

          
            <div class="card">
                <h2>🛍️ Nova Venda</h2>
                
                <?php if ($mensagem): ?>
                    <div class="message <?php echo $tipo_mensagem; ?>">
                        <?php echo htmlspecialchars($mensagem); ?>
                    </div>
                <?php endif; ?>
                
                <form method="POST" id="formVenda">
                    <div class="form-group">
                        <label for="produto_id">Produto:</label>
                        <select id="produto_id" name="produto_id" required onchange="atualizarInfo()">
                            <option value="">Selecione um produto</option>
                            <?php foreach ($produtos as $produto): ?>
                                <?php if ($produto['quantidade'] > 0): ?>
                                    <option 
                                        value="<?php echo $produto['id']; ?>"
                                        data-preco="<?php echo $produto['preco']; ?>"
                                        data-estoque="<?php echo $produto['quantidade']; ?>">
                                        <?php echo htmlspecialchars($produto['nome']); ?> - 
                                        R$ <?php echo number_format($produto['preco'], 2, ',', '.'); ?>
                                    </option>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </select>
                    </div>

                    <div id="produtoInfo" class="produto-info">
                        <p><strong>Preço:</strong> R$ <span id="infoPreco">0,00</span></p>
                        <p><strong>Estoque:</strong> <span id="infoEstoque">0</span> unidades</p>
                    </div>

                    <div class="form-group">
                        <label for="quantidade">Quantidade:</label>
                        <input 
                            type="number" 
                            id="quantidade" 
                            name="quantidade" 
                            min="1" 
                            required 
                            oninput="calcularTotal()">
                    </div>

                    <div class="total-venda" id="totalVenda">Total: R$ 0,00</div>

                    <button type="submit" name="realizar_venda">Finalizar Venda</button>
                </form>
            </div>


            <div class="card">
                <h2>📦 Estoque de Produtos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Qtd</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($produtos as $produto): ?>
                            <tr>
                                <td><?php echo htmlspecialchars($produto['nome']); ?></td>
                                <td class="<?php echo $produto['quantidade'] < 10 ? 'estoque-baixo' : 'estoque-ok'; ?>">
                                    <?php echo $produto['quantidade']; ?>
                                </td>
                                <td>R$ <?php echo number_format($produto['preco'], 2, ',', '.'); ?></td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>


        <div class="card historico-completo">
            <h2>📊 Últimas Vendas</h2>
            <?php if (count($vendas) > 0): ?>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Valor Total</th>
                            <th>Data/Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($vendas as $venda): ?>
                            <tr>
                                <td><span class="badge badge-success">#<?php echo $venda['id']; ?></span></td>
                                <td><?php echo htmlspecialchars($venda['produto']); ?></td>
                                <td><?php echo $venda['quantidade']; ?></td>
                                <td><strong>R$ <?php echo number_format($venda['valor_total'], 2, ',', '.'); ?></strong></td>
                                <td><?php echo date('d/m/Y H:i:s', strtotime($venda['data_venda'])); ?></td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            <?php else: ?>
                <p style="text-align: center; color: #666; padding: 20px;">
                    Nenhuma venda realizada ainda.
                </p>
            <?php endif; ?>
        </div>
    </div>

    <script>
        function atualizarInfo() {
            const select = document.getElementById('produto_id');
            const option = select.options[select.selectedIndex];
            const info = document.getElementById('produtoInfo');
            
            if (option.value) {
                const preco = parseFloat(option.dataset.preco);
                const estoque = parseInt(option.dataset.estoque);
                
                document.getElementById('infoPreco').textContent = preco.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
                document.getElementById('infoEstoque').textContent = estoque;
                document.getElementById('quantidade').max = estoque;
                
                info.style.display = 'block';
                calcularTotal();
            } else {
                info.style.display = 'none';
                document.getElementById('totalVenda').textContent = 'Total: R$ 0,00';
            }
        }

        function calcularTotal() {
            const select = document.getElementById('produto_id');
            const option = select.options[select.selectedIndex];
            const quantidade = parseInt(document.getElementById('quantidade').value) || 0;
            
            if (option.value && quantidade > 0) {
                const preco = parseFloat(option.dataset.preco);
                const total = preco * quantidade;
                
                document.getElementById('totalVenda').textContent = 
                    'Total: R$ ' + total.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });
            }
        }

    </script>
</body>
</html>