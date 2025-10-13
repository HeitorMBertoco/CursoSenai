<?php

require_once 'Conexao.php';
require_once 'index.php';



class Pet {
    private $nome;
    private $idade;
    private $raca;
    private $descricao;
    public function __construct($nome, $idade, $raca, $descricao) {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->raca = $raca;
        $this->descricao = $descricao;
    }
    public function addPet(PDO $conexao){
        $query = "
        INSERT INTO PET(NOME, IDADE, RACA, DESCRICAO)
        VALUES (:nome, :idade, :raca, :descricao); ";
        $stmt = $conexao->prepare($query);
        $stmt->bindValue(":nome", $this->nome);
        $stmt->bindValue(":idade", $this->idade);
        $stmt->bindValue(":raca", $this->raca);
        $stmt->bindValue(":descricao", $this->descricao);
        $stmt->execute();
    }

    



    public function getNome() {
        return $this->nome;
    }
    public function setNome($nome) {
        $this->nome = $nome;
    }
    public function getIdade() {
        return $this->idade;
    }
    public function setIdade($idade) {
        $this->idade = $idade;
    }
    public function getRaca() {
        return $this->raca;
    }
    public function setRaca($raca) {
        $this->raca = $raca;
    }
    public function getDescricao() {
        return $this->descricao;
    }
    public function setDescricao($descricao) {
        $this->descricao = $descricao;
    }
}

?>