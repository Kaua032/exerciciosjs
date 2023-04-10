const a = prompt("Digite o primeiro valor: ")
const b = prompt("Digite o segundo valor: ")

function formation(a, b){
    let array = []

    if(a.indexOf(b) !== -1){
        array.push(a + b)
        return array
    }
    else{
        array.push(a + b)
        return array
    }
}

console.log(formation(a, b))