<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Altura | Menu</title>
    <link rel="stylesheet" href="../geral.css">
</head>
<body class="bodyalt">
    <h4>Valide Sua altura</h4>

    <img src="../assets/escada.png" alt="">
    
    <form method="POST" action="" class="containeraltura">
        <input type="numero" name="altura" id="">
        <input type="submit" name="" id="">
    </form>
    <p>
        <?php 
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
             if ($_POST["altura"] >= 1.5) {
                echo "acesso liberado";
             }
             else {
                echo "acesso negado";
             };
        }
        
        
        
        
        ?>
    </p>
</body>
</html>