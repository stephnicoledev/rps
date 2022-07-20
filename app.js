const computerChoiceDisplay = document.getElementById("computerChoice");
const playerChoiceDisplay = document.getElementById("playerChoice");
const resultDisplay = document.getElementById("result");
const gameChoices = document.querySelectorAll("button");

let computerChoice;
let playerChoice;
let result;

gameChoices.forEach((choice) =>
  choice.addEventListener("click", (event) => {
    playerChoice = event.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    getResult();
  })
);

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
};

const getResult = () => {
  if (computerChoice === playerChoice) {
    result = "It's a draw!";
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    result = "You win!";
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    result = "You lose!";
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    result = "You lose!";
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    result = "You win!";
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    result = "You lose!";
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    result = "You win!";
  }
  resultDisplay.innerHTML = result;
};
