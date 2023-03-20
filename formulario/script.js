let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
let btn_submit = document.getElementById("login")
let email = document.getElementById("for_email")
let password = document.getElementById("for_password")
let errorEmail = document.getElementById("error_email")
let errorPassword = document.getElementById("error_password")

email.addEventListener("click", () =>{
    email.style.border = "none"
    errorEmail.style.display = "none"
    errorEmail.innerHTML = ""
})
password.addEventListener("click", () =>{
    password.style.border = "none"
    errorPassword.style.display = "none"
    errorPassword.innerHTML = ""
})

btn_submit.addEventListener("click", (e)=>{
    e.preventDefault()
    
    if(emailRegex.test(email.value) == true && passwordRegex.test(password.value) == true){
        errorEmail.style.display = "none"
        errorPassword.style.display = "none"
        alert("Login feito com sucesso!")
    }
    else if(emailRegex.test(email.value) == true){
        email.style.border = "2px solid green"
    }
    else if(emailRegex.test(email.value) == false){
        email.style.border = "2px solid red"
        errorEmail.style.display = "block"
        errorEmail.innerHTML = "Email Inválido"
    }
    if(passwordRegex.test(password.value) == true){
        password.style.border = "2px solid green"
    }
    else if(passwordRegex.test(password.value) == false){
        password.style.border = "2px solid red"
        errorPassword.style.display = "block"
        errorPassword.innerHTML = "Deve conter (@, 4, A, a)"
    }
})
