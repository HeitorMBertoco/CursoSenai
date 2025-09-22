<?php
require_once 'Modelos/IArCondicionadoCarros.php';
require_once 'Modelos/IArCondicionadoPredial.php';



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ArFrio Monitor</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section class="painel">
        <h1>Historico de mudanças Predio</h1>
        <p>
        <?php
        $predio = new ArCondicionadoPredial();
        echo $predio->Ligar(). '<br>';
        echo $predio->DiminuirTemp(). '<br>';
        echo $predio->DiminuirTemp(). '<br>';
        echo $predio->AumentarTemp(). '<br>';
        echo $predio->Desligar(). '<br>';
        
        ?></p>
        <h1>Historico de Mudanças Carro</h1>
        <p>
            <?php
            $carro = new ArCondicionadoCarro();
            echo $carro->Ligar() . '<br>';
            echo $carro->DiminuirTemp() .'<br>';
            echo $carro->Desligar() . '<br>';
            ?>
        </p>

    </section>    

</body>
</html>