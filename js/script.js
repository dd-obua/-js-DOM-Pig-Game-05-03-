'use-strict';

const select = selector => document.querySelector(selector);

const score0Element = select('#score--0');
const score1Element = select('#score--1');

const dice = select('.dice');
const dice1 = select('.dice-1');
const dice2 = select('.dice-2');
const dice3 = select('.dice-3');
const dice4 = select('.dice-4');
const dice5 = select('.dice-5');
const dice6 = select('.dice-6');

score0Element.textContent = 0;
score1Element.textContent = 0;

const btnRollDice = select('.roll-dice');

const rollDice = () => Math.trunc(Math.random() * 6) + 1;

btnRollDice.addEventListener('click', function () {
  const randomDiceRoll = rollDice();
  console.log(randomDiceRoll, typeof randomDiceRoll);
  // Display rolled dice
  dice.classList.remove('hidden');

  // Display successfull dice number
  switch (randomDiceRoll) {
    case 1:
      dice1.classList.remove('hidden');
      break;
    case 2:
      dice2.classList.remove('hidden');
      break;
    case 3:
      dice3.classList.remove('hidden');
      break;
    case 4:
      dice4.classList.remove('hidden');
      break;
    case 5:
      dice5.classList.remove('hidden');
      break;
    case 6:
      dice6.classList.remove('hidden');
      break;
  }
});
