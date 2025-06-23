function checar(peso1, peso2, s){
    switch(s){
        case 'M':
            if (peso1 <= 70 && peso2 <= 70){
                alert('luta valida')
            }
            else if(peso1 > 70 && peso2 > 70 && peso1 <= 90 && peso2 <= 90){
                alert('peso medio,luta valida')

            }
            else if(peso1 > 90 && peso2 > 90){
                alert('peso pesado, luta valida')
            }
            else{
                alert('luta invalida')
            }

               
               break
        case 'F':
            if (peso1 <= 60 && peso2 <= 60){
                alert('luta valida')
            }
            else if(peso1 > 60 && peso2 > 60 && peso1 <= 75 && peso2 <= 75){
                alert('peso medio,luta valida')

            }
            else if(peso1 > 75 && peso2 > 75){
                alert('peso pesado, luta valida')
            }
            else{
                alert('luta invalida')
            }
            
               
               break


        default:
            alert('insira um sexo valido')
            break

            }





        }