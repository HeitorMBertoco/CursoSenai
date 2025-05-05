function ExibirPares(){
    //
    let resultado = document.getElementById('resultado')
    let array = []
    
    let Numero = document.getElementById('numeroInicial').value
    let Limite = document.getElementById('numeroFinal').value
    let contador = Numero
    resultado.innerHTML = ''
    while(contador <= Limite){
        if(contador % 2 == 0){
            array.push(contador)
            
        }
        contador++
    }
    for(i = 0; i<array.length; i++){
        resultado.innerHTML += array[i] + ' ';
    }

    }




