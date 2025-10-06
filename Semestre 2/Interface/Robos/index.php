<?php
require_once 'Modelos/RoboLimpeza.php';
require_once 'Modelos/RoboAtendimento.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monitor de Robos 3000</title>
</head>
<body>
    <section class="container">
        
    <h1>Robo Limpeza</h1>
        <p>
            <?php
        $roboLimpeza = new RoboLimpeza(2010,'Exterminador do futuro');
        echo 'Ano de Lançamento '. $roboLimpeza->GetanoLancamento(). '<br>';
        echo 'Modelo '. $roboLimpeza->GetModelo().'<br>';
        echo 'Ultima varredura '. $roboLimpeza->GetDataUltimaVarredura(). "<br>";
        echo $roboLimpeza->Ligar(). "<br>";
        echo "". $roboLimpeza->AtivarAcao() ."<br>";
        echo $roboLimpeza->Desligar(). "<br>";
        echo "". $roboLimpeza->AtivarAcao() ."<br>";

        
        
        ?>
        </p>
        <h1>Robo Atendimento</h1>
        <p>
            <?php
        $roboatendimento = new RoboAteMdimento(2017,'Alien');
        echo 'Ano de Lançamento '. $roboatendimento->GetanoLancamento(). '<br>';
        echo 'Modelo '. $roboatendimento->GetModelo().'<br>';
        echo $roboatendimento->Ligar(). "<br>";
        echo "". $roboatendimento->AtivarAcao() ."<br>";
        echo $roboatendimento->Desligar(). "<br>";
        echo "". $roboatendimento->AtivarAcao() ."<br>";
        
        
        ?>
        </p>

    </section>
</body>
</html>