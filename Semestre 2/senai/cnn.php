<?php

$pdo = Conectar();

function Conectar()
{
    $host = "localhost"; 
    $dbname = "escola"; // Use o mesmo banco ou crie um novo 'senai'
    $port = "3306"; 
    $user = "root"; 
    $password = "root";
    
    $dsn = "mysql:host=$host;port=$port;dbname=$dbname";

    try {
        $pdo = new PDO($dsn, $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;

    } catch (PDOException $e) {
        echo "Erro de conexão: " . $e->getMessage();
        die();
    }
}

?>
