let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
let btn_submit = document.getElementById("login")
let email = document.getElementById("for_email")
let password = document.getElementById("for_password")

email.addEventListener("click", () =>{
    email.style.border = "none"
})

btn_submit.addEventListener("click", (e)=>{
    e.preventDefault()

    if(emailRegex.test(email.value) == true && passwordRegex.test(password.value) == true){
        alert("Login feito com sucesso!")
    }
    else if(emailRegex.test(email.value) == true){
        email.style.border = "2px solid green"
    }
    else if(emailRegex.test(email.value) == false){
        email.style.border = "2px solid red"
    }
    if(passwordRegex.test(password.value) == true){
        password.style.border = "2px solid green"
    }
    else if(passwordRegex.test(password.value) == false){
        password.style.border = "2px solid red"
    }
})
