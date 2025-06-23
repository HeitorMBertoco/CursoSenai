function auth(){
    if(document.getElementById('senha').value != 1234 && document.getElementById('name').value != 'Aluno'){
        alert('login incorreto')

    }
    else{
        window.location.href = "../Pesagem/index.html";
    }
    
}