let modelName = document.getElementById("modelName")
let normalPrice = document.getElementById("price")
let showInformations = document.getElementById("informations")

function newprice(){
    let halfPrice = normalPrice.value / 2
    let plots = halfPrice / 12

    showInformations.innerHTML      = `<p>Modelo: ${modelName.value}</p>
    <p>Entrada de R$${halfPrice}</p>
    <p>12 x R$${plots}</p>`
    modelName.value = ""
    normalPrice.value = ""
}