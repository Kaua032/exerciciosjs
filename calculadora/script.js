let input = document.getElementById("input_result")
let limpar = document.getElementById("limp")
let mudar = document.getElementById("mudar_sinal")
let historic = document.getElementById("historic")
function praDentro(text){
    input.value += text
}
limpar.addEventListener("click", () =>{
    historic.innerHTML = ""
    input.value = ""
})
function calculator(){
    historic.innerHTML = `${input.value}=`
    input.value = eval(input.value)
}
mudar.addEventListener("click", () =>{
    input.value = `${Math.abs(Number(input.value))}`   
})

addEventListener("keydown", (tecla)=>{
    if(tecla.key == "Enter"){
        historic.innerHTML = `${input.value}=`
        input.value = eval(input.value)
    }
})