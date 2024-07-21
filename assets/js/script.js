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

// Memory Game Play
let memoryElements = document.getElementsByClassName("memory-card");
let memoryElementsArray = [...memoryElements];
let webpElements = document.getElementsByClassName("memory-card-webp");
let webpElementsArray = [...webpElments];
let counter = document.getElementById("moveCounter");
let timer = document.getElementById("timer");


// Display Card function
let displayCard = function() {
    this.children[0].classList.toggle("show-webp");
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
}

//Shuffle function called Fisher-Yates Shuffle
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !==0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Start Game function
function startGame() {
    let shuffledWebp = shuffle(webpElementsArray);
    console.log(shuffledWebp);
    for(i = 0; i < shuffledWebp.length; i++) {
        memoryElements[i].appendChild(shuffledWebp[i]);
    }
}

window.onload = startGame();

for (let i = 0; i < memoryElementsArray.length; i++) {
    memoryElementsArray[i].addEventListener("click", displayCard);
}


































/**
 * // Variables used
const cards = document.getElementsByClassName("card");
let allMemory = document.getElementsByClassName("card-image");
let movesDisplay = document.getElementById("move-counter");
let toggledCardsArray = [];
let move = 0;
let winCount = 0;
const restart = document.getElementById("restart-btn");

// Array list for img
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

// Restart function
const restartGame = function() {
    let toggledCard = document.getElementsByClassName("card toggled");
    memoryArray.sort(function() { Math.random() - 0.5});
    Object.values(toggledCard).forEach(function (el) {
        setTimeout (function() {
            el.classList.remove("toggled");
        }, 0);
    })
    toggledCardsArray.length = 0;
    move = 0;
    winCount = 0;
    movesDisplay.innerText = `Moves: ${move}`;
    let allMemorySrc = document.getElementsByClassName("card-image");
    Object.values(allMemorySrc).forEach(function(el, index) {
        el.src = imagesLinkArray[index].image;
        el.alt = imagesLinkArray[index].newAlt;
        el.id = imagesLinkArray[index].id
    })
}
restart.addEventListener("click", restartGame);

// Shuffle function
function shuffle(memoryArray) {
    let currentIndex = memoryArray.lenght;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [memoryArray[currentIndex], memoryArray[randomIndex]] = [
            memoryArray[randomIndex], memoryArray[currentIndex]];
    }
}

shuffle.addEventListener("click", restartGame);

//checking for the last clicked and current
//clicked cards and applying changes accordingly

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
        this.classList.add("toggled");
        toggledCardsArray.push(this);
        let thisImgSrc = this.querySelector(".card-image").src;
        let previousImgSrc = toggledCardsArray[toggledCardsArray.length - 2].querySelector(".card-image").src;
        if(thisImgSrc !== previousImgSrc) {
            toggledCardsArray.forEach(function (el) {
                setTimeout(() => { 
                    el.classList.remove("toggled"); 
                }, 500); 
            }) 
            toggledCardsArray.length = 0; 
            move++; 
        } 
        else{ 
            toggledCardsArray.length = 0; 
            move++; 
            winCount++; 
        } 
        movesDisplay.innerText = `Moves: ${move}`; 
        if(winCount === 8){ 
            setTimeout(()=>{ 
                alert(`Congratulations!!! You won the game in ${move} moves.`) 
            }, 300) 
        } 
    }) 
}
 */


