function ExibirPares(){
    //Objeto Resultuda Para Escrever
    let resultado = document.getElementById('resultado')
    //Lista
    let array = []
    //Numero Incial
    let Numero = document.getElementById('numeroInicial').value
    //Limite ou Numero Final
    let Limite = document.getElementById('numeroFinal').value
    // Contador rece o valor do primeiro numero
    let contador = Numero
    //zera o resultado
    resultado.innerHTML = ''
    //Executa enquanto o numero inicial e menor que o limite
    while(contador <= Limite){
        //Verifica se o numero e par
        //Se o resto da divisao do numero por 2 for igual a 0, o numero e par
        //Se o numero for par, adiciona o numero ao array
        //Se o numero for impar, ignora e continua o loop
        if(contador % 2 == 0){
            //Adiciona o numero ao array
            array.push(contador)
            
        }
        contador++
        //soma o contador para o proximo loop
    }
    //Escreve o resultado no HTML com um Espaço
    
    for(i = 0; i<array.length; i++){
        resultado.innerHTML += array[i] + ' ';
    }

    }




