const X_CLASS = 'x';
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
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const restartButton = document.getElementById('restartButton');

let circleTurn;

// Start game on page load
startGame();

// Restart game when restart button is clicked
restartButton.addEventListener('click', function(){
  window.location.href = 'game.html';
});

function startGame() {
    circleTurn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS, CIRCLE_CLASS);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
    
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = X_CLASS;


  if (!cell.classList.contains("true")) {
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
      endGame(false, currentClass);
    } else if (isDraw()) {
      endGame(true, "d");
    } else {
      setBoardHoverClass();
      bothandle()
    }
  }

}

function bothandle() {
  const currentClass = CIRCLE_CLASS ;

  let count = []
  for (let i=0; i < cellElements.length; i++) {
    if (!cellElements[i].classList.contains("true")) {
      count.push(cellElements[i].getAttribute("name"))
    }
  }
  var randomNumbers = [];
  let rumber = 0
  while (randomNumbers.length < 1) {
    var randomIndex = Math.floor(Math.random() * count.length);
    var randomNumber = count.splice(randomIndex, 1)[0];
    rumber = randomNumber
    randomNumbers.push(randomNumber);
  }

  console.log(cellElements[rumber-1], rumber)
  if (cellElements[rumber-1]) {
    placeMark(cellElements[rumber-1], currentClass);
  }

  if (checkWin(currentClass)) {
    endGame(false, currentClass);
  } else if (isDraw()) {
    endGame(true, "d");
  }
}


function endGame(draw, calss) {
  console.log(calss)
  if (calss == "x") {
    winningMessageTextElement.innerText = "You Win !!!";
  } else if(calss == "d") {
    winningMessageTextElement.innerText = "It's Draw";
  } else if (calss == "circle") {
    winningMessageTextElement.innerText = "Bot Win !!!";
  }

  winningMessageElement.classList.add('show');
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass, "true");

}



function swapTurns() {
  circleTurn = !circleTurn;
}
function setBoardHoverClass() {
  // board.classList.remove(X_CLASS, CIRCLE_CLASS);
  // if (circleTurn) {
  //   board.classList.add(CIRCLE_CLASS);
  // } else {
  //   board.classList.add(X_CLASS);
  // }
  board.classList.add(X_CLASS);
}

function checkWin(currentClass) {
  return WINNING_COMBINATION.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const startGameButton = document.getElementById('startButton');
  startGameButton.addEventListener('click', () => {
      window.location.href = 'game.html'; // Make sure this matches the filename of your Tic Tac Toe game
  });
});


