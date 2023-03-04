let number = parseFloat(prompt("Digite um número: "));
let info = document.getElementById("info");

function roundOff(numero) {
  info.innerHTML = `O número é ${numero}, arrendonda fica: ${numero.toFixed(
    2
  )}`;
}

roundOff(number);
