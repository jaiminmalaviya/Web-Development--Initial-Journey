'use strict';

const player = document.querySelectorAll('.player');
const playerScore = document.querySelectorAll('.score');
const currentScore = document.querySelectorAll('.current-score');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

let a, b, exit;

const switchPlayer = function (a, b) {
  currentScore[a].textContent = '0';
  player[b].classList.add('player--active');
  player[a].classList.remove('player--active');
  [a, b] = [b, a];
  return [a, b];
};

const newGame = function () {
  a = 0;
  b = 1;
  for (let i = 0; i < 2; i++) {
    player[i].classList.remove('player--winner');
    playerScore[i].textContent = '0';
    currentScore[i].textContent = '0';
  }
  player[a].classList.add('player--active');
  player[b].classList.remove('player--active');
  dice.classList.add('hidden');
  exit = 0;
};
newGame();

btnNew.addEventListener('click', newGame);

btnRoll.addEventListener('click', function () {
  if (!exit) {
    const randomNumber = Math.trunc(Math.random() * 6 + 1);
    dice.classList.remove('hidden');
    dice.src = `dice-${randomNumber}.png`;

    if (randomNumber == 1) {
      [a, b] = switchPlayer(a, b);
    } else {
      currentScore[a].textContent =
        Number(currentScore[a].textContent) + randomNumber;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (!exit) {
    playerScore[a].textContent =
      Number(playerScore[a].textContent) + Number(currentScore[a].textContent);

    if (playerScore[a].textContent >= 100) {
      player[a].classList.add('player--winner');
      dice.classList.add('hidden');
      exit = 1;
    } else {
      [a, b] = switchPlayer(a, b);
    }
  }
});
