<?php
require_once "cnn.php";

// Verificar se o formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.php');
    exit;
}

// Criar diretório de imagens se não existir
$dir = __DIR__ . "/imagens/";
if (!file_exists($dir)) {
    mkdir($dir, 0777, true);
}

// Processar upload da foto
$foto = $_FILES["foto"];
$nome = $_POST["nome"];

// Validações
if (empty($nome)) {
    die("Erro: Nome do funcionário é obrigatório!");
}

if ($foto["error"] !== UPLOAD_ERR_OK) {
    die("Erro no upload da foto!");
}

// Validar tipo de arquivo
$tipos_permitidos = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg', 'image/webp'];
if (!in_array($foto["type"], $tipos_permitidos)) {
    die("Erro: Apenas imagens JPG, PNG, GIF ou WEBP são permitidas!");
}

// Validar tamanho (5MB máximo)
if ($foto["size"] > 5 * 1024 * 1024) {
    die("Erro: A foto não pode ter mais de 5MB!");
}

// Gerar nome único para o arquivo
$extensao = pathinfo($foto["name"], PATHINFO_EXTENSION);
$nome_arquivo = uniqid() . '_' . time() . '.' . $extensao;

// Salvar no banco de dados
try {
    $sql = "INSERT INTO funcionarios (nome, foto) VALUES (:nome, :foto)";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':foto', $nome_arquivo);
    $stmt->execute();
    
    // Mover arquivo para a pasta de imagens
    $destino = $dir . $nome_arquivo;
    if (move_uploaded_file($foto["tmp_name"], $destino)) {
        // Redirecionar para página de sucesso
        header('Location: exibir.php?sucesso=1');
        exit;
    } else {
        die("Erro ao salvar a foto no servidor!");
    }
    
} catch (PDOException $e) {
    die("Erro ao salvar no banco de dados: " . $e->getMessage());
}
?>
