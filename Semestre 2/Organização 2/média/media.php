<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media | Menu</title>
    <link rel="stylesheet" href="../geral.css">
</head>
<body>
    <form action="" method="POST" class="containermed">
        <label for="n1">Nota 1</label>
        <input type="number" name="n1" id="n1">
        <label for="n2">Nota 2</label>
        <input type="number" name="n2" id="n2">
        <label for="n3">Nota 3</label>
        <input type="number" name="n3" id="n3">
        <label for="n4">Nota 4</label>
        <input type="number" name="n4" id="n4">
        <input type="submit" name="" id="">
        <p><?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $media = ($_POST['n1'] + $_POST['n2'] + $_POST['n3'] + $_POST['n4']) / 4;
            echo''. $media .'';
        }
        
        
        
        
        ?></p>
    </form>
</body>
</html>