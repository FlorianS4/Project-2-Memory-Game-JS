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
const play = document.getElementById("play");

openPlay.addEventListener("click", function() {
    play.classList.add("open");
});


const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector("container-game");







// Open Scoreboard in Play Page
const openScoreboard = document.getElementById("scoreboardOpen");
const scoreboard = document.getElementById("scoreboard");

openScoreboard.addEventListener("click", function() {
    scoreboard.classList.add("open");
});