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

  let playerScore = 0;
  let comScore = 0;
  let roundResult = 0;

  for(i=0; i<5; i++){
    let playerChoice = getPlayerChoice();
    let comChoice = getComChoice();
    roundResult = playRound(playerChoice, comChoice);
    console.log(roundResult);
    if(roundResult === 1) playerScore++;
    else if(roundResult === 0) comScore++;
  }

  if(playerScore > comScore) console.log("You win the match!");
  else if(playerScore < comScore) console.log("You lose the match!");
  else console.log(`The result of the match is a tie!`);

  console.log(`Player ${playerScore} - Com ${comScore}`);
}

playGame();