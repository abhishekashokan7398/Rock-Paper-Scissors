// // Initializing variables for player and computer scores
 let playerScore = parseInt(localStorage.getItem("playerScore")) || 0;
 let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;

const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const audio = document.getElementById("myAudio");


// Displaying initial scores
if (playerScoreEl) playerScoreEl.textContent = playerScore;
if (computerScoreEl) computerScoreEl.textContent = computerScore;
//reset score
function resetScores() {
  // Reset scores in memory
  playerScore = 0;
  computerScore = 0;
  
  // Update localStorage
  localStorage.setItem("playerScore", playerScore.toString());
  localStorage.setItem("computerScore", computerScore.toString());
  
  // Immediately update the UI
  updateScores(); 
}
function updateScores() {
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}



// Function to handle the gameplay logic
function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = getResult(playerChoice, computerChoice);

  // Saving the choices in localStorage for next pages
  localStorage.setItem("playerChoice", playerChoice);
  localStorage.setItem("computerChoice", computerChoice);

  if (result === "win") {
    playerScore++;
    localStorage.setItem("playerScore", playerScore);
    localStorage.setItem("computerScore", computerScore);
    if (playerScoreEl) playerScoreEl.textContent = playerScore;
    if (audio) audio.play();
    setTimeout(() => {
      window.location.href = "youwin.html";
    }, 1000);
  } else if (result === "lose") {
    
    computerScore++;
    localStorage.setItem("playerScore", playerScore);
    localStorage.setItem("computerScore", computerScore);
    if (computerScoreEl) computerScoreEl.textContent = computerScore;
    setTimeout(() => {
      window.location.href = "youloss.html";
    }, 1000);
  } else {
    // Draw
    localStorage.setItem("playerScore", playerScore);
    localStorage.setItem("computerScore", computerScore);
    setTimeout(() => {
      window.location.href = "tie.html";
    }, 1000);
  }

  console.log(`You chose ${playerChoice}, computer chose ${computerChoice} — ${result.toUpperCase()}!`);
}


// Function to determine the result of the game
function getResult(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
 }
// //image
 const playerChoice = localStorage.getItem('playerChoice');
   const computerChoice = localStorage.getItem('computerChoice');
  
   // Set the images based on choices
   document.getElementById('player-choice-img').src = `assets/hand${getImageNumber(playerChoice)}.png`;
   document.getElementById('computer-choice-img').src = `assets/hand${getImageNumber(computerChoice)}.png`;
  
  
   function getImageNumber(choice) {
     switch(choice) {
       case 'rock': return '1';
       case 'paper': return '2';
       case 'scissors': return '3';
       default: return '1';
     }
   }


// // Function to toggle the rules popup
 function toggleRules() {
   const popup = document.getElementById("rulesPopup");
   if (popup) {
     popup.style.display = popup.style.display === "block" ? "none" : "block";
   }
 }
