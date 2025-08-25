<?php 
require_once 'usuario.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try{
        $new_user = new Usuario(
            usuario: $usuario = $_POST['usuario'],
            email: $email = $_POST['email'],
            senha: $senha = $_POST['senha'],
            sobrenome: $sobrenome = $_POST['sobrenome'],
            nome: $nome = $_POST['nome']
        );  

        $mensagem = "Usuário cadastrado com sucesso!<br>";
        $mensagem .= "Usuário: " . $new_user->getUsuario() . "<br>";
        $mensagem .= "Nome: " . $new_user->getNome() . "<br>";
        $mensagem .= "Sobrenome: " . $new_user->getSobrenome() . "<br>";
        $mensagem .= "Email: " . $new_user->getEmail() . "<br>";
        
    } catch (Exception $e) {
        $mensagem = "Erro ao cadastrar usuário: " . $e->getMessage();
    }
}


?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .form-container {
            background: #fff;
            padding: 30px 40px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            width: 350px;
        }

        .form-container h2 {
            text-align: center;
            margin-bottom: 25px;
            color: #333;
        }

        .form-container input[type="text"],
        .form-container input[type="email"],
        .form-container input[type="password"] {
            width: 100%;
            padding: 12px;
            margin: 8px 0 18px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }

        .form-container button {
            width: 100%;
            padding: 12px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }

        .form-container button:hover {
            background-color: #45a049;
        }

        .form-container p {
            text-align: center;
            margin-top: 15px;
            font-size: 14px;
            color: #555;
        }

        .form-container p a {
            color: #4CAF50;
            text-decoration: none;
        }

        .form-container p a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>Cadastro</h2>
        <form action='' method='POST'>
            <input type="text" name="usuario" placeholder="Usuário" required>
            <input type="text" name="nome" placeholder="Nome" required>
            <input type="text" name="sobrenome" placeholder="Sobrenome" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="senha" placeholder="Senha" required>
            <button type="submit">Cadastrar</button>
        </form>
        <p><?php echo $mensagem ?? ''; ?></p>
    </div>
</body>
</html>
