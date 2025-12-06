function getComChoice(){
  let choice = Math.floor(Math.random()*3);
  let comMove = "";
  if(choice === 0) comMove = "rock";
  else if(choice === 1) comMove = "paper";
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

  let result = -1; //result=0 -> Com wins, result=1 -> Player wins
                   //result=-1 -> tie

  if( (newPlayerChoice === "rock" && comChoice == "scissor")
    || (newPlayerChoice === "paper" && comChoice == "rock")
    || (newPlayerChoice === "scissor" && comChoice == "paper") ){
      console.log("You win!");
      result = 1;
    }
  else if( (comChoice === "rock" && newPlayerChoice == "scissor")
    || (comChoice === "paper" && newPlayerChoice == "rock")
    || (comChoice === "scissor" && newPlayerChoice == "paper") ){
      console.log("You lose!");
      result = 0;
    }
  else{
    console.log("It's a tie!");
    result = -1;
  }

  return result;
}

function playGame(){
  console.log(`Player ${playerScore} - Com ${comScore}`);
}

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissor = document.querySelector("#btnScissor");

const divBtn = document.querySelector("#divBtn");
const divResult = document.querySelector("#divResult");

const playerResultText = document.querySelector("#playerResult");
const comResultText = document.querySelector("#comResult");
const winnerText = document.querySelector("#winner");

let playerScore = 0;
let comScore = 0;
let roundResult = 0;
let round = 0;
let playerChoice = "";

divBtn.addEventListener("click", (event) =>{

  switch(event.target.id){
    case 'btnRock': playerChoice = "rock"; break;
    case 'btnPaper': playerChoice = "paper"; break;
    case 'btnScissor': playerChoice = "scissor"; break;
    case 'divBtn': console.log("Please press a button"); return;
  }

  console.log(`Round ${round+1}`);
  let comChoice = getComChoice();
  roundResult = playRound(playerChoice, comChoice);
  if(roundResult === 1){
    playerScore++;
    playerResultText.textContent = playerScore;
  }
  else if(roundResult === 0){
    comScore++;
    comResultText.textContent = comScore;
  }

  if(playerScore === 5){
    winnerText.textContent = "You are the winner!"
  }

  else if(playerScore === 5){
    winnerText.textContent = "You lose the game!"
  }

});

playGame();