<?php

require_once "cnn.php";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="body index">
    <?php
// get
$sql = "select * from presos";
$stmt = $pdo->prepare($sql);
$stmt->execute();
?>

<form action="exibirimg.php" method="post" class="form" enctype='multipart/form-data'>
    <h1>Cadastrar Prisioneiro</h1>
    <label for="nome">Nome</label>
    <input type="text" name="nome" id="" class='inputnome'>
    <div class="containerInps   ">
    <input type="file" name="arq" id="">
    
    <input type="submit" name="" id="" >
    </div>

    <a href="presos.php">Ver as Celas</a>
</form>    
</body>
</html>