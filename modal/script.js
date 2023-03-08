const modal = document.getElementById("all")

function openmodal(){
    modal.style.display = "flex"
}
function closemodal(){
    modal.style.display = "none"
}

window.onclick = function(click) {
    if(click.target == modal){
        modal.style.display = "none"
    }
}