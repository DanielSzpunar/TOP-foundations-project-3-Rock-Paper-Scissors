var gamesPlayed = 0

//update computer choice:
const computerDiv = document.getElementById('computer')
//update computer score:
const computerScore = document.getElementById('computerScore')
var computerScoreNum = 0

//update player choice:
const playerDiv = document.getElementById('player')
//update player choice:
const playerScore = document.getElementById('playerScore')
var playerScoreNum = 0
//display game outcome:
const gameOutcome = document.getElementById('gameOutcome')
//draw
const drawGames = document.getElementById('drawScore')
var drawNum = 0
//to return the players choice of R,P or S
const rollBtn = document.getElementById('roll-btn')
rollBtn.addEventListener('click', () => {
  let radioBtns = document.getElementsByName('p1Choice')
  for (let i = 0; i < radioBtns.length; i++) {
    if(radioBtns[i].type === 'radio' && radioBtns[i].checked) {
      
      player1 = radioBtns[i].value
      playerDiv.textContent = `You: ${player1}`
      computer = computerPlay()
      computerDiv.textContent = `Computer: ${computer}`
      singleRound(player1, computer)
    }
  }
})
// reset game and score.
const resetBtn = document.getElementById('reset-btn')
resetBtn.addEventListener('click', () => {
  gamesPlayed = 0
  computerScoreNum = 0
  playerScoreNum = 0
  drawNum = 0

  document.getElementById('gamesPlayed').textContent = ''
  document.getElementById('winRatio').textContent = ''
  gameOutcome.textContent = ''
  playerScore.textContent = ''
  computerScore.textContent = ''
  drawGames.textContent = ''

})

//random computer choice
function computerPlay() {
  let roll = ((Math.random() * 100) + 1).toFixed(2)
  if (roll >= 66.66) {
    return 'rock'
  } else if (roll >= 33.33) {
    return 'paper'
  } else {
    return 'scissors'
  }
}
//a single round of P vs. C
function singleRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    drawNum += 1
    gameOutcome.textContent = 'Draw'
    drawGames.textContent = `Draws: ${drawNum}`
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScoreNum += 1
    playerScore.textContent = `Wins: ${playerScoreNum}`
    gameOutcome.textContent = 'You win! Rock beats scissors.'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScoreNum += 1
    playerScore.textContent = `Wins: ${playerScoreNum}`
    gameOutcome.textContent = 'You win! Paper beats rock.'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScoreNum += 1
    playerScore.textContent = `Wins: ${playerScoreNum}`
    gameOutcome.textContent = 'You win! Scissors beats paper.'
  } else {
    computerScoreNum += 1
    computerScore.textContent = `Losses: ${computerScoreNum}`
    gameOutcome.textContent = `You lost. ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`
  }
  gamesPlayed++
  document.getElementById('gamesPlayed').textContent = `Total Games Played: ${gamesPlayed}`
  
  document.getElementById('winRatio').textContent = `You Win: ${((playerScoreNum / gamesPlayed).toFixed(2) * 100)}% of the time.`
}