let message = document.getElementById('message')
const playBtn = document.getElementById('playBtn')
const playerOneHand = document.getElementById('playerOneHand')

// Computer Hands
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let questionMark = document.getElementById('questionMark')

// Player Hands
let rockPlayer = document.getElementById('rockPlayer')
let paperPlayer = document.getElementById('paperPlayer')
let scissorsPlayer = document.getElementById('scissorsPlayer')
let playerQuestionMark = document.getElementById('playerQuestionMark')

playBtn.addEventListener('click', function () {
    computerTurn()
    playerTurn()
})

function computerTurn() {
    questionMark.style.display = 'none'

    let computerHands = document.getElementsByClassName('computerHand')
    let randomHand = Math.floor(Math.random() * computerHands.length) + 1

    if (randomHand === 1) {
        rock.style.display = 'block'
        paper.style.display = 'none'
        scissors.style.display = 'none'
    } else if (randomHand === 2) {
        rock.style.display = 'none'
        paper.style.display = 'block'
        scissors.style.display = 'none'
    } else if (randomHand === 3) {
        rock.style.display = 'none'
        paper.style.display = 'none'
        scissors.style.display = 'block'
    }
}

function playerTurn() {
    playerQuestionMark.style.display = 'none'

    let playerHands = document.getElementsByClassName('hand')
    let randomHand = Math.floor(Math.random() * playerHands.length) + 1

    if (randomHand === 1) {
        rockPlayer.style.display = 'block'
        paperPlayer.style.display = 'none'
        scissorsPlayer.style.display = 'none'
    } else if (randomHand === 2) {
        rockPlayer.style.display = 'none'
        paperPlayer.style.display = 'block'
        scissorsPlayer.style.display = 'none'
    } else if (randomHand === 3) {
        rockPlayer.style.display = 'none'
        paperPlayer.style.display = 'none'
        scissorsPlayer.style.display = 'block'
    }
}
