<?php
require_once "Conexao.php";
require_once "entidades/localizacao.php";
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <form action="" method="post">
        <h1>localização</h1>

        <label for="nome">Nome:</label><br>
        <input type="text" name="nome" id="nome" class='normal'><br>
        <label for="desc">Descrição:</label><br>
        <input type="text" name="desc" id="desc" class='normal'><br>
        <input type="submit" name="" id="" value='Salvar' class='submit'>

    </form>
    <?php
    $connection = Conectar();
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $nome = $_POST["nome"];
            $desc = $_POST["desc"];
            $loc = new Localizacao($nome, $desc);
            $loc->addLoc($connection);
            
        }
        
            
    
    
    
    ?>
</body>
</html>