<?php
require_once 'conexao.php';
class Cartas {
    private $id;
    private $nome;
    private $descricao;
    private $nomeimage;

    public function __construct($id, $nome, $descricao, $nomeimage) {
        $this->id = $id;
        $this->nome = $nome;
        $this->descricao = $descricao;
        $this->nomeimage = $nomeimage;

    }

    public function Salvar(){
        $conexao = GetConn();

        $query = "INSERT INTO CARTAS(NOME, DESCRICAO, IMAGEM_PATH)
        VALUES (:NOME, :DESCRICAO, :IMAGEM_PATH);";
        try {
            $stmt = $conexao->prepare($query);

            $stmt->bindParam(':NOME', $this->nome);
            $stmt->bindParam(':DESCRICAO', $this->descricao);
            $stmt->bindParam(':IMAGEM_PATH', $this->nomeimage);

            $stmt->execute();
            
           
        } catch (Exception $th) {
            throw new Exception($th) ;
        }
    }
    public function Atualizar(){
        $conexao = GetConn();

        $query = "UPDATE CARTAS
                  SET NOME = :NOME, 
                      DESCRICAO = :DESCRICAO, 
                      IMAGEM_PATH = :IMAGEM_PATH 
                  WHERE ID = :ID";
        
        try {
            $stmt = $conexao->prepare($query);
            $stmt->bindParam(':ID', $this->id);
            $stmt->bindParam(':NOME', $this->nome);
            $stmt->bindParam(':DESCRICAO', $this->descricao);
            $stmt->bindParam(':IMAGEM_PATH', $this->nomeimage);
            $stmt->execute();
        } catch (Exception $th) {
            throw new Exception($th);
        }
    }

   
    public static function BuscarPorId($id){
        $conexao = GetConn();
        
        $query = "SELECT * FROM CARTAS WHERE ID = :ID";
        
        try {
            $stmt = $conexao->prepare($query);
            $stmt->bindParam(':ID', $id);
            $stmt->execute();
            
            $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($resultado) {
                return new Cartas(
                    $resultado["ID"],
                    $resultado["NOME"],
                    $resultado["DESCRICAO"],
                    $resultado["IMAGEM_PATH"]
                );
            }
            
            return null;
        } catch (Exception $th) {
            throw new Exception($th);
        }
    }

    
    public static function Excluir($id){
        $conexao = GetConn();
        
        $query = "DELETE FROM CARTAS WHERE ID = :ID";
        
        try {
            $stmt = $conexao->prepare($query);
            $stmt->bindParam(':ID', $id);
            $stmt->execute();
        } catch (Exception $th) {
            throw new Exception($th);
        }
    }


    function Getid(){
        return $this->id;
    }
    function Getnome(){
        return $this->nome;
    }
    function Getdescricao(){
        return $this->descricao;
    }
    function Getnomeimage(){
        return $this->nomeimage;
    }


}



?>