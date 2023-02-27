let maiorNumero = 0
let numeros = []
for(let i = 0; i < 10; i++){
    let numero = parseFloat(prompt(`Digite o ${i + 1}° número: `));
    document.getElementById("info").innerHTML += `<br>${numero}`
    if(numero > maiorNumero){
        maiorNumero = numero
    }
}

document.getElementById("info").innerHTML += `<br>O maior número é ${maiorNumero}`
