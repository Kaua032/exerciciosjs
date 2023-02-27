const peso = prompt("Digite o seu peso em Kg: ")
const altura = prompt("Digite a sua altura(em metros): ")
let info = document.getElementById("info")
const imc = peso/(altura*altura)

info.innerHTML = `Seu peso: ${peso}Kg <br>Sua altura: ${altura}m<br>Seu IMC: ${imc}`

if(imc < 22){
    info.innerHTML += `<br>Baixo Peso`
}
else if(imc >= 22 && imc < 27){
    info.innerHTML += `<br>Normal`
}
else if(imc >= 27 && imc <= 29.99){
    info.innerHTML +=`<br>Sobrepeso`
}
else if(imc >= 30){
    info.innerHTML += `<br>Obesidade`
}