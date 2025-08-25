<?php

class Usuario {
    private $nome;
    private $email;
    private $senha;

    private $sobrenome;

    private $usuario;


public function __construct($nome, $email, $senha, $sobrenome, $usuario) {
    $this->usuario = $usuario;
    $this->nome = $nome;
    $this->sobrenome = $sobrenome;
    $this->email = $email;
    $this->senha = $senha;
    
    
}

public function getNome() {
    return $this->nome;
}
public function setNome($nome) {
    $this->nome = $nome; 
}




public function getEmail() {
    return $this->email;
}
public function setEmail($email) {
    $this->email = $email;
}


public function getSenha() {
    return $this->senha;
}

public function setSenha($senha) {
    if (count($senha) > 6) {
        $this->senha = $senha;
    } else {
        throw new Exception("Senha deve ter mais de 6 caracteres.");
    }

}
public function getSobrenome() {
    return $this->sobrenome;
}
public function setSobrenome($sobrenome) {
    $this->sobrenome = $sobrenome;
}


public function getUsuario() {
    return $this->usuario;
}   
public function setUsuario($usuario) {
    $this->usuario = $usuario;  

}   
}
