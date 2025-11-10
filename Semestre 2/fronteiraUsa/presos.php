<?php
require_once "cnn.php";
$sql = "select * from presos";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$presos = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="body">
    <?php
    foreach($presos as $p){
    echo"<div class='card'>
        <div class='cardnome'>
            <p>$p[nome]</p>
        </div>
        <div class='cardimg'>
            <img src='imagens/$p[imagem]' alt=''>
        </div>
        
    </div>";
    }
    ?>
</body>
</html>