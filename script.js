'use strict';
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;
// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

   const switchPlayer = function () {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        
    }

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1.Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);

        // 2. Display Dice
        diceEl.classList.remove('hidden');
        diceEl.src = `img/dice-${dice}.png`;

        //3. Check for rolled 1: if true, switch to next player
        if (dice != 1) {
            // Add to current score
            currentScore += dice;
            // current0El.textContent = currentScore; 
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            switchPlayer();

        
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        //1.Add current score to active player score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //2.Check if players score is >=100
        //finish the game
        if (scores[activePlayer] >= 100) {
            diceEl.classList.add('hidden');
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        

        } else

            //switch to next player
            switchPlayer();
    }
});

btnNew.addEventListener('click', function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player1El.classList.remove('player--winner');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
    diceEl.classList.add('hidden');
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
})


