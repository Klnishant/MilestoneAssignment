const entered_password=document.getElementById("entered_password")
const cnf_password=document.getElementById("cnf_password")
const form = document.getElementById("form")

form.addEventListener("submit",function(e){
    e.preventDefault()

    if(entered_password.value != cnf_password.value){
    const result=document.getElementById("result")
    result.innerText="Please Enter Correct Password"
    result.style.color="red"
    cnf_password.style.color="red"
    cnf_password.style.borderBlockColor="red"
    entered_password.style.borderBlockColor="red"
    console.log("You Entered Wrong Password")
}
    else console.log("Password Matched.Password Vallidation Succesful")
})