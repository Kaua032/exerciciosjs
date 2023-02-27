let nome = prompt("Digite seu nome: ")
let genero = prompt("Digite seu gênero: ")
let idade = parseInt(prompt("Digite sua idade: "))
let tempo = parseFloat(prompt("Digite seu tempo de contribuição: "))
let mostrar = document.getElementById("info")
if(genero == "feminino"){
    if(idade > 0 && tempo > 0){
        if(idade >= 62 && tempo > 30){
            mostrar.innerHTML = `Você tem ${idade} anos de idade e ${tempo} anos de contribuição, ou seja, tem direito a aposentadoria.`
        }
        else if(idade >= 62){
            mostrar.innerHTML = `Você tem ${idade} anos de idade, ou seja, tem direito a aposentadoria.`
        }
        else if(tempo >= 30){
            mostrar.innerHTML = `Você tem ${tempo} anos de contribuição, ou seja, tem direito a aposentadoria.`
        }
        else if(idade < 62 || tempo < 30){
            mostrar.innerHTML = `Você tem ${idade} anos de idade e ${tempo} anos de contribuição, ou seja, NÃO tem direito a aposentadoria.`
        }
    }
    else{
        mostrar.innerHTML = '[ERROR] Idade ou tempo de contribuição está negativa.'
    }
}
else if(genero == "masculino"){
    if(idade > 0 && tempo > 0){
        if(idade >= 65 && tempo > 35){
            mostrar.innerHTML = `Você tem ${idade} anos de idade e ${tempo} anos de contribuição, ou seja, tem direito a aposentadoria.`
        }
        else if(idade >= 65){
            mostrar.innerHTML = `Você tem ${idade} anos de idade, ou seja, tem direito a aposentadoria.`
        }
        else if(tempo >= 35){
            mostrar.innerHTML = `Você tem ${tempo} anos de contribuição, ou seja, tem direito a aposentadoria.`
        }
        else if(idade < 65 || tempo < 35){
            mostrar.innerHTML = `Você tem ${idade} anos de idade e ${tempo} anos de contribuição, ou seja, NÃO tem direito a aposentadoria.`
        }
    }
    else{
        mostrar.innerHTML = `[ERROR] Idade ou tempo de contribuição está negativa.`

    }
}
else{
        mostrar.innerHTML = `Desculpe, mas não aceitamos esse termo.`
}