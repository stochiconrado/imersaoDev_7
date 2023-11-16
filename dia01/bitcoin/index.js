let bitcoin = 180095.85;
let ethereum = 10231.23;
let valor = parseFloat(prompt('Quantos reais você quer converter?'));

let realBitcoin = bitcoin * valor;
let realEthereum = ethereum * valor;

alert(`O valor convertido BTC é R$${realBitcoin.toFixed(2)}`);
alert(`O valor convertido ETH é R$${realEthereum.toFixed(2)}`);