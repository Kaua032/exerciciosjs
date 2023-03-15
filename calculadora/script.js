let input = document.getElementById("input_result")
let limpar = document.getElementById("limp")
let mudar = document.getElementById("mudar_sinal")
let historic = document.getElementById("historic")

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
let sizeSlider = document.getElementById('size_slider')
let colorsBtns = document.querySelectorAll(".row_colors .options .option")
let btnClear = document.getElementById("btn-clear")
let isDrawing = false
let brushWidth = 1
let selectedTool = "brush"
let selectedColor = "#fff"

window.addEventListener("load", () =>{
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
})

const startDrawing = () =>{
    isDrawing = true
    ctx.beginPath()
    ctx.lineWidth = brushWidth
    ctx.strokeStyle = selectedColor
    ctx.fillStyle = selectedColor
}
const stopDrawing = () =>{
    isDrawing = false
}

function work(id){
    selectedTool = id
}

const drawing = (e) => {
    if(!isDrawing) return

    if(selectedTool == "brush" || selectedTool == "eraser"){
        ctx.strokeStyle = selectedTool === "eraser" ? "#000": selectedColor;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke()
    }
    else if(selectedTool == "eraser"){

    }
}

sizeSlider.addEventListener("change", () => brushWidth = sizeSlider.value)


colorsBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".options .selected").classList.remove(".selected")
        selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color")
    })
});

btnClear.addEventListener("click", () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

canvas.addEventListener("mousedown", startDrawing)
canvas.addEventListener("mouseup", stopDrawing)   
canvas.addEventListener("mousemove", drawing)   





































function praDentro(text){
    input.value += text
}
limpar.addEventListener("click", () =>{
    historic.innerHTML = "0="
    input.value = ""
})
function calculator(){
    historic.innerHTML = `${input.value}=`
    input.value = eval(input.value)
}
mudar.addEventListener("click", () =>{
    let pass = Math.abs(Number(input.value))
    input.value = `${pass}`   
})

addEventListener("keydown", (tecla)=>{
    if(tecla.key == "Enter"){
        historic.innerHTML = `${input.value}=`
        input.value = eval(input.value)
    }
})