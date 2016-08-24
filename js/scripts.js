// Backend Logic
var pigGame = {
  player1Score: 0,
  player2Score: 0,
  playerUp: 1,
  turnScore: 0
};

function dieRoll() {
  die6 = Math.floor(Math.random()*6) + 1;
  return die6;
}

function playerRoll() {
  var roll = dieRoll();
  if (roll === 1) {
    pigGame.turnScore = 0;
    alert("Pig down! And so is your turn!");
    switchPlayer();
    $("#playerStatus").text(pigGame.playerUp);
  } else {
    pigGame.turnScore += roll;
    if (pigGame.playerUp === 1) {
      if (pigGame.turnScore + pigGame.player1Score >= 100) {
        alert("PLAYER 1 WINZ!");
      }
    } else if (pigGame.turnScore + pigGame.player2Score >= 100) {
      alert("PLAYER 2 WINZ!");
    }
  }
  console.log(pigGame.turnScore);
  return roll;
}

function holdThePig() {
  var currentPlayer = pigGame.playerUp;
  if (currentPlayer === 1) {
    pigGame.player1Score += pigGame.turnScore;
  } else {
    pigGame.player2Score += pigGame.turnScore;
  }
  pigGame.turnScore = 0;
  switchPlayer();
}

function switchPlayer() {
  if (pigGame.playerUp === 1) {
    pigGame.playerUp = 2;
  } else {
    pigGame.playerUp = 1;
  }
}


// Frontend Logic
$(document).ready(function() {
  $("#rollPig").click(function() {
    playerRoll();
    $("#turnScore").text(pigGame.turnScore);
  });

  $("#holdPig").click(function() {
    holdThePig();
    $("#player1Score").text(pigGame.player1Score);
    $("#player2Score").text(pigGame.player2Score);
    $("#playerStatus").text(pigGame.playerUp);
  });
});
