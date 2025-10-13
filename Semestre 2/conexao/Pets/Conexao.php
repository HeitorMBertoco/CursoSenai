<?php 
 require_once 'entidade/pet.php';
    
    function Conectar (){

        $dbname = 'VET';
        $host = '127.0.0.1';
        $port = '3306';
        $user = 'root';
        $password = 'root';
        $dsn = "mysql:host=$host;port=$port;dbname=$dbname";
        




        
        try{
            
            return $pdo = new PDO($dsn, $user, $password);
        }
        catch (PDOException $e){
            throw new Exception("Erro fatal");
            

        }



        
    }
    

?>