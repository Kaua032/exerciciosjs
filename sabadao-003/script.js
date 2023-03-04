let number = parseFloat(prompt("Digite um número: "));
let porcentage = parseFloat(
  prompt("Digite a porcentagem que você quer saber: ")
);
let info = document.getElementById("info");

function calculator(numero, porcentagem) {
  let tirado = numero * (porcentagem / 100);
  info.innerHTML = `${porcentagem}%  de ${numero} é ${tirado}.`;
}

calculator(number, porcentage);
