// Backend Logic
var pigGame = {
  playerAScore: 0,
  playerBScore: 0,
  playerTurn: "A"
};

function dieRoll() {
  die6 = Math.floor(Math.random()*6) + 1;
  return die6;
}

function playerRoll() {
  var turnScore = 0;
  var roll = dieRoll();
  if (roll === 1) {
    console.log("Turn over");
  } else {
    turnScore += roll;
    console.log(turnScore);
  }
  return turnScore;
}

// function turnRoll(
// function playerTurn() {
//   var turnTotal = 0;
//   roll = dieRoll();
//   if (roll === 1) {
//     *playerScore* = 0;
//     *turnOver* = true;
//   } else {
//     turnTotal += roll;
//   }
// }

// Frontend Logic
