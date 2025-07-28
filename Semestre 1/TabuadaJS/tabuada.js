function calcularTabuada() {
    let valor = document.getElementById('numero').value
    let tabelaHTML = "";
    let arr_numbers = [];
    let res_arr = [];

    tabelaHTML += "<table>";
    tabelaHTML += "<tbody>";

    if(valor < 1 || valor > 20000){
        alert("insira um numero valido");
        return;
        
    }
    for (let i = 0; i <= 10; i++) {
        arr_numbers.push(i);
        res_arr.push(valor * i);
    }
    for (let i = 0; i <= 10; i++) {
        
            tabelaHTML +="<tr>";
            tabelaHTML +="<td>"+ arr_numbers[i] +"</td>";
            tabelaHTML +="<td>x</td>";
            tabelaHTML +="<td>"+ valor +"</td>";
            tabelaHTML +="<td>=</td>";
            tabelaHTML +='<td>'+ (res_arr[i])+'</td>';
            tabelaHTML +='</tr>';

                
                
                
            
        
        
    }
    tabelaHTML += "</tbody>";''
    tabelaHTML += "</table>";
    document.getElementById("javascri").innerHTML = tabelaHTML;
   

    
    
    }


