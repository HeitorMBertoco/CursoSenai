<?php
require_once "cnn.php";
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Crachá - SENAI</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="form-container">
            <div class="logo-senai">
                <img src="imagens/senai-logo-0.webp" alt="Logo SENAI">
            </div>
            
            <h1>Cadastro de Crachá</h1>
            <p class="subtitle">Sistema de Identificação de Funcionários</p>

            <form action="salvar.php" method="post" enctype="multipart/form-data" class="form-cracha">
                <div class="form-group">
                    <label for="nome">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        Nome Completo do Funcionário
                    </label>
                    <input type="text" name="nome" id="nome" required placeholder="Digite o nome completo">
                </div>

                <div class="form-group">
                    <label for="foto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                        Foto do Funcionário
                    </label>
                    <input type="file" name="foto" id="foto" accept="image/*" required>
                    <small>Formatos aceitos: JPG, PNG, GIF, WEBP (máx. 5MB)</small>
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn-submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Cadastrar Funcionário
                    </button>
                    <a href="exibir.php" class="btn-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        Ver Crachás Cadastrados
                    </a>
                </div>
            </form>
        </div>
    </div>
</body>
</html>
