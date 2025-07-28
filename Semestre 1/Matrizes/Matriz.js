let matriz = [
    ['beterraba','abacaxi','tesoura','lua','banana'],
    [' javali',' macaco',' cachorro',' gato',' cor'],
    ['alicate','maionese','maçã','maionese','joaquim'],
    ['ivonete','louça','balao','tangerina','jupiter'],
    ['beterraba','tião','Carlos','','Beterraba']
]
matriz[1][1] = 'Goku'
matriz[0][1] = 'Dinossauro'
matriz[4][1] = ''
matriz.splice(3,1)

matriz.push(['','Carla','','Jessica',''])

for(i = 0;i < matriz.length;i++){
    console.log(matriz[i])
}
