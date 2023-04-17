'use-strict';

const select = selector => document.querySelector(selector);

const score0Element = select('#score--0');
const score1Element = select('#score--1');
const diceElement = select('.dice');
const btnRollDice = select('.roll-dice');

score0Element.textContent = 0;
score1Element.textContent = 0;

const rollDice = () => Math.trunc(Math.random() * 6) + 1;

btnRollDice.addEventListener('click', function () {
  const randomDiceRoll = rollDice();
  console.log(randomDiceRoll, typeof randomDiceRoll);

  // Display rolled dice
  diceElement.classList.remove('hidden');
  diceElement.src = `./img/dice-${randomDiceRoll}.png`;
});
