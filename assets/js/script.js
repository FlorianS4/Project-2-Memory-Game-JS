// Open Instructions via Popup
const openInstructions = document.getElementById("instructionsPageOpen");
const closeInstructions = document.getElementById("instructionsPageClose");
const instructions = document.getElementById("instructions");

openInstructions.addEventListener("click", function() {
    instructions.classList.add("open");
});

closeInstructions.addEventListener("click", function() {
    instructions.classList.remove("open");
});

// Open Play page via Popup
const openPlay = document.getElementById("playPageOpen");
/*
const closePlay = document.getElementById("playPageClose");
*/
const play = document.getElementById("play");

openPlay.addEventListener("click", function() {
    play.classList.add("open");
});

/*
closePlay.addEventListener("click", function() {
    play.classList.remove("open");
});
*/

// Open Scoreboard in Play Page
const openScoreboard = document.getElementById("scoreboardOpen");
const scoreboard = document.getElementById("scoreboard");

openScoreboard.addEventListener("click", function() {
    scoreboard.classList.add("open");
});