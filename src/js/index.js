const inputs = document.querySelectorAll(".input-form")
const value = inputs.values
const submitBtn = document.getElementById("submit-btn")


submitBtn.addEventListener("submit", (e)=>{
    e.preventDefault()
    checarSeInputEValido()
})

function checarSeInputEValido(){
    inputs.forEach(function(inputs){
        if (value) {
            
        }
    })
}