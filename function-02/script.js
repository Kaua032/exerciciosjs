let letra = prompt("Digite a letra [A OU P]: ").toUpperCase()
let notas = []
let info = document.getElementById("info")
for(let i = 0; i <3; i++){
    notas[i] = Number(prompt(`Digite a sua ${i+1}° nota: `))
}

function calculator(note1, note2, note3, word){
    let media = 0
    if(word == "A"){
        media = (note1 + note2 + note3)/3
        return info.innerHTML = `Sua média aritmétrica é: ${media}`
    }
    else if(word == "P"){
        media = ((note1 * 5) + (note2 * 3) + (note3 * 2))/10
        return info.innerHTML = `Sua média por peso é: ${media}`
    }
}

calculator(notas[0], notas[1], notas[2], letra)