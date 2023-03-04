let hourFirst = parseInt(prompt("Digite quantas horas: "));
let minutesFirst = parseInt(prompt("E os minutos: "));
let hourLast = parseInt(prompt("Digite a hora do término: "));
let minutesLast = parseInt(prompt("E os minutos: "));
let info = document.getElementById("info");

function horasGastas(horaInicial, minutoInicial, horaFinal, minutoFinal) {
  const minutosFinais = horaFinal * 60 + minutoFinal;
  const minutosIniciais = horaInicial * 60 + minutoInicial;
  let horasGastas = 0;
  if (minutosFinais > minutosIniciais) {
    let minutosGastos = minutosFinais - minutosIniciais;

    while (minutosGastos >= 60) {
      console.log("entrou");
      horasGastas++;
      minutosGastos = minutosGastos - 60;
    }
    info.innerHTML = `Você inicio às ${horaInicial}:${minutoInicial} e terminou às ${horaFinal}:${minutoFinal} e gastou ${horasGastas}:${minutosGastos}`;
  } else if (minutosIniciais > minutosFinais) {
    const minutosGastos = minutosIniciais - minutosFinais;
  }
}

horasGastas(hourFirst, minutesFirst, hourLast, minutesLast);
