'use strict';

// Functions to select elements
const select = selector => document.querySelector(selector);
const selectAll = selector => document.querySelectorAll(selector);

// Selecting elements from the HTML
const player0Elem = select('.player--0');
const player1Elem = select('.player--1');
const score0Elem = select('#score--0');
const score1Elem = select('#score--1');
const diceElem = select('.dice');
const currentScore0Elem = select('#current--0');
const currentScore1Elem = select('#current--1');
const rollBtn = select('.btn--roll');
const newBtn = select('.btn--new');
const holdBtn = select('.btn--hold');

// Initializing the game state
let scores, currentScore, activePlayer, playing;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // Reset score and current score displays
  score0Elem.textContent = 0;
  score1Elem.textContent = 0;
  currentScore0Elem.textContent = 0;
  currentScore1Elem.textContent = 0;

  diceElem.classList.add('hidden'); // Hide the dice

  // Reset player styles
  player0Elem.classList.remove('player--winner');
  player1Elem.classList.remove('player--winner');
  player0Elem.classList.add('player--active'); // Set player 1 as the active player
  player1Elem.classList.remove('player--active');
};

// Initialize the game state when the page loads
init();

// Function to switch to the next player's turn
const switchPlayer = () => {
  select(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // Toggle active player
  player0Elem.classList.toggle('player--active');
  player1Elem.classList.toggle('player--active');
};

// Event listener for the roll button
rollBtn.addEventListener('click', () => {
  if (!playing) return; // If the game is not active, do nothing

  // Generate a random dice roll between 1 and 6
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceElem.classList.remove('hidden'); // Display the rolled dice
  diceElem.src = `./images/dice-${dice}.png`;

  if (dice !== 1) {
    // Update the current score if the dice is not 1
    currentScore += dice;
    select(`#current--${activePlayer}`).textContent = currentScore;
  } else {
    // Switch to the next player if the dice is 1
    switchPlayer();
  }
});

// Event listener for the hold button
holdBtn.addEventListener('click', () => {
  if (!playing) return; // If the game is not active, do nothing

  // Add the current score to the active player's total score
  scores[activePlayer] += currentScore;
  select(`#score--${activePlayer}`).textContent = scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    playing = false; // Game is no longer active
    diceElem.classList.add('hidden'); // Hide the dice
    select(`.player--${activePlayer}`).classList.add('player--winner'); // Highlight the winner
    select(`.player--${activePlayer}`).classList.remove('player--active');
  } else {
    // Switch to the next player's turn
    switchPlayer();
  }
});

// Event listener for the new game button
newBtn.addEventListener('click', init);
