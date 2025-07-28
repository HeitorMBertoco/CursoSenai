function SelecionarSalgado(){
    let salgados = []
    let total = 0
    resposta = document.getElementById('resposta')

    if (document.getElementById('coxinha').checked){
        salgados.push(['Coxinha',7.00])
    }
    if (document.getElementById('esfirra').checked){
        salgados.push(['Esfirra',6.00])
    }
    if (document.getElementById('quibe').checked){
        salgados.push(['Quibe', 8.00])
    }

    resposta.innerHTML = 'Voçê selecionou: <br>'

    for(i = 0; i < salgados.length; i++){
        resposta.innerHTML += `${salgados[i][0]} - R$ ${salgados[i][1]} <br>`
        total += salgados[i][1]
        // console.log(i)
    }
    resposta.innerHTML += `<br> Total:R$ ${total}`
    console.log(salgados)
}
function LimparTela() {
    location.reload()
}