var lista = [];

function AdicionarNome() {
    nome = document.getElementById("nome").value;
    lista.push(nome);
    

    document.getElementById("mensagem").innerText = nome + " adicionado(a)";
    
    

}

function ListarNomes() {
    if (lista != "") {
        document.getElementById('lista').innerHTML = '';
        document.getElementById("mensagem").innerText = "Os nomes adicionados foram: ";
        for (var i = 0; i < lista.length; i++) {
            document.getElementById("lista").innerText += lista[i] + "\n";
        }
    }
    else {
        document.getElementById("mensagem").innerText = "Não há nomes na lista";
    }
}

function LimparLista() {
    location.reload();
}