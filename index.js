let player1Score = 0
let player2Score = 0
let player1Turn = true

const message = document.getElementById("message")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showDisplayButton()
{
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

function resetAll(){
    rollBtn.style.display = "block";
    resetBtn.style.display = "none"
    player1Score = 0
    player2Score = 0
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    player1Turn = true
    message.textContent = "Player 1 Turn"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}

rollBtn.addEventListener(
    "click",
    function()
    {
        const temp = Math.floor(Math.random() * 6 + 1)
        if (player1Turn) {    
            player1Score += temp
            player1Scoreboard.textContent = player1Score
            message.textContent = "Player 2 Turn"
            player1Dice.textContent = temp
            player1Dice.classList.remove("active")
            player2Dice.classList.add("active")
        } else {
            player2Score += temp
            player2Scoreboard.textContent = player2Score
            message.textContent = "Player 1 Turn"
            player2Dice.textContent = temp
            player2Dice.classList.remove("active")
            player1Dice.classList.add("active")
        }
        
        if (player2Score >= 20)
        {
            message.textContent = "Player 2 has won! 🎉"
            showDisplayButton()
        } else if (player1Score >= 20) 
        {
            message.textContent = "Player 1 has won! 🥳"
            showDisplayButton()
        }
        player1Turn = !player1Turn
    }
)
resetBtn.addEventListener(
    "click",
    function(){
        resetAll()
    }
)