<?php
if ($_POST) {
    if (isset($_GET["color"])) {
        setcookie("cor", $_GET["color"], time() + 3600, "/");
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <section>
    <a class='vermelho' href="<?= "index.php?color=red" ?>"></a>
    <br>
    <a class='azul' href="<?="index.php?color=blue"?>"></a>
    <br>
    <a class='verde' href="<?= "index.php?color=green"?>"></a>
    <?php echo  __DIR__ ?>
    <br>
    </section>

    <form action="" method='post'>
        <button>Salvar Cor</button>
        <?php $cor = $_GET["color"] ?? null ?>
    </form>

    <div style="color: <?=
        isset($_COOKIE["cor"]) ? $_COOKIE["cor"] : ($_GET['color'] ?? "black")
    ?>;">
        Texto com cor escolhida
    </div>

</body>
</html>
