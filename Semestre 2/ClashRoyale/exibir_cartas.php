<?php
require_once 'entidades/carta.php';

// Variáveis para o modo de edição
$CartasEdicao = null;
$modoEdicao = false;

// Verificar se está editando (recebeu ID via GET)
if (isset($_GET['id']) && !empty($_GET['id'])) {
    $CartasEdicao = Cartas::BuscarPorId($_GET['id']);
    if ($CartasEdicao) {
        $modoEdicao = true;
    }
}

// Processar exclusão
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['acao']) && $_POST['acao'] == 'excluir') {
    Cartas::Excluir($_POST['id']);
    header("Location: listar_cartas.php");
    exit;
}

// Processar formulário (salvar ou atualizar)
if ($_SERVER['REQUEST_METHOD'] == 'POST' && (!isset($_POST['acao']) || $_POST['acao'] != 'excluir')) {
    if (isset($_POST['id']) && !empty($_POST['id'])) {
        // ATUALIZAR
        $Cartas = new Cartas(
            $_POST['id'], 
            $_POST['nome'], 
            $_POST['descricao'], 
            $_POST['fotoNome']
        );
        $Cartas->Atualizar();
        header("Location: listar_cartas.php");
        exit;
    } else {
        // SALVAR NOVO
        $Cartas = new Cartas(
            null, 
            $_POST['nome'], 
            $_POST['descricao'], 
            $_POST['fotoNome']
        );
        $Cartas->Salvar();
        header("Location: listar_cartas.php");
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Carta <?php isset($CartasEdicao) ? $CartasEdicao->Getnome() : '' ?></title>
    <link rel="stylesheet" href="exibir_cartas.css">
</head>

<body>
    <form method="post">
        <section>
            <h1>Carta Nº <?= $modoEdicao ? $CartasEdicao->Getid() : 'Novo' ?></h1>

            <!-- Campo oculto para ID (usado na atualização) -->
            <?php if ($modoEdicao): ?>
                <input type="hidden" name="id" value="<?= $CartasEdicao->Getid() ?>">
            <?php endif; ?>

            <label for="nome">Nome:</label>
            <input type="text" name="nome" id="nome" 
                   value="<?= $modoEdicao ? htmlspecialchars($CartasEdicao->Getnome()) : '' ?>" 
                   required>

            <label for="descricao">Descrição:</label>
            <textarea name="descricao" id="descricao" required><?= $modoEdicao ? htmlspecialchars($CartasEdicao->Getdescricao()) : '' ?></textarea>

            <label for="foto">Foto:</label>
            <input type="file" name="foto" id="foto" accept="image/*" <?= $modoEdicao ? '' : 'required' ?>>
            <input type="hidden" name="fotoNome" id="fotoNome" 
                   value="<?= $modoEdicao ? htmlspecialchars($CartasEdicao->Getnomeimage()) : '' ?>" readonly>

            <input type="submit" value="<?= $modoEdicao ? 'Atualizar' : 'Salvar' ?>">
        </section>

        <section>
            <img id="preview" 
                 src="<?= $modoEdicao ? 'imagens/' . htmlspecialchars($CartasEdicao->Getnomeimage()) : 'imagens/interrogação.png' ?>" 
                 alt="Pré-visualização da imagem">
        </section>
    </form>

    <?php if ($modoEdicao): ?>
    <form method="post" onsubmit="return confirm('Tem certeza que deseja excluir esta carta?');">
        <input type="hidden" name="id" value="<?= $CartasEdicao->Getid() ?>">
        <input type="hidden" name="acao" value="excluir">
        <button type="submit" class="botao-excluir">Excluir Carta</button>
    </form>
    <?php endif; ?>

    <script>
        const inputFoto = document.getElementById('foto');
        const inputFotoNome = document.getElementById('fotoNome');
        const preview = document.getElementById('preview');

        inputFoto.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                inputFotoNome.value = file.name;
                const reader = new FileReader();
                reader.onload = function(e) {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            } else {
                inputFotoNome.value = '';
                preview.src = 'imagens/interrogação.png';
            }
        });
    </script>
</body>

</html>