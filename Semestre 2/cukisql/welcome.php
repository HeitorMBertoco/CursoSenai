<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'myDB');
define('DB_USER', 'root');
define('DB_PASS', 'root');
$usuario = $_COOKIE['user_auth'] ?? null;
$senha_cookie = $_COOKIE['pass_auth'] ?? null;
$tema = $_COOKIE['user_theme'] ?? 'claro'; 

if (!$usuario || !$senha_cookie) {
    header('Location: login.php');
    exit;
}
try {
    $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $pdo->prepare("SELECT password FROM users WHERE username = ?");
    $stmt->execute([$usuario]);
    $user_data = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$user_data || $senha_cookie !== $user_data['password']) {
        setcookie('user_auth', '', time() - 3600);
        setcookie('pass_auth', '', time() - 3600);
        header('Location: login.php');
        exit;
    }
    $mensagem = "Bem-vindo(a), " . htmlspecialchars($usuario) . "!";

} catch (PDOException $e) {
    $mensagem = "Erro interno do servidor. Tente novamente.";
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>Bem-Vindo</title>

    <style>
        .tema-claro { background-color: white; color: black; }
        .tema-escuro { background-color: black; color: white; }
    </style>
    <link rel="stylesheet" href="style.css">
</head>

<body class="<?php echo 'tema-' . htmlspecialchars($tema); ?>">
    <h1><?php echo $mensagem; ?></h1>
    <p>O tema escolhido é: <?php echo htmlspecialchars(ucfirst($tema)); ?></p>
    <p>Seus cookies de usuário e senha expiram em 1 minuto.</p>
    <p>O cookie de tema expira em 30 segundos.</p>
</body>
</html>