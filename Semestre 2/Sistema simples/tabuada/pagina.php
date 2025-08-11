<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabuada | Carrinho</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../geral.css">
</head>
<body>
    <h1>Digite um número pra ver a tabuada</h1>
    <form action="" method="POST">
        <input type="number" name="numero" id="">
        <input type="submit" name="" id="">
    </form>
     <?php 
     if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $numero = $_POST['numero'];
        echo "<h1> Tabuada do número: $numero (by Heitor)</h1>";
        
        echo "<table>";
            echo "<thead>";
            echo "<tr>";
            echo "<th>Multiplicação</th>";
            echo "<th>Resultado</th>";
            echo "</tr>";
            echo "</thead>";

            echo "<tbody>";
            for ($i = 1; $i <=10; $i++){
                $resultado = $numero * $i;
                echo "<tr>";
                echo "<td> $numero x $i </td>";
                echo "<td> $resultado </td>";
                echo "</tr>";
            }
            echo "</tbody>";


        echo "</table>"; 
        }
    ?>
</body>
</html>