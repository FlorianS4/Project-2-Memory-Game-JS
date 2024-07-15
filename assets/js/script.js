// Add EventListener for redirect to instructions page
const instructions = document.getElementById("instructions-page");

instructions.addEventListener("click", function() {
    window.location="instructions.html";
})


const logo = document.getElementsByClassName("heading");

logo.addEventListener("click", function() {
    window.location="index.html";
})

