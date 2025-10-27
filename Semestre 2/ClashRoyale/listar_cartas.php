<?php
require_once 'dados/cartas.php';
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Lista de Cartas</title>
    <link rel="stylesheet" href="listar_cartas.css">
</head>

<body>

    <div class="container">
        <h1>Deck - Lista de Cartas</h1>

        <a href="exibir_cartas.php" class="botao-adicionar">+ Adicionar Nova Carta</a>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Foto</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($cartas as $carta): ?>
                <tr>
                    <td><?= $carta->Getid() ?></td>
                    <td>
                        <img src="imagens/<?= htmlspecialchars($carta->Getnomeimage()) ?>" 
                             alt="<?= htmlspecialchars($carta->Getnome()) ?>">
                    </td>
                    <td><?= htmlspecialchars($carta->Getnome()) ?></td>
                    <td>
                        <a href="exibir_cartas.php?id=<?= $carta->Getid() ?>" 
                           class="botao-visualizar">Editar</a>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</body>

</html>