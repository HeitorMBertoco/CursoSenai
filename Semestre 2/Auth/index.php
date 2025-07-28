<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <div class="container">
        <form action="auth.php" method="post">
        <input type="text" name="name" id="n" placeholder="Usuário" required>
        <input type="password" name="senha" id="senha" placeholder="Senha" required>
        <button onclick="auth()"> Enviar </button>
        </form>
    </div>
</body>
</html>