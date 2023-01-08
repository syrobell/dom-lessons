'use strict';

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playStatus;


const init = () => {

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playStatus = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");

    diceEl.classList.add("hidden");



}
init();

const switchPlayer = () => {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}

btnNew.addEventListener("click", init);

btnRoll.addEventListener("click", function() {
    if (playStatus) {
        //Random zar üretme
        const dice = Math.trunc(Math.random() * 6) + 1;

        //Gelen sayı Display
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;

        //1 Gelmesi Durumunu Kontrol Etme
        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener("click", function() {
    if (playStatus) {
        // CurrentScore değişkenini aktif oyuncuya ekle.
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        // Eğer oyuncu 100 puana ulaştıysa
        if (scores[activePlayer] >= 20) {

            // Oyunu Kazanır
            playStatus = false;
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            diceEl.classList.add("hidden");


        } else {

            // Oyuncu Değiştir
            switchPlayer();
        }

    } else {

    }
});