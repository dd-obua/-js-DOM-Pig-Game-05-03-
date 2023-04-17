const select = selector => document.querySelector(selector);

const btnRollDice = select('.roll-dice');

const rollDice = () => Math.trunc(Math.random() * 6) + 1;

btnRollDice.addEventListener('click', function () {
  const randomDiceRoll = rollDice();
});
