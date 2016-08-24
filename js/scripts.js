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
    alert("Bad luck, hoss, you rolled a 1");
  } else {
    pigGame.turnScore += roll;
  }
  console.log(pigGame.turnScore);
  return roll;
}

function endTurnVoluntarily() {
  pigGame.playerAScore += pigGame.turnScore;
  pigGame.turnScore = 0;
}


// Frontend Logic
$(document).ready(function() {
  $("#rollPig").click(function() {
    playerRoll();
    $("#turnScore").text(pigGame.turnScore);
  });
  $("#holdPig").click(function() {
    endTurnVoluntarily();
    $("#playerAScore").text(pigGame.playerAScore);
  });
});
