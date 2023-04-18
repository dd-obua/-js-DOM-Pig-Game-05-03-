'use-strict';

// Select elements
const select = selector => document.querySelector(selector);

const btnRollDice = select('.roll-dice');
const btnHold = select('.hold');
const btnNewGame = select('.new-game');
const diceElement = select('.dice');
const current0Element = select('#current--0');
const current1Element = select('#current--1');
const score0Element = select('#score--0');
const score1Element = select('#score--1');
const player0Element = select('.player--0');
const player1Element = select('.player--1');
const player0Title = select('#name--0');
const player1Title = select('#name--1');

const rollDice = () => Math.trunc(Math.random() * 6) + 1;

const switchPlayer = function () {
  // Reset currentScore
  select(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  // Switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

const init = function () {
  // Set starting conditions
  const finalScores = [0, 0];
  let currentScore = 0;
  let activePlayer = 0;
  let isPlaying = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};

// On dice roll
btnRollDice.addEventListener('click', function () {
  if (isPlaying) {
    const rolledDice = rollDice();

    diceElement.classList.remove('hidden');
    diceElement.src = `./img/dice-${rolledDice}.png`;

    if (rolledDice !== 1) {
      currentScore += rolledDice;
      select(`#current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

// On hold
btnHold.addEventListener('click', function () {
  if (isPlaying) {
    // Add current score to the score of the active player
    finalScores[activePlayer] += currentScore;
    select(`#score--${activePlayer}`).textContent = finalScores[activePlayer];

    // Check if current score >= 100,
    if (finalScores[activePlayer] >= 100) {
      isPlaying = false;
      diceElement.classList.add('hidden');
      select(`.player--${activePlayer}`).classList.add('player--winner');
      select(`.player--${activePlayer}`).classList.remove('player--active');
      select(`#name--${activePlayer}`).style.color = '#c7365f';
    } else {
      switchPlayer();
    }
  }
});

// Reset the game
btnNewGame.addEventListener('click', function () {
  init();
});
