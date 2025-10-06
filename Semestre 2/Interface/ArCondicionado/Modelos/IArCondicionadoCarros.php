<?php
require_once 'IArCondicionado.php';

class ArCondicionadoCarro implements IArCondicionado{

    

    public function Ligar(){
        return 'Ar Ligado';
    }
    public function Desligar(){
        return 'Ar Desligado';
    }
    public function AumentarTemp(){
        return 'Temperatura aumentada em 2';
    }
    public function DiminuirTemp(){
        return 'Temperatura diminuida em 2';
    }



}





?>