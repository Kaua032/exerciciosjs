let priceBuffet = document.getElementById("priceBuffet")
let consumption = document.getElementById("consumption")
let showInformations = document.getElementById("informations")

function newprice(){
    let porcent = consumption.value / 1000
    let newPrice = priceBuffet.value * porcent

    showInformations.innerHTML      = `<p>Valor a pagar R$${newPrice}</p>`
}