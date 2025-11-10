<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $dir = __DIR__. "/imagens/";
if(!file_exists($dir)) {
    mkdir($dir, 0777, true);
}
$arq = $_FILES["arquivo"];
$nmarq = $arq["name"];
$tparq = $arq["type"];
    
$destino_arq = $dir . $nmarq;

move_uploaded_file($arq["tmp_name"], $destino_arq);
    ?>

    <a href="index.php">Voltar</a>
    <img src="imagens/<?= $nmarq?>" alt="">
</body>
</html>