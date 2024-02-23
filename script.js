const submitButton = document.querySelector("#submit-button");
const alert = document.querySelector("#alert");
const formAlert = document.querySelector("#form-alert");
const inputEmail = document.querySelector("#email");

// Email Regex Pattern
const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function emailValidation() {
    if (inputEmail.value.match(emailRegEx)) {
        alert.style.visibility = "hidden";
        inputEmail.style.border = "1.5px solid lightgreen";
    } else {
        alert.style.visibility = "visible";
        formAlert.style.visibility = "hidden";
        inputEmail.style.border = "1.5px solid hsl(354, 100%, 66%)";
    }
}

function formValidation() {
    if (inputEmail.value == 0) {
        formAlert.style.visibility = "visible";
        alert.style.visibility = "hidden";
        inputEmail.style.border = "1.5px solid hsl(354, 100%, 66%)";
    } else {
        formAlert.style.visibility = "hidden";
        alert.style.visibility = "hidden";
    }
}

// Button Event
submitButton.addEventListener("click", (e) => {
    formValidation();
    e.preventDefault();
});

// Form Events
inputEmail.addEventListener("input", () => {
    emailValidation();
});
