function Calcular(n1, n2, operacao) {
    let resultado;
    switch (operacao) {
        case 'soma':
            resultado = n1 + n2;
            break;
        case 'subtracao':
            resultado = n1 - n2;
            break;
        case 'multiplicacao':
            resultado = n1 * n2;
            break;
        case 'divisao':
            if (n2 === 0) {
                return "Erro: Divisão por zero";
            }
            resultado = n1 / n2;
            break;
        default:
            return "Operação inválida";
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}