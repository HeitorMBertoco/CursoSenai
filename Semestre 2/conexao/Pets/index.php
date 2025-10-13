<?php
require_once 'Conexao.php';
require_once 'entidade/pet.php';
$connection = Conectar();
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $sql = "SELECT * FROM PET where ID = :id";
    $stmt = $connection->prepare($sql);
    $stmt->bindValue(":id", $_GET['id'] ?? null);
    $stmt->execute();
    $pet = $stmt->fetch(PDO::FETCH_ASSOC);
}else{
    $pet = null;
};






?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pets</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="" method="POST">
        <h1>Pets</h1>
        <input type="text" name="nome" id="nome" placeholder="Nome" value="<?php echo $pet['NOME'] ?? ''; ?>">
        <input type="text" name="idade" id="idade" placeholder="Idade" value="<?php echo $pet['IDADE'] ?? ''; ?>">
        <input type="text" name="raca" id="raca" placeholder="Raça" value="<?php echo $pet['RACA'] ?? ''; ?>">
        <input type="text" name="descricao" id="descricao" placeholder="Descrição da aparência" value="<?php echo $pet['DESCRICAO'] ?? ''; ?>">
        <input type="submit" name="submit" id="submit" value="Enviar">
    </form>
    <p><?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nome = $_POST['nome'];
        $idade = $_POST['idade'];
        $raca = $_POST['raca'];
        $descricao = $_POST['descricao'];

        $pet = new Pet($nome, $idade, $raca, $descricao);
        $pet->addPet($connection);
    }
    ?></p>

</body>
</html>