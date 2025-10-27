<?php
require_once "entidades/carta.php";
require_once "conexao.php";

$cnn = GetConn();

$query = "SELECT * FROM CARTAS";

$stmt = $cnn->prepare($query);

$stmt->execute();

$res = $stmt->fetchall(PDO::FETCH_ASSOC);
$cartas = [];

foreach($res as $carta) {
    array_push($cartas, new Cartas(
        $carta["ID"],
        $carta["NOME"],
        $carta["DESCRICAO"],
        $carta["IMAGEM_PATH"]
    ) )
;
}

?>