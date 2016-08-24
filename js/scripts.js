// Backend Logic
var pigGame = {
  playerAScore: 0,
  playerBScore: 0,
  playerTurn: "A",
  turnStatus: true,
  turnScore: 0
};

function dieRoll() {
  die6 = Math.floor(Math.random()*6) + 1;
  return die6;
}

function playerRoll() {
  var roll = dieRoll();
  if (roll === 1) {
    pigGame.turnStatus = false;
    pigGame.turnScore = 0;
  } else {
    pigGame.turnScore += roll;
  }
  console.log(pigGame.turnScore);
  return roll;
}



// Frontend Logic
$(document).ready(function() {
  $("#rollPig").click(function() {
    playerRoll();
  });
});
