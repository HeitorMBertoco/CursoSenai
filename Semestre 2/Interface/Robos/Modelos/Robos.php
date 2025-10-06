<?php
require_once 'Robos.php';

abstract class Robo {
    protected $anoLancamento;

    protected $modelo;

    protected $ativado = false;

    abstract public function AtivarAcao();



    public function Ligar() {
        if ($this->ativado == true) {
            throw new Exception('Robo ja esta ligado');

        }
        else {
            $this->ativado = true;
            return "Robo Ligado!";
        }
    }
    public function Desligar() {
        if ($this->ativado == false) {
            throw new Exception('Robo ja esta desligado');

        }
        else {
            $this->ativado = false;
            return "Robo Desligado!";
        }
    }

    public function __construct($anoLancamento, $modelo) {
        $this->SetAnoLancamento($anoLancamento);
        $this->setmodelo($modelo);

    }
    public function SetAnoLancamento($anoLancamento) {
        $this->anoLancamento = $anoLancamento;
    }
    public function setmodelo($modelo) {
        $this->modelo = $modelo;
    }




}

?>