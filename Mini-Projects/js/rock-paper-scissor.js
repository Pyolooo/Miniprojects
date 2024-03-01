const choices = ["✊", "✋", "✌️"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("result");
const playerScore = document.querySelector(".greenText")
const computerScore = document.querySelector(".redText");
const resetBtn = document.getElementById("reset");
let player = 0;
let computer = 0;


const playGame = (playerMove) => {

  const computerMove = choices[Math.floor(Math.random() * 3)];
  let result = '';
  
  if(playerMove === computerMove) {
    result = "IT'S A TIE!";
  } else {
    switch(playerMove) {
      case '✊':
        result = (computerMove === '✌️') ? "YOU WIN!" : "YOU LOSE!"
        break;
      case '✋':
        result = (computerMove === '✊') ? "YOU WIN!" : "YOU LOSE!"
        break;
      case '✌️':
        result = (computerMove === '✋') ? "YOU WIN!" : "YOU LOSE!"
        break;
    }

    playerDisplay.textContent = `Player picks ${playerMove}`;
    computerDisplay.textContent = `Computer picks ${computerMove}`;
    resultDisplay.style.display = 'block';
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result) {
      case 'YOU WIN!':
        player++;
        playerScore.classList.add("greenText");
        resultDisplay.classList.add("greenText");
        playerScore.textContent = player;
        break;
      case 'YOU LOSE!':
        computer++;
        computerScore.classList.add("redText");
        resultDisplay.classList.add("redText");
        computerScore.textContent = computer;
    }
  }
}

resetBtn.addEventListener("click", () => {
  playerDisplay.textContent = ""; 
  computerDisplay.textContent = "";
  resultDisplay.style.display = "none"
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  player = 0;
  computer = 0;

})
