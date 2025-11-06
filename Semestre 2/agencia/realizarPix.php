<?php
require_once 'conexao.php';

$conta_origem = isset($_POST['conta_origem']) ? $_POST['conta_origem'] : null;
$conta_destino = isset($_POST['conta_destino']) ? $_POST['conta_destino'] : null;
$valor = isset($_POST['valor']) ? $_POST['valor'] : null;

$conexao->beginTransaction();

try {
    $sql = "UPDATE CONTA_BANCARIA SET SALDO = SALDO - :P_VALOR WHERE NUMERO = :P_NUMERO_ORIGEM";
    $comando = $conexao->prepare($sql);
    $comando->bindParam(":P_NUMERO_ORIGEM", $conta_origem); 
    $comando->bindParam(":P_VALOR", $valor);
    $comando->execute();
    $sql = "UPDATE CONTA_BANCARIA SET SALDO = SALDO + :P_VALOR WHERE NUMERO = :P_NUMERO_DESTINO";
    $comando = $conexao->prepare($sql);
    $comando->bindParam(":P_NUMERO_DESTINO", $conta_destino);   
    $comando->bindParam(":P_VALOR", $valor);
    $comando->execute();
    $conexao->commit();
    $mensagem = "PIX realizado com sucesso!";
} catch (Exception $e) {
    $conexao->rollBack();
    $mensagem = "Erro ao realizar PIX: " . $e->getMessage();
}
$sql = "SELECT NUMERO, PROPRIETARIO, SALDO FROM CONTA_BANCARIA";
$comando = $conexao->prepare($sql);
$comando->execute();
$lista_contas = $comando->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado do PIX</title>
    <link rel="stylesheet" href="realizarPix.css">
</head>
<body>
    <div class="status">
        <?= $mensagem ?>
    </div>

    <table>
        <thead>
            <tr>
                <th>NÚMERO</th>
                <th>PROPRIETÁRIO</th>
                <th>SALDO</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($lista_contas as $conta): ?>
                <tr>
                    <td><?= $conta['NUMERO'] ?></td>
                    <td><?= $conta['PROPRIETARIO'] ?></td>
                    <td>
                        R$ <?= number_format($conta['SALDO'], 2, ',', '.') ?>

                        <?php if ($conta['NUMERO'] === $conta_origem): ?>
                            <span class="valor-movimento negativo">(- R$ <?= number_format($valor, 2, ',', '.') ?>)</span>
                        <?php elseif ($conta['NUMERO'] === $conta_destino): ?>
                            <span class="valor-movimento positivo">(+ R$ <?= number_format($valor, 2, ',', '.') ?>)</span>
                        <?php endif; ?>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

    <div class="voltar">
        <a href="index.php">← Voltar</a>
    </div>
</body>
</html>
