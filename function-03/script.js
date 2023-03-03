let info = document.getElementById("info")


function calculator(){
    let maiorNumero = 0
    let menorNumero = 0
    for(let i=0; i<5; i++){
        let number = Number(prompt(`Digite o °${i+1} número:`))
        info.innerHTML += `${number} `
        if(i == 0){
            maiorNumero = number
            menorNumero = number
        }
        else{
            if(number > maiorNumero){
                maiorNumero = number
            }
            else if(number < menorNumero){
                menorNumero = number
            }
        }
    }
    info.innerHTML += `<br>O maior número digitado é ${maiorNumero}.`
    info.innerHTML += `<br>E o menor número digitado é ${menorNumero}.`
}

calculator()