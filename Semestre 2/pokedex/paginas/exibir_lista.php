<?php

require_once __DIR__ . '/conexao.php';

$pdo = getPdo();

$busca = isset($_GET['busca']) ? trim((string)$_GET['busca']) : '';
$geracao = isset($_GET['geracao']) && in_array((int)$_GET['geracao'], [1, 2, 3], true) ? (int)$_GET['geracao'] : 1;


$rangeInicio = $geracao === 2 ? 152 : ($geracao === 3 ? 252 : 1);
$rangeFim = $geracao === 2 ? 251 : ($geracao === 3 ? 386 : 151);


$sql = "
    SELECT
        p.NUMERO,
        p.NOME,
        p.ARQ_IMAGEM AS IMG_POKEMON,
        t1.ARQ_IMAGEM AS IMG_TIPO1,
        t2.ARQ_IMAGEM AS IMG_TIPO2
    FROM pokemon p
    LEFT JOIN tipo t1 ON t1.ID = p.TIPO_1
    LEFT JOIN tipo t2 ON t2.ID = p.TIPO_2
";

$params = [];

$sql .= " WHERE p.NUMERO BETWEEN :rangeInicio AND :rangeFim";
$params[':rangeInicio'] = $rangeInicio;
$params[':rangeFim'] = $rangeFim;
if ($busca !== '') {
	$isNumeric = ctype_digit($busca);
	$sql .= "
		AND (
			" . ($isNumeric ? "p.NUMERO = :num OR " : "") . "
			p.NOME LIKE :q1 OR
			t1.NOME LIKE :q2 OR
			t2.NOME LIKE :q3
		)
	";
	if ($isNumeric) {
		$params[':num'] = (int)$busca;
	}
	$like = '%' . $busca . '%';
	$params[':q1'] = $like;
	$params[':q2'] = $like;
	$params[':q3'] = $like;
}

$sql .= " ORDER BY p.NUMERO ASC";

$stmt = $pdo->prepare($sql);
$stmt->execute($params);
$lista_pokemons = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>
    <link rel="stylesheet" href="exibir_lista.css">
</head>

<body>
    <h1>Pokédex - Geração <?= $geracao ?></h1>

    <nav>
        <?php
		$buscaParam = $busca !== '' ? ('&busca=' . urlencode($busca)) : '';
		$prevGeracao = $geracao === 2 ? 1 : ($geracao === 3 ? 2 : 3);
		$nextGeracao = $geracao === 1 ? 2 : ($geracao === 2 ? 3 : 2);
	?>
        <a href="?geracao=<?= $prevGeracao ?><?= $buscaParam ?>" class="botaoGen Gen2" aria-label="Geração anterior">&#8592;</a>
        <a href="?geracao=<?= $nextGeracao ?><?= $buscaParam ?>" class="botaoGen Gen1" aria-label="Próxima geração">&#8594;</a>
    </nav>

    <form method="get">
        <input type="hidden" name="geracao" value="<?= $geracao ?>">
        <input type="text" name="busca" placeholder="Pesquise por número, nome ou tipo..." value="<?= $busca ?>">
        <button type="submit">Buscar</button>
    </form>

    <main>
        <?php foreach ($lista_pokemons as $pokemon): ?>
            <div>
                <div>
                    <span><?= $pokemon['NUMERO'] ?></span>
                    <span><?= $pokemon['NOME'] ?></span>
                </div>

                <img src="../imagens/pokemons/<?= $pokemon['IMG_POKEMON'] ?>" alt="<?= $pokemon['NOME'] ?>">

                <div>
                    <?php if ($pokemon['IMG_TIPO1']): ?>
                        <img src="../imagens/tipos/<?= $pokemon['IMG_TIPO1'] ?>" alt="Tipo 1">
                    <?php endif; ?>
                    <?php if ($pokemon['IMG_TIPO2']): ?>
                        <img src="../imagens/tipos/<?= $pokemon['IMG_TIPO2'] ?>" alt="Tipo 2">
                    <?php endif; ?>
                </div>
            </div>
        <?php endforeach; ?>
    </main>
</body>

</html>