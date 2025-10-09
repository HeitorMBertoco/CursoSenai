<?php




class Localizacao {
    private $nome;
    private $descricao;
    public function __construct($nome, $descricao) {
        $this->nome = $nome;
        $this->descricao = $descricao;
    }





    public function addLoc(PDO $conexao){
        $query = "
        INSERT INTO LOCALIZACAO(NOME, DESCRICAO)
        VALUES (:nome , :descricao); ";

        $stmt = $conexao->prepare($query);
        $stmt->bindValue(":nome", $this->nome);
        $stmt->bindValue(":descricao", $this->descricao);
        $stmt->execute();

    }

}
?>