<?php
declare(strict_types=1);

$dbHost = '127.0.0.1';
$dbName = 'POKEDEX';
$dbUser = 'root';
$dbPass = 'root';

function getPdo(): PDO {
	static $pdo = null;
	if ($pdo instanceof PDO) {
		return $pdo;
	}

	global $dbHost, $dbName, $dbUser, $dbPass;
	$dsn = "mysql:host={$dbHost};dbname={$dbName};charset=utf8mb4";
	$options = [
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
		PDO::ATTR_EMULATE_PREPARES => false,
	];

	$pdo = new PDO($dsn, $dbUser, $dbPass, $options);
	return $pdo;
}

?>

