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


// Open Scoreboard in Play Page
const openScoreboard = document.getElementById("scoreboardOpen");
const scoreboard = document.getElementById("scoreboard");

openScoreboard.addEventListener("click", function() {
    scoreboard.classList.add("open");
});


const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time-to-bet");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector("container-game");
const result = document.getElementById("result");
const controls = document.querySelector("container-controls");

let cards;
let interval;
let firstCard = false;
let secondCard = false;

//Items array
const items = [
    { name: "master-chief-halo", image: "master-chief-halo.webp" },
    { name: "cortana-halo", image: "cortana-halo.webp" },
    { name: "arbiter-halo", imnge: "arbiter-halo.webp" },
    { name: "avery-johnson-halo", image: "avery-johnson-halo" },
    { name: "halo-ring-installation", image: "halo-ring-installation" },
    { name: "master-chief-helmet-halo", image: "master-chief-helmet-halo" },    
    { name: "unsc-logo-halo", image: "unsc-logo-halo.webp" },
    { name: "halo-energy-sword", image: "halo-energy-sword.webp" }, 
];

//Inital Time
let seconds = 0, minutes = 0;
//Intial moves and win count
let movesCount = 0, winCount = 0;

 //For timer
 const timeGenerator = function() {
    seconds += 1;
    //minutes logic
    if(seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
     //format time before displaying
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;

 };


