function GerarTabuada(numero, inicio, fim) {
    
    numero = parseFloat(numero)
    inicio = parseFloat(inicio)
    fim = parseFloat(fim)

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; 

   
    if (isNaN(numero) || isNaN(inicio) || isNaN(fim)) {
        resultadoDiv.innerHTML = "<p style='color:red;'>Por favor, preencha todos os campos com números válidos.</p>";
        return;
    }

    if (inicio > fim) {
        resultadoDiv.innerHTML = "<p style='color:red;'>O valor de início deve ser menor ou igual ao valor de fim.</p>";
        return;
    }

    
    const matriz = [];

    for (let i = inicio; i <= fim; i++) {
        matriz.push([numero, i, numero * i]);
    }

    
    let tabelaHTML = `
        <table>
            <thead>
                <tr>
                    <th>Número</th>
                    <th>Fator</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (const linha of matriz) {
        tabelaHTML += `
            <tr>
                <td>${linha[0]}</td>
                <td>${linha[1]}</td>
                <td>${linha[2]}</td>
            </tr>
        `;
    }

    tabelaHTML += `
            </tbody>
        </table>
    `;

    
    resultadoDiv.innerHTML = tabelaHTML;
}

function RecarregarPagina() {
    location.reload();
}