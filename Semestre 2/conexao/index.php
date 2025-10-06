<?php
$ip = 'localhost';
$porta = '3306';
$banco = 'ESCOLA';
$usr = 'root';
$snh = 'root';

$stringConn = "mysql:host=$ip;port=$porta;dbname=$banco";

try {

    $cnn = new PDO($stringConn, $usr, $snh);
} catch (PDOException $e) {
    echo '' . $e;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>a</title>
</head>

<body>

    <form action="" method="post">
        <input type="text" name="nome" id="">
        <input type="text" name="idade" id="">
        <input type="submit">

    </form>
    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $idade = $_POST['idade'];
    $query = "insert into aluno (nome, idade) values (:nome, :idade);";

    $stmt = $cnn->prepare($query);

    $stmt->bindValue(":nome", $nome);
    $stmt->bindValue(":idade", $idade);

    $stmt->execute();
}

    
    ?>

    <div>
        <?php
        $query = 'select * from aluno';
        foreach ($cnn->query($query) as $valor) {
            print_r($valor['nome']);
            echo '<br>';
            print_r($valor['idade']);
            echo '<hr style="background-color:blue;">';
        } ?>
    </div>




</body>

</html>