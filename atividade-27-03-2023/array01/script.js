let objetos = ['Cadeira', 'Impressora', 'Garfo']
let input = document.getElementById("newElement")

document.getElementById("add").addEventListener('click', () =>{
    if(input.value != ''){
        if(objetos.includes(input.value) == false){
            objetos.push(input.value)
            console.log(objetos)
            input.value = ""
        }
    }
    else{
        alert("Informe um valor válido.")
    }
})

document.getElementById("order").addEventListener("click", () =>{
    objetos = objetos.sort()
    console.log(objetos)
})