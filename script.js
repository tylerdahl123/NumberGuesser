let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
return Math.floor(Math.random() * Math.floor(9));

}
//console.log(generateTarget());
function compareGuesses(userGuess, CompGuess, secretTarget){
const userDiff = Math.abs(secretTarget - userGuess);
const compDiff = Math.abs(secretTarget - CompGuess);
return userDiff <= compDiff;
}

function updateScore(winner){
if(winner === 'human'){
    humanScore ++;
} else if (winner === 'computer'){
    computerScore ++;
}
}

function advanceRound(){
    currentRoundNumber ++
}

// updateScore('human');
// updateScore('human');
// console.log(humanScore);

// updateScore('computer');
// console.log(computerScore);