'use-strict';

// Select elements
const select = selector => document.querySelector(selector);

const btnRollDice = select('.roll-dice');
const diceElement = select('.dice');
const current0Element = select('#current--0');
const current1Element = select('#current--1');
const score0Element = select('#score--0');
const score1Element = select('#score--1');

// Set starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
let activePlayer = 0;
const finalScores = [0, 0];
let currentScore = 0;

const rollDice = () => Math.trunc(Math.random() * 6) + 1;

btnRollDice.addEventListener('click', function () {
  const rolledDice = rollDice();

  diceElement.classList.remove('hidden');
  diceElement.src = `./img/dice-${rolledDice}.png`;

  if (rolledDice !== 1) {
    currentScore += rolledDice;
    select(`#current--${activePlayer}`).textContent = currentScore;
  } else {
    // Reset currentScore
    currentScore = 0;
    select(`#current--${activePlayer}`).textContent = currentScore;

    // Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
