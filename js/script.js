'use-strict';

const select = selector => document.querySelector(selector);

const score0Element = select('#score--0');
const score1Element = select('#score--1');
const diceElement = select('.dice');
const btnRollDice = select('.roll-dice');
const current0Element = select('#current--0');
const current1Element = select('#current--1');

const rollDice = () => Math.trunc(Math.random() * 6) + 1;

score0Element.textContent = 0;
score1Element.textContent = 0;
let currentScore = 0;

btnRollDice.addEventListener('click', function () {
  const randomDiceRoll = rollDice();

  // Display rolled dice
  diceElement.classList.remove('hidden');
  diceElement.src = `./img/dice-${randomDiceRoll}.png`;

  if (randomDiceRoll !== 1) {
    // Update current score 1
    currentScore += randomDiceRoll;
    // Display current score 1
    current0Element.textContent = currentScore;
  } else {
    currentScore += randomDiceRoll;

    currentScore = 0;
    current0Element.textContent = currentScore;
  }
});
