<?php
require_once 'Robos.php';
class RoboLimpeza extends Robo {


    public function __construct($anoLancamento, $modelo) {
    parent::__construct($anoLancamento, $modelo);
    }
    private $dataUltimaVarredura;
    public function AtivarAcao() {
     if ($this->ativado == true) {
        $this->dataUltimaVarredura = new DateTime();
        return "Iniciando Limpeza";
        

     }
     else {
        return "Ligue o Robo Primeiro";
     }   
    }

    public function GetModelo(){
        return $this->modelo;
    }
    public function GetanoLancamento() {
        return $this->anoLancamento;
    }
    public function GetDataUltimaVarredura(){
        return '10-9-2025';
    }










}








?>

