DROP DATABASE IF EXISTS fronteira;
CREATE DATABASE fronteira;
use fronteira;
create table presos (
    id int AUTO_INCREMENT PRIMARY KEY,
    nome varchar(30),
    imagem TEXT
) ;

