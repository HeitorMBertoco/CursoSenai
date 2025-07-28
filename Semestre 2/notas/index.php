<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
    <div class="container">
    <form method="post" action="" >
        <input type="number" name="nota1" id="" max=10 placeholder='Nota 1'required >
        <input type="number" name="nota2" id="" max=10 placeholder='Nota 2'required>
        <input type="number" name="nota3" id="" max=10 placeholder='Nota 3'required>
        <input type="number" name="nota4" id="" max=10 placeholder='Nota 4'required>
        <button type='submit'></button>
        
        
        
    </form>
    </div>
    <p id='mensagemerro'><?php 
    

    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $nota1 = $_POST['nota1'];
        $nota2 = $_POST['nota2'];
        $nota3 = $_POST['nota3'];
        $nota4 = $_POST['nota4'];

        if (($nota1 + $nota2 + $nota3 + $nota4) / 4 >= 6) {
            echo "Aprovado";

        }
        else{
            echo "";
        }
       

    };
    ?></p>
    <p id='mensagemcerta'>
        <?php
         if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $nota1 = $_POST['nota1'];
        $nota2 = $_POST['nota2'];
        $nota3 = $_POST['nota3'];
        $nota4 = $_POST['nota4'];

        if (($nota1 + $nota2 + $nota3 + $nota4) / 4 < 6) {
            echo "Reprovado";

        }
        else{
            echo "";
        }
       

    };
    ?>
    </p>
    
</body>

</html>