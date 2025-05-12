function calcularTabuada() {
    var valor = document.getElementById('numero').value
    var tabelaHTML = "";
    tabelaHTML += "<table>";
    tabelaHTML += "<tbody>";

    if(valor < 1 || valor > 20000){
        alert("insira um numero valido");
        return;
        
    }
    for (let i = 0; i <= 10; i++) {
        
            tabelaHTML +="<tr>";
            tabelaHTML +="<td>"+ i +"</td>";
            tabelaHTML +="<td>x</td>";
            tabelaHTML +="<td>"+ valor +"</td>";
            tabelaHTML +="<td>=</td>";
            tabelaHTML +='<td>'+ (valor * i)+'</td>';
            tabelaHTML +='</tr>';

                
                
                
            
        
        
    }
    tabelaHTML += "</tbody>";''
    tabelaHTML += "</table>";
    document.getElementById("javascri").innerHTML = tabelaHTML;
   

    
    
    }


