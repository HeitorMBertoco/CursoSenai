function RetornarMultiplos() { 
    document.getElementById('resultado').innerText = ''
	let numero = Number(document.getElementById("numero").value);
	let limite = Number(document.getElementById("limite").value);
	let resultado = [];

	let soma = numero; // Começa com o primeiro múltiplo

	while(soma <= limite) {
	    
        resultado.push(soma);
	    soma += numero; // Soma o número base para encontrar o próximo múltiplo
	}
    console.log(resultado)
  for(let i = 0; i < resultado.length; i++){
    document.getElementById("resultado").innerHTML += resultado[i] + ' ';
  }




  
}