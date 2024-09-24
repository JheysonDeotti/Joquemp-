const result = document.querySelector(".result")
const myScore = document.querySelector("#your-score")
const scoreMachine = document.querySelector("#score-machine")

let numberScoreHuman = 0
let numberScoreMachine = 0

const humanPlay = (humanChoice) => {
    moves(humanChoice, machinePlay())
}

const machinePlay = () => {
    const choices = ["pedra", "papel", "tesoura"]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const moves = (human, machine) => {

    if (human === machine) {
        result.innerHTML = "Deu Empate!"
    } else if (
        (human === "papel" && machine === "pedra") ||
        (human === "pedra" && machine === "tesoura") ||
        (human === "tesoura" && machine === "papel")
    ) {
        numberScoreHuman++
        myScore.innerHTML = numberScoreHuman
        result.innerHTML = "Você Ganhou!"
    } else {
        numberScoreMachine++
        scoreMachine.innerHTML = numberScoreMachine
        result.innerHTML = "Você Perdeu!"
    }
}

