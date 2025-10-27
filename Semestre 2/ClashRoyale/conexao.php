<?php
function GetConn() {
    $srv = '127.0.0.1:3306';
    $bcd = 'colecao';
    $usr = 'root';
    $pswrd = 'root';

    $cnn = "mysql:host=$srv;dbname=$bcd";

    $pdo = new PDO($cnn, $usr, $pswrd);
    return $pdo;

}



?>