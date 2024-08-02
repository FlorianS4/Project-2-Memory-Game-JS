# Memory Game - Halo - Testing

![Memory Game Halo Am I Responsive Image](/assets/docs/readme-images/am-i-responsive.png)

Visit the deployed site: [Halo Memory Game](https://florians4.github.io/Project-2-Memory-Game-JS/)


## Content
- [Validator Testing](#validator-testing)
        - [HTML](#html)
        - [CSS](#css)
        - [JavaScript](#javascript)
- [Accessibility](#accessibility)
        - [Lighthouse Testing](#lighthouse-testing)
        - [Wave Testing](#wave-testing)
- [Links Testing](#links-testing)
- [Browser Testing](#browser-testing)
- [Device Testing](#device-testing)
- [User Testing](#user-testing)
- [Manual Testing](#manual-testing)


### Validator Testing
#### HTML
No errors were shown for the index.HTML document on the W3C Markup Validation Service
- [Index.HTML - validator result](https://validator.w3.org/nu/?doc=https%3A%2F%2Fflorians4.github.io%2FProject-2-Memory-Game-JS%2F)

No errors were shown for the 404.HTML document on the W3C Markup Validation Service
- [Index.HTML - validator result](https://validator.w3.org/nu/?doc=https%3A%2F%2Fflorians4.github.io%2FProject-2-Memory-Game-JS%2F404)

#### CSS
No errors were shown for the CSS stylesheet from the W3C CSS Validator
- [styles.css - validator result](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fflorians4.github.io%2FProject-2-Memory-Game-JS%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

#### JavaScript
[JSHint](https://jshint.com/) was used to validate the JavaScript.

![JSHint Result](/assets/docs/readme-images/jhint-testing.png)

### Accessibility
#### Lighthouse Testing
Desktop

Main:

![Lighthouse testing Main on Desktop](/assets/docs/readme-images/lighthouse-testing-desktop.png)

404:

![Lighthouse testing 404 on Desktop](/assets/docs/readme-images/lighthouse-testing-404-desktop.png)

Mobile

Main:

![Lighthouse testing Main on Mobile](/assets/docs/readme-images/lighthouse-testting-mobile.png)

404:

![Lighthouse testing 404 on Mobile](/assets/docs/readme-images/lighthouse-testing-404-mobile.png)

#### Wave Testing
Wave test Main page:

![Wave Test Main Page](/assets/docs/readme-images/wave-testing.png)

Wave test 404 page:

![Wave Test 404 Page](/assets/docs/readme-images/wave-testing-404.png)

### Links Testing
- All internal links are working correctly and redirecting to the correct sections.

### Browser Testing
The website was successfully tested on the following browsers:
- Google Chrome
- Safari
- Mozilla Firefox

### Device Testing
- The website was tested on different devices. 
    - Smartphones (Iphone Xr, Samsung Galaxy S2, Iphone 8, Iphone 11 Pro, Ipad Pro 11", Huawei P40 Pro)
    - Laptops
    - Desktop PCs

### User Testing

First Time User:

- I want to take a Halo Memory Game.

        * The user can play this Halo Memory Game.

- I want the site to be responsive to my device.

        * The user can play the game on whichever device they like.

- I want to play the game whenever, wherever.

        * The user can play the game whenever they like on whichever device they like, as long as they have internet connection.

- I want the side to be easy to navigate.

        * The website layout is structured so it is user friendly, with a common and easy to understand layout. The user can understand the purpose of the website without having to look deeply into it.

Returning User:

- I want to be able to play the game with memory cards in a different order.

        * The user can play the game and every time the memory cards will be shuffeled randomly.

Frequent User:

- I want to be able to see my score to see how I am performing and to beat my old highscore.

        * After completting the game, the score will be added to the scoreboard, where the best 3 tries on the used machine are dispalyed.

### Manual Testing

- Main Page 

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Site title(hero image) | reloads the website | clicked title(hero image) | Main Page reloads | Pass |
| Input field for username | Username has to be entered to play | enter username | game starts when enter is pressed | Pass |
| Blank Space Validation | User cannot enter white space | pressing spacebar | doesn't register in input field | pass |
| How to play button | Displays the pop-up with the instructions on how to play the game | Clicked on button | Pop-up with instructions on how to play opens | Pass |
| Play button | Opens Pop-up with memory game | Clicked on button | Game starts, only when username is entered | Pass |

- How to Play Pop-up

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| button to return to Main Page | returns to main page | Clicked on button | Returns to Main Page | Pass |

- Memory Game Pop-up

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Alert for entering name | shows up when username is entered and game pop-up opens | enter username and press play | alert shows up in front of memory game | Pass |
| Game itself | Memory cards turning over correctly, if a pair is found cards will stay face up | playing the game | cards are turning over correctly and pairs are staying face up | Pass |
| Moves counter | Moves counter starts with first two cards turned over | turned first two cards over | moves counter starts | Pass |
| Timer | Timer starts with first two cards turned over | turned first two cards over | timer starts | Pass |
| Restart Game button | restarts game | Clicked button | Game restarts | Pass |
| Finished Memory Game so End Game Screen pops-up | End Game Screen with Moves counter and timer shows up, after finishing the game | finding all matching pairs | End Game Screen pops-up | Pass |

- End Game Screen Pop-up

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| End Game Screen with moves and time to bet the game | Display Moves and Time to bet | finished the game | correct moves and time where displayed | Pass |
| Scoreboard button | Opens Scoreboard | Clicked button | Scoreboard opens | Pass |

-Scoreboard

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Score displayed | If the users move counts is in the top 3, the username and moves will be displayed in descending order | Played 10+ Games and logged a variety of scores | Once 3 Scores where displayed, only scores that were better than the third highest were displayed | Pass |
| Return to Main Page button | Takes the user to the main page | Clicked the button | Takes user to main page | Pass |


I also used following sides to test responsivness
- [Responsinator](http://www.responsinator.com/?url=https%3A%2F%2Fflorians4.github.io%2FProject-2-Memory-Game-JS%2Findex.html)
- [Am I Responsive](https://ui.dev/amiresponsive?url=https://florians4.github.io/Project-2-Memory-Game-JS/index.html)




