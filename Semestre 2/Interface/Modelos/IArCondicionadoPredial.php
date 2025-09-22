<?php

use LDAP\ResultEntry;
require_once 'IArCondicionado.php';
class ArCondicionadoPredial implements IArCondicionado {

public function Ligar(){
    return 'Ar Ligado';
}
public function Desligar(){
    return 'Ar Desligado';
}

public function AumentarTemp(){
    return 'Temperatura aumentada em 1';
}
public function DiminuirTemp(){
    return 'Temperatura diminuida em 1';
}


}






?>