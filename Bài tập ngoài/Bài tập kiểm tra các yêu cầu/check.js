const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

let passwordInput = document.getElementById("inputPassword");
let passwordError = document.getElementById("password-error");

let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");

let passwordCheck = document.getElementById("checkPassword");
let passwordCheckError = document.getElementById("password-check-error");

let phoneNumberInput = document.getElementById("inputPhoneNumber");
let phoneNumberInputError = document.getElementById("inputPhoneNumberError");

function onSubmit() {
    validateEmail()
    validatePassword()
    ValidateCheckPassword()
    ValidatePhoneNumber()
}

function validateEmail() {
    emailInput.classList.add("red-border");
    let email = emailInput.value
    if (!email) {
        emailError.innerHTML = "Email can not be empty"
    } else if (!emailRegex.test(email)) {
        emailError.innerHTML = "Email format is not valid"
    } else {
        emailError.innerHTML = ""
        emailInput.classList.remove("red-border");
    }
}

function validatePassword() {
    passwordInput.classList.add("red-border");
    let password = passwordInput.value
    if (!password) passwordError.innerHTML = "Password can not be empty"
    else if (password.length < 6 || password.length > 20) {
        passwordError.innerHTML = "Password length should be from 6 to 20"
    } else {
        passwordError.innerHTML = ""
        passwordInput.classList.remove("red-border");
    }
}

function ValidateCheckPassword(){
    passwordCheck.classList.add("red-border");
    let check = passwordCheck.value
    let password = passwordInput.value
    if (check != password || check == "") passwordCheckError.innerHTML= "Please input password confirm again"
    else {
        passwordCheckError.innerHTML=""
        passwordCheck.classList.remove("red-border");
    }
}
function ValidatePhoneNumber() {
    phoneNumberInput.classList.add("red-border");
    let phoneNumber = phoneNumberInput.value;
    if (!phoneNumber) {
        phoneNumberInputError.innerHTML= "Please input your phone number"
    } else if (phoneNumber.length < 10 || phoneNumber.length > 11) {
        phoneNumberInputError.innerHTML="Your phone number is not valid"
    } else {
        phoneNumberInputError.innerHTML=""
        phoneNumberInput.classList.remove("red-border");
    }
}
