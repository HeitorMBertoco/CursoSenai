<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrinho</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../geral.css">
</head>
<body>
    <div class='contpai'>
        <form action="" method="POST">
    <div class="container coxinha">
        <article><p>Coxinha</p>
        <input type="checkbox" name="coxinha" id=""></article>
        <img src="../assets/img/imagemcoxa.png" alt="">
    </div>
    <div class="container kibe">
        <article><p>Quibe</p>
        <input type="checkbox" name="kibe" id=""></article>
        <img src="../assets/img/a.png" alt="">
    </div>
    <div class="container esfirra">
        <article>
        <p>Esfirra</p>
        <input type="checkbox" name="esfirro" id=""></article>
        <img src="../assets/img/esfirro.png" alt="">
    </div>
    <input type="submit" name="" id="" class='submit'>
    <button value="<?php 
    
    $lista = [];
        if (isset($_POST['coxinha'])){
            array_push($lista, "Coxinha");
        
        };
        if (isset($_POST['kibe'])){
            array_push($lista, "Coxinha");
        
        };
        if (isset($_POST['esfirro'])){
            
            array_push($lista, "Esfirra");
        };
        for ($i = 0; $i > count($lista) ;$i++) {
            echo "$lista[$i]";
        };
        
    
    
    
    ?>"></button>
    </form>
    </div>
    
    
    


</body>
</html>
