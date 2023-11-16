let nome = prompt('Digite seu nome')
let cotacaoDolar = 5.32;
let valor = parseInt(prompt('Qual o valor que você quer converter?'))
let valorReal = cotacaoDolar * valor;
alert(`Olá ${nome} o valor em R$ ${valorReal.toFixed(2)}`)