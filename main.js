let message = document.getElementById('message')
const playBtn = document.getElementById('playBtn')

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
    showWinner()
})

let computerHands = document.getElementsByClassName('computerHand')
let randomHandComputer = Math.floor(Math.random() * computerHands.length) + 1
function computerTurn() {
    questionMark.style.display = 'none'

    if (randomHandComputer === 1) {
        rock.style.display = 'block'
        paper.style.display = 'none'
        scissors.style.display = 'none'
    } else if (randomHandComputer === 2) {
        rock.style.display = 'none'
        paper.style.display = 'block'
        scissors.style.display = 'none'
    } else if (randomHandComputer === 3) {
        rock.style.display = 'none'
        paper.style.display = 'none'
        scissors.style.display = 'block'
    }
}

let playerHands = document.getElementsByClassName('hand')
let randomHand = Math.floor(Math.random() * playerHands.length) + 1
function playerTurn() {
    playerQuestionMark.style.display = 'none'

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

function showWinner() {
    // tie game
    if (
        (randomHand === 1 && randomHandComputer === 1) ||
        (randomHand === 2 && randomHandComputer === 2) ||
        (randomHand === 3 && randomHandComputer === 3)
    ) {
        console.log('its a tie!')
    }

    // rock hands
    if (randomHand === 1 && randomHandComputer === 2) {
        console.log('computer paper beats player rock')
    } else if (randomHand === 1 && randomHandComputer === 3) {
        console.log('player rock beats computer scissors')
    } else if (randomHandComputer === 1 && randomHand === 2) {
        console.log('computer rock beats player paper')
    } else if (randomHandComputer === 1 && randomHand === 3) {
        console.log('Computer rock beats player scissors!')
    }

    // paper hands
    if (randomHand === 2 && randomHandComputer === 3) {
        console.log('computer scissors beats player paper')
    } else if (randomHandComputer === 2 && randomHand === 3) {
        console.log('player scissors beats computer paper')
    }
}
