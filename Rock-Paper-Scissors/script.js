const comuterChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerCoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult()
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerCoice = "rock";
  }

  if (randomNumber === 2) {
    computerCoice = "scissors";
  }

  if (randomNumber === 3) {
    computerCoice = "paper";
  }
  comuterChoiceDisplay.innerHTML = computerCoice;
}

function getResult() {
  if (computerCoice === userChoice) {
    result = "its a draw!";
  }
  if (computerCoice === "rock" && userChoice === "paper") {
    result = "you win!";
  }
  if (computerCoice === "rock" && userChoice === "scissors") {
    result = "you lose!";
  }
  if (computerCoice === "paper" && userChoice === "rock") {
    result = "you lose!";
  }
  if (computerCoice === "paper" && userChoice === "scissors") {
    result = "you win!";
  }
  if (computerCoice === "scissors" && userChoice === "rock") {
    result = "you win!";
  }
  if (computerCoice === "scissors" && userChoice === "paper") {
    result = "you lose!";
  }
  resultDisplay.innerHTML = result
}
