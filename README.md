# Memory Game -Halo

![Memory Game Halo Am I Responsive Image](/assets/docs/readme-images/am-i-responsive.png)

You like Halo and are good at memorizing pictures?
Then this Halo memory game is perfect for you! 

It shows some of the most memorable characters, things out of the Halo-universe and they come in pairs!
Test your skill in recognizing pairs and doing it as fast as possible!

Are you up to the task? Then visit [Halo Memory Game](https://florians4.github.io/Project-2-Memory-Game-JS/)!!

## Content
- [Site Owner Goals](#site-owner-goals)
- [User Experience](#user-experience)
    - [User Stories](#user-stories)
        - [First Time User](#first-time-user)
        - [Returning User](#returning-user)
        - [Frequent User](#frequent-user)
- [Design](#design)
    - [Typography](#typography)
    - [Imagery](#imagery)
    - [Color Scheme](#color-scheme)
- [Wireframes](#wireframes)
- [Features](#features)
    - [Favicon](#favicon)
    - [Main Page](#main-page)
    - [Game Instruction Pop-up](#game-instruction-pop-up)
    - [Game Pop-up](#game-pop-up)
    - [Memory Game](#memory-game)
    - [End of Game Screen](#end-of-game-screen)
    - [Scoreboard](#scoreboard)
    - [404 Page](#404-page)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Programs Used - Frameworks - Libraries](#programs-used---frameworks---libraries)
- [Deployment](#deployment)
    - [Running the project locally](#running-the-project-locally)
- [Credits](#credits)
    - [Content](#content)
    - [Resources Used](#resources-used)
    - [Media](#media)
- [Fixed Bugs](#fixed-bugs)
- [Future Content](#future-content)
- [Acknowledgments](#acknowledgments)


## Site Owner Goals
- to provide the user with a fun, quick memory game with images out of the Halo Universe
- to provide a fun experience for people who have no idea about Halo.
- to provide the user with a challenge to remember the pictures and to complete the quiz as fast as possible.

## User Experience
### User Stories
#### First Time User
#### Returning User
#### Frequent User
## Design
### Typography

[Google Fonts](https://fonts.google.com/) was used for the following fonts:
- ![Rajdhani font image](/assets/docs/readme-images/google-font-for-h.png)

    [Rajdhani](https://fonts.google.com/specimen/Rajdhani?preview.text=Halo%20Memory%20Game&query=Rajdhani) was chosen for my headings.
- ![Inconsolata font image](/assets/docs/readme-images/google-font-for-body.png)

    [Inconsolata](https://fonts.google.com/specimen/Inconsolata?preview.text=Halo%20Memory%20Game&query=Inconsolata) was chosen for my body.
- I picked both those fonts, because they reminded me of the fonts used in Halo.
- Sans Serif was chosen as a backup font, in case the main font is not imported into the website, or there is a problem with the browser.

### Imagery

All Images were taken from different websites. I give credit to them in the [credits](#credits) section. The images selected show different characters from the Halo Universe.

### Color Scheme

The website has a background picture in line with the following scheme. I wanted to keep the color scheme I used on the site small to not overwhelm the user.

* I have used `#000000` as the primary color for text used on the site.
* I have used `#8EA72F` as the background color.
* I have used `#9B9B9B` as the placeholder text color for the input field.
* I have used `#374E95` as the color for the hover functions on the buttons.

![Halo Memory Game Color Palette](/assets/docs/readme-images/color-palette-project-2.png)
## Wireframes
<details>

<summary>Desktop Wireframe</summary>
Main Page:

![Wireframe Main Page Desktop](/assets/docs/readme-images/start-side-desktop.png)

Game Instruction:

![Wireframe Game Instruction Pop-up Desktop](/assets/docs/readme-images/how-to-play-side-desktop.png)

Memory Game:

![Wireframe Memory Game Desktop](/assets/docs/readme-images/play-game-side-desktop.png)

End of Game Screen:

![Wireframe End of Game Screen Desktop](/assets/docs/readme-images/end-game-screen-desktop.png)

Scoreboard:

![Wireframe Scoreboard Desktop](/assets/docs/readme-images/scoreboard-desktop.png)

</details>

<details>

<summary>Mobile Wireframe</summary>
Main Page:

![Wireframe Main Page Mobile](/assets/docs/readme-images/start-side-mobile.png)

Game Instruction Pop-up:

![Wireframe Game Instruction Pop-up Mobile](/assets/docs/readme-images/how-to-play-mobile.png)

Memory Game:

![Wireframe Memory Game Mobile](/assets/docs/readme-images/play-game-side-mobile.png)

End of Game Screen:

![Wireframe End of Game Screen Mobile](/assets/docs/readme-images/end-game-screen-mobile.png)

Scoreboard:

![Wireframe Scoreboard Mobile](/assets/docs/readme-images/scoreboard-mobile.png)
</details>

## Features
### Favicon
![Favicon](/assets/docs/readme-images/favicon-picture.png)

### Main Page
![Main Page](/assets/docs/readme-images/main-page.png)
- The main menu has two buttons with a hover function and an input element.

![Hover Function Button](/assets/docs/readme-images/hover-function-button.png)
- While hovering the buttons background color turns blue and the font color white. This feature is implemented for every button on the website.
- The User also has to select a name, to start the game in the input element. I put a blank space validator in it. The user can either enter a name by pressing the enter key or by pressing the play the game button.
- All elements respond to the screen size.
 
### Game Instruction Pop-up
![Instruction Pop-up](/assets/docs/readme-images/instruction-page-pop-up.png)
- The How to play button can be clicked and a pop-up will appear with the rules
- After the user read the rules, they can go back to the main menu and start the game.
- All elements respond to the screen size.

### Game Pop-up
![Memory Game](/assets/docs/readme-images/memory-game.png)
- The memory game consists of 4x4 squares with 8 different pairs of cards which are randomly shuffled.
- All elements respond to the screen size.

![Timer and Move-Counter](/assets/docs/readme-images/memory-game-timer-and-move-counter.png)
- The time and move-counter starts after the first 2 cards are turned over.This is explained in the How to Play pop-up.
- There is no limit to the timer or the moves as the user should see this memory as something fun and not something to compete in.
- Below the timer and move counter is a restart button. The user is able to restart whenever he or she likes to. After clicking the button all cards will turn over and be re-shuffled. Times and Moves are restarted as well.

### Memory Game
![Memory Gameplay](/assets/docs/readme-images/memory-game-play.gif)
- Showing the above descripted features in game. As most people are familiar with memory games the concept should be easy to understand even without reading the instructions.

### End of Game Screen
![End of Game Screen](/assets/docs/readme-images/end-of-game-screen.png)
- After the user complets the game, there will be pop-up display of his/her score.
- A button will redirect the user to the scoreboard, or he/she can always restart the game with the restart button, mentioned above.

### Scoreboard
![Scoreboard](/assets/docs/readme-images/scoreboard.png)
- If the users continues to the scoreboard, his/her last score will be registered into a tabel for display.
- He/She can then return to the main page with a button.

### 404 Page
![404 Page](/assets/docs/readme-images/404-page.png)
- When an error occurs or a wrong input is given to the url the 404-page will show up with the information on how to be redirected to the landing page.

## Testing
See the testing results in the [TESTING.md](TESTING.md) file.

## Technologies Used
### Languages
HTML, CSS, JavaScript

### Programs Used - Frameworks - Libraries
- [Google Fonts](https://fonts.google.com/) - to import  fonts used on website.
- [FontAwesome](https://fontawesome.com/) - for footer's and navbar's icon.
- [Google Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools)- for troubleshooting, debugging, inspecting page's elements, testing responsiveness and styling elements.
- [Favicon.cc](https://www.favicon.cc/) - for website's favicon.
- [Gitpod](https://gitpod.io/) - IDE to develop the website.
- [GitHub](https://GitHub.com/) - for version control and hosting.
- [Balsamiq](https://balsamiq.com/wireframes/)- to create wireframes.
- [Coolors](https://coolors.co/) - to create color palette.
- [Wave](https://wave.webaim.org/) to test accessibility.
- [Google Chrome's Lighthouse](https://developers.google.com/web/tools/lighthouse) - to test performance and accessibility.
- [Responsinator](http://www.responsinator.com/) to verify responsiveness especially usage for mobile devices.
- [Am I Responsive](https://ui.dev/amiresponsive) to test responsiveness.
- [W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/) to validate CSS code.
- [W3C HTML Markup Validator](https://validator.w3.org/) to validate HTML code.
- [TinyPNG](https://tinypng.com/) - to compress images to reduce file size without a reduction in quality.


## Deployment
This site was deployed to GitHub pages. Instructions:

- Login to Github.
- Go to the GitHub repository: FlorianS4/Project-2-Memory-Game-JS, navigate to the Settings tab.
- Select the Pages tab on the menu on the left side.
- Under Source, choose main from the Branch dropdown menu. TSave it.
- The page will refresh itself and the website is now deployed with a text indicating such.

### Running the project locally
How to Fork:
- Login to Github
- Go to the GitHub repository: Project-2-Memory-Game-JS
- Select the Fork button on the right at the top

How to clone:
- Login to Github
- Go to the GitHub repository: Project-2-Memory-Game-JS
- Select the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
- Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
- Type 'git clone' into the terminal and then paste the link you copied in step 3. and enter.
- A clone will be created.

## Credits
### Content
### Resources Used
- Code Institute's lessons (love running project)
- [Stack Overflow](https://stackoverflow.com/)
- [W3Schools](https://www.w3schools.com/)
### Media
- [Background Picture Website](https://wall.alphacoders.com/big.php?i=1346558#google_vignette) - Playbox36
- [Background Picture Memory Game Cards](https://www.pinterest.com/pin/469359592389271886/)
- [Avery Johnson](https://halo.fandom.com/wiki/Avery_Johnson?file=SSgt_Avery_Johnson%2C_UNSC_Marine_Corps.JPG)
- [Halo Energy Sword](https://www.artstation.com/artwork/B1021z) - Sophia L.
- [Arbiter](https://halo.fandom.com/wiki/Arbiter?file=Halo_Wars_Art_0.jpg)
- [UNSC Logo](https://www.etsy.com/in-en/listing/1682361709/halo-unsc-united-nations-space-command) - found the picture on ETSY, the shop is as of writing this not available, will add credits if it comes back online
- [Master Chief](https://www.redbull.com/gb-en/halo-master-chief-collection-esports) - Microsoft
- [Cortana](https://www.pinterest.com/pin/250372060527873847/) - Cosmonauta Guerrero AAMA
- [Master Chief Helmet](https://www.slashfilm.com/799175/halo-star-pablo-schreiber-explains-why-its-crucial-that-master-chief-remove-his-helmet-exclusive/) - Microsoft
- [Installation 5 Halo Ring](https://halo.fandom.com/de/wiki/Installation_05?file=New_Installation_05_Pic_Halo_2_Aniversery.jpg)

## Fixed Bugs

## Future Content

## Acknowledgments
My mentor Jubril Akolade for his guidance, input and support.

The Slack community on Code Institute for reviewing my project and for support.

Code Institute for informational courses.