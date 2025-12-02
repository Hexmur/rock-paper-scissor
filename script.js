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

console.log(getPlayerChoice());
console.log(getComChoice());