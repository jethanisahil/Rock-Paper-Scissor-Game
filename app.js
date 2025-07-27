let userScore = 0;
let compScore = 0;

const options = document.querySelectorAll(".choice");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#computer-score");
const msgs = document.querySelector("#msg");

const drawGame = () => {
  console.log("Game was Draw!");
  msgs.innerText = "Game was draw.Try again!";
  msgs.style.background = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    user_score.innerText = userScore;
    console.log("You Win!");
    msgs.innerText = `You Win. Your ${userChoice} beats ${compChoice}!`;
    msgs.style.background = "green";
  } else {
    compScore++;
    comp_score.innerText = compScore;
    console.log("You Lose!");
    msgs.innerText = `You Lose. ${compChoice} beats your ${userChoice}!`;
    msgs.style.background = "red";
  }
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3);
  return options[random];
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

options.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
