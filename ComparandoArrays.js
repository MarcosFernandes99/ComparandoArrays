// DESAFIO DE COMPARAÇÃO DE ARRAYS P/ EXTRAIR SOMENTE OS NUMEROS QUE REPETEM ENTRE ELES E SE FOR MAIOR QUE 5

var arrayPrimeiro = []
var arraySegundo = []
var arrayTerceiro = []
var contadorTerceiro = 0

for(var contador = 0; contador < 10; contador++){
    arrayPrimeiro[contador] = parseInt(prompt(`Insira um numero no 1º Array`))
    arraySegundo[contador] = parseInt(prompt(`Insira um numero no 2º Array`))
}
console.log(arrayPrimeiro)
console.log(arraySegundo)

for(var primeiro = 0; primeiro < contador; primeiro++){
    for(var segundo = 0; segundo < contador; segundo++){
        if(arrayPrimeiro[primeiro] == arraySegundo[segundo] && arrayPrimeiro[primeiro] > 5){
            arrayTerceiro[contadorTerceiro] = arrayPrimeiro[primeiro]
            contadorTerceiro++
        }
    }
}
console.log(arrayTerceiro)