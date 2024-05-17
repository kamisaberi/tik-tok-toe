# Tik Tok Toe
-- description about game and how it works





-- describe file and thier duties:
### in this project you can see files as below : 
-   `lobby.html` \
    this file is the sart page of game and you can start game here . this web page contains 2 button that you can select to play vesus bot or play against your friend
-   `index.html` \
    after start 2 player game at lobby.html web page this page will be started and you can play game with your friend 
-   `game.html` \
    after start 1 player game at lobby.html web page this page will be started and you can play game against bot
-   `styles.css` \
    describe here     
-   `styles1.css` \
    describe here     
-   `lobby.css` \
    describe here     
-   `script.js` \
    describe here     
-   `script1.js` \
    describe here     

-- describe file content and function contents
- Constants 
    ```
    const X_CLASS = "x"; 
    const CIRCLE_CLASS = 'circle';
    const WINNING_COMBINATION = [
            [0, 1, 2], 
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            ];
    ```
    `const X_CLASS` reperesnt X flag in game as first player  \
    `const CIRCLE_CLASS` reperesnt O flag in game as second player \
    `const WINNING_COMBINATION` represent all wininning options in game \
    \
    \
    
    ```
    const cellElements = document.querySelectorAll('[data-cell]');
    const board = document.getElementById('board');
    const winningMessageElement = document.getElementById('winningMessage');
    const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
    const restartButton = document.getElementById('restartButton');

    ```











