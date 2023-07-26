const entered_email=document.getElementById("entered_email")
const password=document.getElementById("password")
const form = document.getElementById("form")
const validationMessage=document.getElementById("result")

form.addEventListener("submit",function(e){
    e.preventDefault()

    const emailValue = entered_email.value;
  const passwordValue = password.value;

  // Validate email format
  const emailRegex = /\S+@\S+\.\S+/;
  const isEmailValid = emailRegex.test(emailValue);

  // Validate password length
  const isPasswordValid = passwordValue.length >= 8;

  if (isEmailValid && isPasswordValid) {
    validationMessage.textContent = 'Valid email and password!';
    validationMessage.style.color="green";
    validationMessage.style.fontSize="20px";
    validationMessage.style.fontWeight="600";
  } else {
    validationMessage.textContent = 'Invalid email or password!';
    validationMessage.style.color="red";
    validationMessage.style.fontSize="20px";
    validationMessage.style.fontWeight="600";
  }
})