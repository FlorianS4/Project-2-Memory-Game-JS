// Po up created via tutorial https://www.youtube.com/watch?v=r_PL0K2fGkY
// variables for instruction Page open
const openInstructions = document.getElementById("instructionsPageOpen");
const closeInstructions = document.getElementById("instructionsPageClose");
const instructions = document.getElementById("instructions");

// Open Instructions via Popup
openInstructions.addEventListener("click", function() {
    instructions.classList.add("open");
});

// Closes Instructions Popup
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

// starts memory game if play button is clicked and name is entered in input field
openPlay.addEventListener("click", function() {
    if (userName.value === ""){
        // customized alerts via https://sweetalert2.github.io/
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You forgot to enter a username!",
          });
    } else {
        event.preventDefault();
        Swal.fire({
            title: "Have fun!",
            text: "Start the game by turning over a pair of memory cards!",
            icon: "success"
          });
        play.classList.add("open");
    }
});




// variables for scoreboard Page open
const openScoreboard = document.getElementById("scoreboardOpen");
const scoreboard = document.getElementById("scoreboard");
let nameFirst = document.getElementById("name-first");
let movesFirst = document.getElementById("moves-first");
let timesFirst = document.getElementById("times-first");

// Open Scoreboard in Play Page
openScoreboard.addEventListener("click", function() {   
    scoreboard.classList.add("open");
});

// memory game created via tutorial on https://aadaobi.medium.com/building-a-memory-matching-game-in-javascript-48e792c7b563
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



/**
 * shuffle the memory game cards at the start, using the Fisher-Yates shuffle method
 */
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

/**
 * function thats calls the shuffle function and starts the game
 */
function startGame() {
    //Shuffle cards
    let shuffledWebp = shuffle(webpElementsArray);
    for(let i = 0; i < shuffledWebp.length; i++) {
        //remove images from each memory card
        memoryElements[i].innerHTML = "";
        //add shuffled memory images to each memory card
        memoryElements[i].appendChild(shuffledWebp[i]);
        memoryElements[i].type = `${shuffledWebp[i].alt}`;
        //remove all extra classes for game play
        memoryElements[i].classList.remove("show", "open", "match", "disabled");
        memoryElements[i].children[0].classList.remove("show-webp");
    }

    //listen for events on memory cards
    for(let i = 0; i < memoryElementsArray.length; i++) {
        memoryElementsArray[i].addEventListener("click", displayMemory);
    }

    //reset moves on game reset
    moves = 0;
    counter.innerText = `${moves} move(s)`;

    //reset timer on game reset
    timer.innerHTML = `0 mins 0 secs`;
    clearInterval(interval);
}

/**
 * function that displays memory cards during game
 */
function displayMemory() {
    this.children[0].classList.toggle("show-webp");
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
    memoryOpen(this);
}

/**
 * function that checks whether a card pair is the same or not and proceeds accordingly
 */
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

/**
 * function for matching pairs, let them stay open and removes them out of the array
 */
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

/**
 * function for unmatched pairs, turns them back offer and puts the memory cards back into the array
 */
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
    }, 1100);
}

/**
 * function that disables card from beeing clicked if card is already shown
 */
function disable() {
    memoryElementsArray.filter((memory, i, memoryElementsArray) => {
        memory.classList.add("disabled");
    });
}

/**
 * enable card clicking again
 */
function enable() {
    memoryElementsArray.filter((memory, i, memoryElementsArray) => {
        memory.classList.remove("disabled");
        for(let i=0; i < matchedMemorys.length; i++) {
            matchedMemorys[i].classList.add("disabled");
        }
    });
}

/**
 * function for move counter, starts timer after first move is made (turning over two cards)
 */
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

/**
 * timer function
 */
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
    }, 1000);
}

// for Scoreboard used the following videos https://www.youtube.com/watch?v=jfOv18lCMmw and https://www.youtube.com/watch?v=DFhmNLKwwGw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=10
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const maxHighScores = 3;
const highScoresList = document.getElementById("highScoresList");

/**
 * end of memory game function
 */
function endGame() {
    clearInterval(interval);
    totalGameTime = timer.innerHTML;

    // show end screen score 
    endScreen.classList.add("show-game-end-score");

    // show total Game Moves and Game Time in end screen
    totalGameMoves.innerHTML = moves;
    totalGameTimeDisplay.innerHTML = totalGameTime;

    const score = {
        score: moves,
        name: userName.value
    };
    highScores.push(score);
    highScores.sort( (a,b) => a.score - b.score);
    highScores.splice(3);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    highScoresList.innerHTML = highScores.map( score => {
        return `<li class="high-score">${score.name} moves:${score.score}</li>`;
    }).join("");

    matchedMemorys = [];
    scoreDisplay();
}



/**
 * display score function
 */
function scoreDisplay() {
    endScreen.addEventListener("click", function() {
        endScreen.classList.remove("show-game-end-score");
    });
}

window.onload = startGame();


// Start memory game via Enter Button and only if a username is given
let userName = document.getElementById("username");

userName.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        if (userName.value === ""){
            // customized alerts via https://sweetalert2.github.io/
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You forgot to enter a username!",
              });
        } else {
            event.preventDefault();
            Swal.fire({
                title: "Have fun!",
                text: "Start the game by turning over a pair of memory cards!",
                icon: "success"
              });
            play.classList.add("open");
        }
    }
});

// button to return from scoreboard to main menu
let mainMenuButton = document.getElementById("main-menu-button");

mainMenuButton.addEventListener("click", function(){
    window.location.replace("index.html");
});

// function to ignore white space input via https://stackoverflow.com/questions/13766015/is-it-possible-to-configure-a-required-field-to-ignore-white-space
function ignoreSpaces(event) {
    var character = event ? event.which : window.event.keyCode;
      if (character == 32) return false;
      alert
  }