<?php
declare(strict_types=1);

function getDbConnection(): mysqli {
    $dbHost = '127.0.0.1';
    $dbUser = 'root';
    $dbPass = 'root';
    $dbName = 'loja';

    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    $conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
    $conn->set_charset('utf8mb4');
    return $conn;
}
