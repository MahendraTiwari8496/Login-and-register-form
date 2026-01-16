const box = document.getElementById("box")
const register = document.getElementById("register")
const login = document.getElementById("login")

register.addEventListener('click', ()=>{
    box.classList.add("flip")
})

login.addEventListener('click', ()=>{
    box.classList.remove("flip")
})


let eyeicon1 = document.getElementById("eyeicon1")
let password1 = document.getElementById("password1")


eyeicon1.addEventListener('click', ()=>{
         if(password1.type == "password"){
        password1.type = 'text'
        eyeicon1.src = 'view.png'
    }
    else{
        password1.type = 'password'
        eyeicon1.src = 'hide.png'
    }
})

let eyeicon2 = document.getElementById("eyeicon2")
let password2 = document.getElementById("password2")

eyeicon2.addEventListener('click', ()=>{
         if(password2.type == "password"){
        password2.type = 'text'
        eyeicon2.src = 'view.png'
    }
    else{
        password2.type = 'password'
        eyeicon2.src = 'hide.png'
    }
})
let eyeicon3 = document.getElementById("eyeicon3")
let password3 = document.getElementById("password3")

eyeicon3.addEventListener('click', ()=>{
         if(password3.type == "password"){
        password3.type = 'text'
        eyeicon3.src = 'view.png'
    }
    else{
        password3.type = 'password'
        eyeicon3.src = 'hide.png'
    }
})