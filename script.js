function getComChoice(){
  let result = Math.floor(Math.random()*3);
  let comMove = "";
  if(result === 0) comMove = "rock";
  else if(result === 1) comMove = "paper";
  else comMove = "scissor";
  return comMove;
}

function getPlayerChoice(){
  let playerMove = prompt("What's your move?");
  return playerMove;
}

function playRound(playerChoice, comChoice){
  let newPlayerChoice = playerChoice.toLowerCase();

  console.log(`Player choice: ${newPlayerChoice}`);
  console.log(`Com choice: ${comChoice}`);

  if( (newPlayerChoice === "rock" && comChoice == "scissor")
    || (newPlayerChoice === "paper" && comChoice == "rock")
    || (newPlayerChoice === "scissor" && comChoice == "paper") )
    console.log("You win!");
  else if( (comChoice === "rock" && playenewPlayerChoicerChoice == "scissor")
    || (comChoice === "paper" && newPlayerChoice == "rock")
    || (comChoice === "scissor" && newPlayerChoice == "paper") )
    console.log("You lose!");
  else
    console.log("It's a tie!");
}

let playerChoice = getPlayerChoice();
let comChoice = getComChoice();

let playerScore = 0;
let comScore = 0;

playRound(playerChoice, comChoice);