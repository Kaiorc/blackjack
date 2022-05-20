// let player = {
//     name: "Quincy Magoo",
//     chips: 200
// }

//Array de cartas
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// let playerEl = document.getElementById("player-el")

// playerEl.textContent = player.name + ": $" + player.chips

//Função que retorna uma carta com valor aleatório
function getRandomCard() {
    //Gera um valor pra carta de 1(Ás) até 13(sendo 11 = Valete(J), 12 = Rainha(Q) e 13 = Rei(K))
    let randomNumber = Math.floor( Math.random()*13 ) + 1

    //Se o valor for maior que 10, ou seja, J ou Q ou K,será retornado o valor 10,
    //e se o valor for 1, retorna 11, de acordo com as regras do Blackjack
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

//Função que inicia o jogo, setando os valores das duas primeiras cartas,
//as armazenando no vetor de cartas e invocando a renderização o jogo
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

//Função que renderiza o jogo
function renderGame() {
    cardsEl.textContent = "Cards: "

    //Laço que percorre todo o vetor cartas e concatena
    //o textContent com os novos valores
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    //Confere se a soma das cartas passou de 21 e se o jogador pode continuar jogando 
    //e passa a mensagem para o textContent
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

//Função que gera nova carta e a armazena no array de cartas
function newCard() {
    //Verifica se o jogador pode continuar jogando, gera e armazena a carta nova
    //no array de cartas e invoca a renderização do jogo
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
