let likeBtn = document.getElementById("like")
let contadorLike = document.getElementById("contador")


let i = 0
likeBtn.addEventListener("click", ()=>{
    i++
    contadorLike.innerHTML = `${i}`
    likeBtn.style.borderColor = "red"
    document.getElementById("heart").setAttribute( "fill", "red")
})