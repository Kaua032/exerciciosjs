let number1 = parseInt(prompt("Digite o primeiro número: "));
let number2 = parseInt(prompt("Digite o segundo número: "));

function trueOrFalse(num1, num2) {
  if (num1 === num2) {
    document.getElementById("info").innerHTML = "Verdadeiro";
  } else {
    document.getElementById("info").innerHTML = "False";
  }
}

trueOrFalse(number1, number2);
