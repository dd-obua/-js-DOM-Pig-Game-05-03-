'use-strict';

const select = selector => document.querySelector(selector);

const score0Element = select('#score--0');
const score1Element = select('#score--1');
const diceElement = select('.dice');
const btnRollDice = select('.roll-dice');
const currentScore1Text = select('.current-score-1');
const currentScore2Text = select('.current-score-2');

score0Element.textContent = 0;
score1Element.textContent = 0;

const rollDice = () => Math.trunc(Math.random() * 6) + 1;

let currentScore1 = 0;
let currentScore2 = 0;

btnRollDice.addEventListener('click', function () {
  const randomDiceRoll = rollDice();

  // Display rolled dice
  diceElement.classList.remove('hidden');
  diceElement.src = `./img/dice-${randomDiceRoll}.png`;

  if (randomDiceRoll !== 1) {
    // Update current score 1
    currentScore1 += randomDiceRoll;

    // Display current score 1
    currentScore1Text.textContent = currentScore1;
  } else {
    currentScore1 = 0;
    currentScore1Text.textContent = currentScore1;
  }
});
