let play = prompt('Vamos play? (s/n)');
if (play === 's') {
  let random = Math.floor(Math.random() * 1000) + 1;
  let maxChance = 10;
  let iterador = 0;
  let chute;

  while (chute !== random && iterador < maxChance) {
    if (iterador !== 0) {
      alert(`Você já fez ${iterador} tentativas!`);
    }

    chute = prompt('Digite um número entre 1 e 1000');

    if (chute === null) {
      break; // Se o usuário cancelar, interrompe o jogo
    }

    let chuteNum = parseInt(chute);

    if (isNaN(chuteNum) || chuteNum < 1 || chuteNum > 1000) {
      alert('Por favor, insira um número válido entre 1 e 1000.');
      continue; // Pula para a próxima iteração do loop
    }

    if (chuteNum === random) {
      alert(`Parabéns! Você acertou o número secreto: ${random}`);
    } else if (chuteNum > random) {
      alert(`O número secreto é menor que ${chuteNum}`);
    } else {
      alert(`O número secreto é maior que ${chuteNum}`);
    }

    iterador++;
  }

  if (chute !== random) {
    alert(`Suas ${maxChance} tentativas acabaram. O número secreto era ${random}`);
  }
}
