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


const cards = document.getElementsByClassName("card");

let allMemory = document.getElementsByClassName("card-image");


const memoryArray = [
    {
        id: 1,
        image: document.getElementById("Master Chief image")
    },
    {
        id: 2,
        image: document.getElementById("Arbiter image")
    },
    {
        id: 3,
        image: document.getElementById("Cortana image")
    },
    {
        id: 4,
        image: document.getElementById("Avery Johnson image")
    },
    {
        id: 5,
        image: document.getElementById("Energy Sword image")
    },
    {
        id: 6,
        image: document.getElementById("Halo Installation image")
    },
    {
        id: 7,
        image: document.getElementById("Master Chief Helmet image")
    },
    {
        id: 8,
        image: document.getElementById("UNSC Logo image")
    },
    {
        id: 9,
        image: document.getElementById("Master Chief image")
    },
    {
        id: 10,
        image: document.getElementById("Arbiter image")
    },
    {
        id: 11,
        image: document.getElementById("Cortana image")
    },
    {
        id: 12,
        image: document.getElementById("Avery Johnson image")
    },
    {
        id: 13,
        image: document.getElementById("Energy Sword image")
    },
    {
        id: 14,
        image: document.getElementById("Halo Installation image")
    },
    {
        id: 15,
        image: document.getElementById("Master Chief Helmet image")
    },
    {
        id: 16,
        image: document.getElementById("UNSC Logo image")
    }
]