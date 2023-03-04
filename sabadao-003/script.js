let number = parseFloat(prompt("Digite um número: "));
let porcentage = parseFloat(
  prompt("Digite a porcentagem que você quer saber: ")
);
let info = document.getElementById("info");

const objeto = { numero: number, porcentagem: porcentage };

function calculator() {
  let tirado = objeto.numero * (objeto.porcentagem / 100);
  info.innerHTML = `${objeto.numero}%  de ${objeto.porcentagem} é ${tirado}.`;
}

calculator(number, porcentage);
