'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(
  
(document.querySelector('.message').textContent = '🎉Correct Number!')
);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log((document.querySelector('.guess').value = 32));
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //here we not need to call the  function then how it gets called is ? Here we only defined the function and pass it in to the event handler,but it is javascript engine who calls the function as soon as event happens and "It is a anonymus function"

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input or input is zero
  if (!guess) {
    displayMessage('👉No Number!');
  }
  //When the input is correct and player wins
  else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.message').style.color = '#00008b';
    document.querySelector('.number').style.width = '30rem';
    score++;
  }

  //When the input is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '🥲Too high!' : '🥲Too low!';
      displayMessage(guess > secretNumber ? '🥲 Too high!' : '🥲 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').style.color = '#ff0000';
      displayMessage('-You lost the game!-');
    }
  }
  /* //When the input is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🥲Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').style.color = '#ff0000';
      document.querySelector('.message').textContent = '-You lost the game!-';
    }
  }
  //When the input is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🥲 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').style.color = '#ff0000';
      document.querySelector('.message').textContent = '-You lost the game!-';
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').style.color = '#eee';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
