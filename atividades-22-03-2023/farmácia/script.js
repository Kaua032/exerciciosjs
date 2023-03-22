let nameMedicament = document.getElementById("nameMedicament")
let priceMedicament = document.getElementById("priceMedicament")
let showInformations = document.getElementById("informations")

function newprice(){
    let newprice = Math.round(parseFloat(priceMedicament.value*2))

    showInformations.innerHTML = `<p>Promoção de ${nameMedicament.value}</p>
    <p>Leve 2 por apenas R$${newprice}</p>`
}