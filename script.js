const CHOICES = ['rock', 'paper', 'scissors']

let computerChoice 
let userChoice
let isUserWinner 

const submit = function () {
    computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)]
    userChoice = document.querySelector('.radio:checked').value
    checkWinner() // call a function, which is checkWinner.
    console.log(userChoice, computerChoice, isUserWinner)
}

const checkWinner = () => {
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        isUserWinner = true
    } else if (userChoice === 'paper' && computerChoice === 'rock' ) {
        isUserWinner = true
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        isUserWinner = true
    } else if (userChoice === computerChoice) {
        isUserWinner = false
    } else {
        isUserWinner = false
    }
    return isUserWinner
}
