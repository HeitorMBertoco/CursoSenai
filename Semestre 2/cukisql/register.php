<?php

define('DB_HOST', 'localhost');
define('DB_NAME', 'myDB');
define('DB_USER', 'root');
define('DB_PASS', 'root');

$mensagem_status = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = trim($_POST['usuario'] ?? '');
    $senha   = $_POST['senha'] ?? '';
    $confirm_senha = $_POST['confirm_senha'] ?? '';
    if (empty($usuario) || empty($senha) || empty($confirm_senha)) {
        $mensagem_status = 'Erro: Todos os campos são obrigatórios.';
    } elseif ($senha !== $confirm_senha) {
        $mensagem_status = 'Erro: As senhas não coincidem.';
    } else {
        $senha_hashed = $senha;

        try {
            $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $stmt_check = $pdo->prepare("SELECT COUNT(*) FROM users WHERE username = ?");
            $stmt_check->execute([$usuario]);
            
            if ($stmt_check->fetchColumn() > 0) {
                $mensagem_status = 'Erro: Usuário já existe.';
            } else {
                $stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
                
                $stmt->bindParam(':username', $usuario);
                $stmt->bindParam(':password', $senha_hashed); 
                
                if ($stmt->execute()) {
                    header('Location: login.php?registered=true');
                    exit;
                } else {
                    $mensagem_status = 'Erro ao cadastrar usuário no banco de dados.';
                }
            }

        } catch (PDOException $e) {
            $mensagem_status = 'Erro de conexão/servidor: ' . $e->getMessage();
        }
    }
}
$tema_atual = $_COOKIE['user_theme'] ?? 'claro'; 

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>Cadastro de Usuário</title>
    <style>
        /* Definição dos temas */
        .tema-claro { 
            background-color: white; 
            color: black; 
        }
        .tema-escuro { 
            background-color: black; 
            color: white; 
        }
        /* Estilos básicos */
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            transition: background-color 0.5s, color 0.5s;
        }
        form {
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .tema-escuro form {
             border: 1px solid #444;
             background-color: #333;
        }
        .tema-claro form {
             background-color: #f9f9f9;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .form-group input {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
        }
        .status-message {
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 4px;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
    </style>
    <link rel="stylesheet" href="style.css">
</head>
<body class="tema-<?php echo htmlspecialchars($tema_atual); ?>">w

    <h1>Cadastro de Novo Usuário</h1>

    <?php if ($mensagem_status): ?>
        <div class="status-message error">
            <?php echo $mensagem_status; ?>
        </div>
    <?php endif; ?>

    <form action="register.php" method="POST">
        
        <div class="form-group">
            <label for="usuario">Usuário:</label>
            <input type="text" id="usuario" name="usuario" required 
                   value="<?php echo htmlspecialchars($usuario ?? ''); ?>">
        </div>

        <div class="form-group">
            <label for="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required>
        </div>
        
        <div class="form-group">
            <label for="confirm_senha">Confirmar Senha:</label>
            <input type="password" id="confirm_senha" name="confirm_senha" required>
        </div>

        <button type="submit" class="button">Cadastrar</button>
        
        <p style="text-align: center; margin-top: 15px;">
            <a href="login.php">Já tem conta? Faça Login</a>
        </p>
    </form>
</body>
</html>