let users  = [
    {
        img:"./img/susan.jpg",
        name: "Susan Smith",
        work: "WEB DEVELOPER"
    },
    {
        img:"./img/normanReedus.jpg",
        name: "Norman Reedus",
        work: "ACTOR"
    },
    {
        img:"./img/robert.jpg",
        name: "Robert Downey Jr",
        work: "ACTOR"
    }
]
let i = 0
let arrowLeft = document.getElementById("left")
let arrowRight = document.getElementById("right")
let informationsUser = document.getElementById("informationUser")
let surpriseBtn = document.getElementById("surpriseBtn")
arrowRight.addEventListener("click", () =>{
    if(i >= 0 & i < users.length - 1){
        i++
        Change()
    }
    else if(i == users.length - 1){
        i = 0
        Change()
    }
})
arrowLeft.addEventListener("click", () =>{
    if(i < users.length & i > 0){
        i--
        Change()
    }
    else{
        i = users.length - 1
        Change()
    }
})

surpriseBtn.addEventListener("click", () =>{
    i = Math.floor(Math.random() * 4)
    Change()
})
function Change(){
    informationsUser.innerHTML = ` 
    <div id="img">
    <div id="double">
        <p>"</p>
    </div>
    <img src="${users[i].img}" alt="">
    </div>
    <h2>${users[i].name}</h2>
    <a href="" id="webDeveloper">${users[i].work}</a>`
}