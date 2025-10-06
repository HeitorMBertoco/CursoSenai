<?php
require_once 'Robos.php';
class RoboAtemdimento extends Robo {
    public function __construct($anoLancamento, $modelo) {
    parent::__construct($anoLancamento, $modelo);
    }
    public function Ligar(){
        $this->ativado = true;
        return "Robo Ligado!";
    }
    public function Desligar(){
        $this->ativado = false;
        return "Robo Desligado!";
    }
    public function AtivarAcao() {
     if ($this->ativado == true) {
        return "Saudações humano! Oque busca aqui Hoje?";

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
    
    








}








?>