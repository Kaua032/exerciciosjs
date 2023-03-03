let number = parseInt(prompt("Digite o número que você quer saber seus divisores: "))
let info = document.getElementById("info")
for(let i = 0; i < number; i++){
    if(number % i == 0){
        info.innerHTML += `${number} / ${i} = ${number/i}<br>`
    }
}