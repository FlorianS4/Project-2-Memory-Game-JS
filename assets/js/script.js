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

// Instructions via JS
let instructionsGame = document.getElementById("gameInstructions");
instructionsGame.innerText = "1. Press the 'Play the Game' button in the Main Menu\n 2. Select two cards.\n 3. If you select 2 cards, the game will count it as the first move and start the timer.\n 4. Your goal is to match 8 pairs of cards as fast as possible and with as little moves as possible.\n 5. After you complete the game there will be a Pop-up with your time and moves counter.\n 6. A button for scoreboard will show your score in a table.";
instructionsGame.style.padding = "10px";
instructionsGame.style.fontSize = "110%";
instructionsGame.style.textAlign = "justify";
instructionsGame.style.lineHeight = "1.1em";
instructions.style.overflow = "auto";
closeInstructions.style.margin = "3px";


// Open Play page via Popup
const openPlay = document.getElementById("playPageOpen");
const play = document.getElementById("play");

// starts Memory Game if name is entered
openPlay.addEventListener("click", function() {
    if (userName.value === ""){
        alert("Enter a username to start");
    } else {
        event.preventDefault();
        localStorage.setItem("userName", userName.value);
        alert("Have fun!");
        play.classList.add("open");
    }
});




// Open Scoreboard in Play Page
const openScoreboard = document.getElementById("scoreboardOpen");
const scoreboard = document.getElementById("scoreboard");
let nameFirst = document.getElementById("name-first");
let movesFirst = document.getElementById("moves-first");
let timesFirst = document.getElementById("times-first");


openScoreboard.addEventListener("click", function() {   
    scoreboard.classList.add("open");
});

// Memory Game Play variables
let memoryElements = document.getElementsByClassName("memory-card");
let memoryElementsArray = [...memoryElements];
let webpElements = document.getElementsByClassName("memory-card-webp");
let webpElementsArray = [...webpElements];
let counter = document.getElementById("moveCounter");
let timer = document.getElementById("timer");
let endScreen = document.getElementById("gameEndScore");
let totalGameMoves = document.getElementById("totalMoves");
let totalGameTimeDisplay = document.getElementById("gameTime");
let openedMemorys = [];
let matchedMemorys = [];
let moves;
let second = 0,
    minute = 0,
    hour = 0,
    interval,
    totalGameTime;



    //Shuffle function called Fisher-Yates Shuffle
function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;
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
    //Shuffle cards
    let shuffledWebp = shuffle(webpElementsArray);
    for(i = 0; i < shuffledWebp.length; i++) {
        //remove images from each memory card
        memoryElements[i].innerHTML = "";
        //add shuffled memory images to each memory card
        memoryElements[i].appendChild(shuffledWebp[i]);
        memoryElements[i].type = `${shuffledWebp[i].alt}`;
        //remove all extra classes for game play
        memoryElements[i].classList.remove("show", "open", "match", "disabled");
        memoryElements[i].children[0].classList.remove("show-webp")
    }

    //listen for events on memory cards
    for(let i = 0; i < memoryElementsArray.length; i++) {
        memoryElementsArray[i].addEventListener("click", displayMemory)
    }

    //reset moves on game reset
    moves = 0;
    counter.innerText = `${moves} move(s)`;

    //reset timer on game reset
    timer.innerHTML = `0 mins 0 secs`;
    clearInterval(interval);
}

// Display Card function
function displayMemory() {
    this.children[0].classList.toggle("show-webp");
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
    memoryOpen(this);
}

// Memory Game function
function memoryOpen(memory) {
    openedMemorys.push(memory);
    let len = openedMemorys.length;
    if(len === 2) {
        moveCounter();
        if(openedMemorys[0].type === openedMemorys[1].type) {
            matched();
        } else {
            unmatched();
        }
    }
}

function matched() {
    openedMemorys[0].classList.add("match");
    openedMemorys[1].classList.add("match");
    openedMemorys[0].classList.remove("show", "open");
    openedMemorys[1].classList.remove("show", "open");
    matchedMemorys.push(openedMemorys[0]);
    matchedMemorys.push(openedMemorys[1]);
    openedMemorys = [];
    if(matchedMemorys.length == 16) {
        endGame();
    }
}

function unmatched() {
    openedMemorys[0].classList.add("unmatched");
    openedMemorys[1].classList.add("unmatched");
    disable();
    setTimeout(function() {
        openedMemorys[0].classList.remove("show", "open", "unmatched");
        openedMemorys[1].classList.remove("show", "open", "unmatched");
        openedMemorys[0].children[0].classList.remove("show-webp");
        openedMemorys[1].children[0].classList.remove("show-webp");
        enable();
        openedMemorys = [];
    }, 1100)
}

function disable() {
    memoryElementsArray.filter((memory, i, memoryElementsArray) => {
        memory.classList.add("disabled");
    })
}

function enable() {
    memoryElementsArray.filter((memory, i, memoryElementsArray) => {
        memory.classList.remove("disabled");
        for(let i=0; i < matchedMemorys.length; i++) {
            matchedMemorys[i].classList.add("disabled");
        }
    })
}

function moveCounter() {
    moves++;
    counter.innerHTML = `${moves} move(s)`;

    if(moves == 1) {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
}

function startTimer() {
    interval = setInterval(function() {
        timer.innerHTML = `${minute} mins ${second} secs`;
        second++;
        if(second == 60) {
            minute++;
            second = 0;
        }
        if(minute == 60) {
            hour++;
            minute = 0;
        }
    }, 1000)
}

//End of Memory game function
function endGame() {
    clearInterval(interval);
    totalGameTime = timer.innerHTML;

    // show end screen score 
    endScreen.classList.add("show-game-end-score");

    // show total Game Moves and Game Time in end screen
    totalGameMoves.innerHTML = moves;
    totalGameTimeDisplay.innerHTML = totalGameTime;
    
    // send end results to scoreboard
    localStorage.setItem("moves", moves);
    localStorage.setItem("times", totalGameTime);
    nameFirst.innerHTML = localStorage.getItem("userName");
    movesFirst.innerText = localStorage.getItem("moves");
    timesFirst.innerText = localStorage.getItem("times"); 

    matchedMemorys = [];
    scoreDisplay();
}

function scoreDisplay() {
    endScreen.addEventListener("click", function() {
        endScreen.classList.remove("show-game-end-score");
    })
}

window.onload = startGame();


// Start memory game via Enter Button and only if a username is given
let userName = document.getElementById("username");

userName.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        if (userName.value === ""){
            alert("Enter a username to start");
        } else {
            event.preventDefault();
            localStorage.setItem("userName", userName.value);
            alert("Have fun!")
            play.classList.add("open");
        }
    }
});
