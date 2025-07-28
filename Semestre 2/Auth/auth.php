<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $aluno = $_POST["name"];
    $senha = $_POST["senha"];


}
if ($aluno != "aluno" && $senha != 1234) {
    echo "login errado";

}
else {
    echo "Login efetuado com sucesso";
}




?>