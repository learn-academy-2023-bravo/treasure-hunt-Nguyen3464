# 💰 React Treasure Hunt Game

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

### 🤔 Remember

- Pseudocode!!
- Ask clarifying questions

### 📚 User Stories

- As a user, I can see a page with a three by three grid board game with a question mark in each square.

    -branch: game-board <check>
    -import square component into App.js, call the component <check>
    -create a 3x3 grid <check>
    -pass state array to the square componet <check>
    -style square <check>

- As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.

    -branch index-position <check>
    -add onClick to square <check>
    -add handleClick to square.js <check>
    -pass index to Square and handleClick <check>
    -add handleGamePlay to App.js <check>
    -pass handleGamePlay to Square to the index by using functional props <check>

- As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.

    -branch tree-emoji <check>
    -add tree emoji when game board is clicked <check>
    -update the value of the square at particular index to be a tree<check>
    -CTRL + CMD + Space for emoji <check>

- As a user, if I select the winning square the question mark will become a treasure emoji and if I select the losing square the question mark will become a bomb emoji.

    -add randomized treasure emoji when square is clicked <check>
    -add randomized bomb emoji when square is clicked <check>

- As a user, I can click on a “Play Again” button that will restart the game.

    -add a button that restarts page <check>

- As a user, I can see a counter that shows how many guesses I have left. The counter starts at five and decrements one every time I click on a square that is not the treasure nor the bomb.

    -branch counter
    -add a counter that starts at 5
    -the counter will --1 when onClick() is read
    

    
- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
- As a user, I cannot continue to play the game after I win or lose.
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).

### 🏔 Stretch Goals

- Consider how to handle a situation where the bomb and the treasure are at the same index.

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).
