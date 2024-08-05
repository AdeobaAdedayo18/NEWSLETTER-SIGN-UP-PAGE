const email = document.getElementById("email");
const form = document.getElementById("form");
const subtext = document.getElementById("sub-text");
const signup = document.getElementById("signup");
const result = document.getElementById("result");
form.addEventListener("submit", e=> {
    e.preventDefault();
    console.log("stage initial");
    if(validateInput()){
        submitSuccess();
        emailValue = email.value.trim();
        subtext.innerHTML = emailValue;
        
    }
    

})

function setError(element, message){
    const inputControl = element.closest('.input-container,.checkbox');
    console.log("stage 1");
    const errorDisplay = inputControl.querySelector(".error");
    console.log("stage 2");
    errorDisplay.innerHTML = message;
    inputControl.classList.add('error');
    console.log("stage 1");
}

function setSuccess(element){
    const inputControl = element.closest('.input-container,.checkbox');
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerHTML = "";
    inputControl.classList.remove('error');
}

function submitSuccess(){
    const signupControl = signup.closest('.main-container,.checkbox');
    const resultControl = result.closest('.result-container,.checkbox');
    signupControl.classList.toggle("close");
    resultControl.classList.toggle("close");
}

function exit(){
    const signupControl = signup.closest('.main-container,.checkbox');
    const resultControl = result.closest('.result-container,.checkbox');
    signupControl.classList.toggle("close");
    resultControl.classList.toggle("close");
    form.reset()
}
function validateInput(){
    emailValue = email.value.trim();

    isValid = true;

    if(emailValue === ""){
        setError(email, "Valid email required.");
        isValid = false;
    }
    else if(!isValidEmail(emailValue)){
        setError(email, "Please enter a valid email address");
        isValid = false;
    }else{
        setSuccess(email);
        isValid = true;
    }
    return isValid;
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}