<?php
require_once "cnn.php";

// Buscar todos os funcionários
$sql = "SELECT * FROM funcionarios ORDER BY data_cadastro DESC";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$funcionarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crachás Cadastrados - SENAI</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container-exibir">
        <div class="header-exibir">
            <div class="logo-senai-small">
                <img src="imagens/senai-logo-0.webp" alt="Logo SENAI">
            </div>
            <h1>Crachás Cadastrados</h1>
            <a href="index.php" class="btn-voltar">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Novo Cadastro
            </a>
        </div>

        <?php if (isset($_GET['sucesso'])): ?>
            <div class="alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Funcionário cadastrado com sucesso!
            </div>
        <?php endif; ?>

        <div class="crachas-grid">
            <?php if (empty($funcionarios)): ?>
                <div class="empty-state">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <h3>Nenhum crachá cadastrado</h3>
                    <p>Cadastre o primeiro funcionário para começar</p>
                    <a href="index.php" class="btn-primary">Cadastrar Agora</a>
                </div>
            <?php else: ?>
                <?php foreach ($funcionarios as $func): ?>
                    <div class="cracha">
                        <div class="cracha-header">
                            <img src="imagens/senai-logo-0.webp" alt="SENAI" class="cracha-logo">
                        </div>
                        
                        <div class="cracha-foto">
                            <img src="imagens/<?= htmlspecialchars($func['foto']) ?>" alt="Foto de <?= htmlspecialchars($func['nome']) ?>">
                        </div>
                        
                        <div class="cracha-info">
                            <h3 class="cracha-nome"><?= htmlspecialchars($func['nome']) ?></h3>
                            <p class="cracha-tipo">FUNCIONÁRIO</p>
                            <p class="cracha-id">ID: <?= str_pad($func['id'], 6, '0', STR_PAD_LEFT) ?></p>
                        </div>
                        
                        <div class="cracha-footer">
                            <div class="cracha-barcode">
                                <div class="bar"></div>
                                <div class="bar"></div>
                                <div class="bar"></div>
                                <div class="bar"></div>
                                <div class="bar"></div>
                                <div class="bar"></div>
                                <div class="bar"></div>
                                <div class="bar"></div>
                            </div>
                            <p class="cracha-data">Cadastro: <?= date('d/m/Y', strtotime($func['data_cadastro'])) ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>
