'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let message = document.querySelector(".message");
let score = 20;
let scoreText = document.querySelector(".score");
let highScoreText = document.querySelector(".highscore");
let resultNumber = document.querySelector(".number");


function restartGame() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    resultNumber.textContent = "?"
    scoreText.textContent = score;
    message.textContent = "Start guessing...";
    document.querySelector("body").style.backgroundColor = "#222"
    resultNumber.style.width = "15rem"




}

function checkFunc() {
    //Game Start
    const guessedNumber = Number(document.querySelector(".guess").value);

    //Empty Input
    if (!guessedNumber) {
        message.textContent = "⛔ Please Make a Guess";
    }

    //Win
    else if (guessedNumber === secretNumber) {
        message.textContent = "🟢 You Win";

        if (Number(highScoreText.textContent) < score) {
            highScoreText.textContent = score;
        }

        resultNumber.textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347"
        resultNumber.style.width = "30rem"


    }
    //Wrong Number
    else if (guessedNumber !== secretNumber) {
        if (score > 1) {
            message.textContent = guessedNumber > secretNumber ? "📈 It's High" : "📉 It's Low";
            score--
            scoreText.textContent = score;
        } else {
            message.textContent = "🔥 You Lose"
            score--;
            scoreText.textContent = score;


        }
    }

}

document.querySelector(".check").addEventListener("click", checkFunc);
document.querySelector(".again").addEventListener("click", restartGame)