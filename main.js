let message = document.getElementById('message')
const playBtn = document.getElementById('playBtn')
const resetBtn = document.getElementById('resetBtn')

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
    playBtn.style.display = 'none'
    resetBtn.style.display = 'block'

    // Tie Game
    if (
        (randomHand === 1 && randomHandComputer === 1) ||
        (randomHand === 2 && randomHandComputer === 2) ||
        (randomHand === 3 && randomHandComputer === 3)
    ) {
        message.textContent = "It's a tie! 🏳️"

        removeComputerWinner()
        removePlayerWinner()
    }

    // Rock Hands
    if (randomHand === 1 && randomHandComputer === 2) {
        message.textContent = 'Computer wins! 🤖'
        paper.classList.add('winner')
        removePlayerWinner()
    } else if (randomHand === 1 && randomHandComputer === 3) {
        message.textContent = `${userName.value}`
            ? `${userName.value} wins! 🎉`
            : `You win! 🎉`
        rockPlayer.classList.add('winner')
        removeComputerWinner()
    } else if (randomHandComputer === 1 && randomHand === 2) {
        message.textContent = `${userName.value}`
            ? `${userName.value} wins! 🎉`
            : `You win! 🎉`
        paperPlayer.classList.add('winner')
        removeComputerWinner()
    } else if (randomHandComputer === 1 && randomHand === 3) {
        message.textContent = 'Computer wins! 🤖'
        rock.classList.add('winner')
        removePlayerWinner()
    }

    // Paper Hands
    if (randomHand === 2 && randomHandComputer === 3) {
        message.textContent = 'Computer wins! 🤖'
        scissors.classList.add('winner')
        removePlayerWinner()
    } else if (randomHandComputer === 2 && randomHand === 3) {
        message.textContent = `${userName.value}`
            ? `${userName.value} wins! 🎉`
            : `You win! 🎉`
        scissorsPlayer.classList.add('winner')
        removeComputerWinner()
    }
}

function removePlayerWinner() {
    playerHands = document.getElementsByClassName('hand')

    for (let playerHand of playerHands) {
        playerHand.classList.remove('winner')
    }
}

function removeComputerWinner() {
    computerHands = document.getElementsByClassName('computerHand')
    for (let computerHand of computerHands) {
        computerHand.classList.remove('winner')
    }
}

resetBtn.addEventListener('click', resetGame)

function resetGame() {
    playerQuestionMark.style.display = 'block'
    questionMark.style.display = 'block'
    playBtn.style.display = 'block'
    resetBtn.style.display = 'none'

    message.textContent = 'Press Play Button to Start'

    let computerHands = document.getElementsByClassName('computerHand')
    for (let computerHand of computerHands) {
        computerHand.style.display = 'none'
    }
    let playerHands = document.getElementsByClassName('hand')
    for (let playerHand of playerHands) {
        playerHand.style.display = 'none'
    }
    randomHand = Math.floor(Math.random() * playerHands.length) + 1
    randomHandComputer = Math.floor(Math.random() * playerHands.length) + 1
}

const userName = document.getElementById('userName')
const submitBtn = document.getElementById('submitBtn')
const playerUserName = document.getElementById('playerUserName')

submitBtn.addEventListener('click', function () {
    playerUserName.textContent = `${userName.value}'s Hand`
})
