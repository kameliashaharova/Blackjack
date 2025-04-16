let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
// Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")
// Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")
let startGameEl = document.getElementById("start-game")

// let player = {
//     name: "Kamelia",
//     chips: 145
// }
// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1 
    return randomNumber

    // // if 1       -> return 11
    // // if 11-13   -> return 10
    // if (randomNumber === 1) {
    //     return 11
    // } else if (randomNumber === 11 || randomNumber === 12 || randomNumber === 13) { 
    //     return 10
    // } else {       
    //     return randomNumber
    // }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    // Create a new array - cards - that contains firstCard and secondCard
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "🃏 Cards: "
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    // Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "💰 Score: " + sum

    if (sum < 21) {
        message = "Do you want to draw a new card?"
        isAlive = true
        startGameEl.textContent = "Play Game"
    } else if (sum === 21) {
        message = "You've got Blackjack"
        hasBlackJack = true
        startGameEl.textContent = "Start Over"
    } else {
        message = "Sorry, you lost"
        isAlive = false
        startGameEl.textContent = "Play Again"
    }
    messageEl.textContent = message
}

function newCard() {
    // if (isAlive === true && hasBlackJack === false) {
    if (isAlive === true && hasBlackJack === false) {

        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

