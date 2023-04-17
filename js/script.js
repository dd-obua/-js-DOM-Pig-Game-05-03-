const select = selector => document.querySelector(selector);
const dice = select('.dice');
const dice1 = select('.dice-1');
const dice2 = select('.dice-2');
const dice3 = select('.dice-3');
const dice4 = select('.dice-4');
const dice5 = select('.dice-5');
const dice6 = select('.dice-6');

const btnRollDice = select('.roll-dice');

const rollDice = () => Math.trunc(Math.random() * 6) + 1;

btnRollDice.addEventListener('click', function () {
  const randomDiceRoll = rollDice();

  // Display rolled dice
  dice.classList.remove('hidden');
});
