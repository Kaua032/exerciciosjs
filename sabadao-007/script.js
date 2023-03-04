let totalSeconds = 31536000;
let info = document.getElementById("info");

function timer(seconds) {
  const countdown = setInterval(() => {
    let segundos = seconds % 60;
    let minutos = Math.floor((seconds % 3600) / 60);
    let horas = Math.floor((seconds % (3600 * 24)) / 3600);
    let dias = Math.floor(seconds / (3600 * 24));

    info.innerHTML = `${dias}:${horas}:${minutos}:${segundos}`;
    seconds--;
  }, 1000);
}

timer(totalSeconds);

// let dias = Math.floor(seconds / (3600 * 24));
