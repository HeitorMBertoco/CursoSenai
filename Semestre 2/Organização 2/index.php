<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Carrinho</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="geral.css">
<head>
<body>
   
        <form class='container' action="" method='POST'>
            <input type="text" name="user" id="nome">
            <input type="password" name="senha" id="senha">
            <input type="submit" name="" id="">
        </form>
    
        <p><?php
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
           
         
    if($_POST["user"] == "Aluno" && $_POST["senha"] == "1234") {
        header("location: menu\pagina.php");
    }
    else{
        echo "login mal sucedido";
    };};
?></p>

</body>
</html>
