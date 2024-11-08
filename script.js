const submitButton = document.querySelector("#submit-button");
const alert = document.querySelector("#alert");
const formAlert = document.querySelector("#form-alert");
const inputEmail = document.querySelector("#email");
const themeButton = document.querySelector(".theme");
const illustrationImage = document.querySelector(".illustration");

// Email Regex Pattern
const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

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

function getCurrentTheme() {
    let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    localStorage.getItem("ping.theme")
        ? (theme = localStorage.getItem("ping.theme"))
        : null;
    return theme;
}

function loadTheme(theme) {
    const root = document.querySelector(":root");
    if (theme === "dark") {
        themeButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    } else {
        themeButton.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
    root.setAttribute("color-scheme", `${theme}`);
}

themeButton.addEventListener("click", () => {
    let theme = getCurrentTheme();
    if (theme === "dark") {
        theme = "light";
        illustrationImage.innerHTML =
            '<img src="images/illustration-dashboard.png" alt=""/>';
    } else {
        theme = "dark";
        illustrationImage.innerHTML =
            '<img src="images/illustration-dashboard-dark.png" alt=""/>';
    }
    localStorage.setItem("ping.theme", `${theme}`);
    loadTheme(theme);
});

window.addEventListener("DOMContentLoaded", () => {
    loadTheme(getCurrentTheme());
});

// Button Event
submitButton.addEventListener("click", (e) => {
    formValidation();
    e.preventDefault();
});

// Form Events
inputEmail.addEventListener("input", () => {
    emailValidation();
});

localStorage.setItem("ping.theme", "light");
