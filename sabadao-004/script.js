let numero = parseInt(prompt("Digite um número: "));
let info = document.getElementById("info");

function parOuImpar(number) {
  if (number % 2 == 0) {
    info.innerHTML = `O número ${number} é PAR.`;
  } else {
    info.innerHTML = `O número ${number} é ÍMPAR.`;
  }
}

parOuImpar(numero);
