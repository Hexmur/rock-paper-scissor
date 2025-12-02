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

let playerChoice = getPlayerChoice();
let comChoice = getComChoice();

let playerScore = 0;
let comScore = 0;

console.log(playRound(playerChoice, comChoice));