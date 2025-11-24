
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>Login</title>
    <style>
        /* CSS para o tema claro */
        .tema-claro { background-color: white; color: black; }
        /* CSS para o tema escuro */
        .tema-escuro { background-color: black; color: white; }
    </style>
    <link rel="stylesheet" href="style.css">
</head>
<body class="tema-claro">
    <h1>Login do Sistema</h1>
    <form action="login.php" method="POST">
        <label for="usuario">Usuário:</label>
        <input type="text" id="usuario" name="usuario" required><br><br>

        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required><br><br>

        <label>Tema:</label>
        <input type="radio" id="claro" name="tema" value="claro" checked>
        <label for="claro">Claro (Fundo branco e fonte preta)</label><br>
        <input type="radio" id="escuro" name="tema" value="escuro">
        <label for="escuro">Escuro (Fundo preto e fonte branca)</label><br><br>

        <button type="submit">Entrar</button>
    </form>
</body>
</html>