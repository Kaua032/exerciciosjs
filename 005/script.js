const salario = parseFloat(prompt('Digite o seu salário: '))
let info = document.getElementById("info")
if(salario < 500){
    let novoSalario = salario + (salario*0.3)
    info.innerHTML = `Seu salário atual é R$${salario}, ou seja, você tem direito a mais 30%.<br>Agora o seu salário é R$${novoSalario}`
}
else if(salario < 0){
    info.innerHTML = "Desculpe, mas não aceitamos valores negativos."
}
else if(salario >= 500){
    info.innerHTML = `Desculpe, mas seu salário de R$${salario} ultrapassa o valor R$500, ou seja, não tem direito ao aumento de 30%.`
}
else{
    info.innerHTML = "Só aceitamos números."
}