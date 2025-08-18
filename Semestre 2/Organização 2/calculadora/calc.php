<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora | Menu</title>
    <link rel="stylesheet" href="../geral.css">
    <style>
        body{
            display: flex;
            justify-content: center;
        }


    </style>
</head>
<body>
    <form action="" method="POST" class="containercalc">
        <label for="num1">Numero 1</label>
        <input type="number" name="num1" id="num1">
        <label for="num2">Numero 2</label>
        <input type="number" name="num2" id="num2">
        <p>Selecione a Operação:</p>
        <select name="op" id="">
            <option value="soma">Soma</option>
            <option value="mult">Multiplicação</option>
        </select>
        <input type="submit" name="" id="">
    </form>
    <p><?php 
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($_POST["op"] == "soma"){
            $result = $_POST['num1'] + $_POST['num2'];
            echo $result;



        }
        else {
            $result = $_POST['num1'] * $_POST['num2'];
            echo $result;

        }
    }
    
    
    
    
    
    
    ?></p>
</body>
</html>