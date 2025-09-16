let userScore = 0;
let compScore = 0;

let userMessage = document.getElementById("userScore");
let compMessage = document.getElementById("computerScore");

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");

const drawGame = () => {
  message.innerText = "It's a draw.";
  message.style.backgroundColor = "#081b31";
};

const userWin = (userChoice, compChoice) => {
  userScore += 1;

  message.innerText = `Your ${userChoice} beats ${compChoice}.`;
  userMessage.innerText = userScore;
  message.style.backgroundColor = "green";
};

const compWin = (userChoice, compChoice) => {
  compScore += 1;

  compMessage.innerText = compScore;
  message.innerText = `${compChoice} beats your ${userChoice}`;
  message.style.backgroundColor = "red";
};

const generateChoice = () => {
  let options = ["rock", "paper", "scissor"];

  const idx = Math.floor(Math.random() * 3);

  let compChoice = options[idx];
  return compChoice;
};

const playGame = (userChoice) => {
  //Getting Computer's choice in compChoice variable
  let compChoice = generateChoice();
  console.log("Comp chose ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  }

  if (userChoice == "rock" && compChoice == "scissor") {
    userWin(userChoice, compChoice);
  } else if (userChoice == "paper" && compChoice == "scissor") {
    compWin(userChoice, compChoice);
  } else if (userChoice == "scissor" && compChoice == "rock") {
    compWin(userChoice, compChoice);
  } else if (userChoice == "paper" && compChoice == "rock") {
    userWin(userChoice, compChoice);
  } else if (userChoice == "scissor" && compChoice == "paper") {
    userWin(userChoice, compChoice);
  } else if (userChoice == "rock" && compChoice == "paper") {
    compWin(userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
