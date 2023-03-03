let numero = parseInt(prompt("Digite um número: "))
let info = document.getElementById("info")

function verific(num){
    if(num >= 0){
        info.innerHTML = "1"
    }
    else if(num < 0){
        info.innerHTML = "0"
    }
}

verific(numero)