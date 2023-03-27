let objetos = ['Cadeira', 'Impressora', 'Garfo']
let input = document.getElementById("newElement")
let btnAdd = document.getElementById("add")

btnAdd.addEventListener('click', () =>{
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