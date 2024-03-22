const username = document.getElementById("username")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const textArea = document.getElementById("text-area")
const submitBtn = document.getElementById("submit-btn")

submitBtn.addEventListener("click",function(event){
    event.preventDefault();
    validInput();
})

function validInput(){
    const usernameValue = username.value
    const emailValue = email.value
    const phoneValue = phone.value
    const textAreaValue = textArea.value

    if(usernameValue == ""){
        setError(username, "*campo obrigratório");
    }else{
        setSucess(username)
    }

    if(emailValue == ""){
        setError(email, "*campo obrigratório");
    }else if (!checkEmail(emailValue)) {
        setError(email, "*insira um e-mail válido.")
    }else{
        setSucess(email)
    }

    if(phoneValue == ""){
        setError(phone, "*campo obrigratório");
    }else(
        setSucess(phone)
    )

    if(textAreaValue == ""){
        setError(textArea, "*campo obrigratório");
    }else{
        setSucess(textArea)
    }
}

function setError(input, message){
    const formControl = input.parentElement
    const section = formControl.querySelector("section")
    
    formControl.className = "form-control error"
    section.innerText = message
}

function setSucess(input){
    const formControl = input.parentElement
    formControl.className = "form-control sucess"
}

/*REGULAR EXPRESSION*/

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }