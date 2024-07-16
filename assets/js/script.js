// Open Instructions via Popup
const openBtn = document.getElementById("instructionsPageOpen");
const closeBtn = document.getElementById("instructionsPageClose");
const instructions = document.getElementById("instructions");

openBtn.addEventListener("click", function() {
    instructions.classList.add("open");
});

closeBtn.addEventListener("click", function() {
    instructions.classList.remove("open");
});