let celcius = parseInt(prompt("Digite a temperatura em celsius: "))

let fahrenheit = (celcius * 9/5) + 32
document.getElementById("info").innerHTML = `A ${celcius}° em fahrenheit é ${fahrenheit}°`