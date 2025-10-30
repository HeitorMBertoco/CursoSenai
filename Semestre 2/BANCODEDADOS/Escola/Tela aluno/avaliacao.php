<?php
$dbHost = '127.0.0.1';
$dbUser = 'root';
$dbPass = 'root';
$dbName = 'ESCOLA';

$baseSelect = "SELECT 
    MATERIA, ALUNO,
    SUM(NOTA) AS SOMA,
    AVG(NOTA) AS MEDIA,
    CASE WHEN AVG(NOTA) >= 7 THEN 'APROVADO' ELSE 'REPROVADO' END AS SITUACAO
FROM AVALIACAO
GROUP BY MATERIA, ALUNO
ORDER BY MATERIA, ALUNO";

$index = isset($_GET['i']) ? (int)$_GET['i'] : 0;
if ($index < 0) {
    $index = 0;
}

$conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
$conn->set_charset('utf8');

$countSql = 'SELECT COUNT(*) AS total FROM (' . $baseSelect . ') AS sub';
$countResult = $conn->query($countSql);
$countRow = $countResult->fetch_assoc();
$total = (int)$countRow['total'];

if ($index >= $total) { $index = max(0, $total - 1); }

$offset = $index;
$rowSql = $baseSelect . ' LIMIT ' . $offset . ', 1';
$rowResult = $conn->query($rowSql);
$row = $rowResult->fetch_assoc();

$hasPrev = $index > 0;
$hasNext = $index + 1 < $total;
$prevI = $hasPrev ? $index - 1 : 0;
$nextI = $hasNext ? $index + 1 : $index;
?>
<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Avaliação - Navegação de Registros</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Avaliação</h1>
        <div class="nav">
            <?php if ($hasPrev): ?>
                <a href="?i=<?php echo (int)$prevI; ?>">&#9664; Anterior</a>
            <?php else: ?>
                <span>&#9664; Anterior</span>
            <?php endif; ?>
            <?php if ($hasNext): ?>
                <a href="?i=<?php echo (int)$nextI; ?>">Próximo &#9654;</a>
            <?php else: ?>
                <span>Próximo &#9654;</span>
            <?php endif; ?>
        </div>
    </header>

    <p><strong>Registro:</strong> <?php echo $total > 0 ? ((int)$index + 1) : 0; ?> de <?php echo (int)$total; ?></p>

    <?php if ($total === 0 || !$row): ?>
        <div class="empty">Nenhum registro encontrado para o SELECT informado.</div>
    <?php else: ?>
        <table>
            <tbody>
            <?php foreach ($row as $col => $val): ?>
                <tr>
                    <th><?php echo htmlspecialchars((string)$col); ?></th>
                    <td><?php echo htmlspecialchars($val === null ? 'NULL' : (string)$val); ?></td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>

    
</body>
</html>


