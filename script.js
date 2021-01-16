let choiceList = ['rock', 'paper', 'scissors'];

let computerScore = 0;
let userScore = 0;
let tieScore = 0;
function gamePlay(player, computer){
    if(player == 'rock' && computer == 'paper')
    {
      return computerScore++;
    } else if (player == 'paper' && computer == 'scissors') {
      return computerScore++;
    } else if (player == 'scissors' && computer == 'rock') {
      computerScore++;
    } else if (player == computer) {
      tieScore++;
    } else { return userScore++};
    } 




for(let i = 0; i < 5; i++){
  let computerPlay = choiceList[Math.floor(Math.random() * 3) ];
  let playerSelection = prompt('Rock, paper, or scissors? ').toLowerCase();
  console.log('Computer played: ' + computerPlay + '\n\n\n');
  gamePlay(playerSelection, computerPlay);
}

console.log('Computer Score: ' + computerScore);
console.log('Player Score: ' + userScore);
console.log('Tied games: ' + tieScore);

if (tieScore <= 2) {
  if (computerScore > userScore){
    console.log('Computer won!');
  } else {'You won!'};
} else {console.log('it is a tie');}
