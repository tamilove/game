var Game = function(answer, guess) {
  this.answer = answer,
  this.guess = guess,
  this.gameOn = function() {
    confirm("Let's play a game, nothing fancy and all you have to do is guess a number. Are you ready? Click OK to proceed and expand your mind. Otherwise click cancel and you will never know.");

    guess = prompt("I would like you to guess the minimum number of people needed in a room to have a probabilty of 90% that two people have the same birthdate. Remember, you don't really need to know the answer; just guess.");

    while (guess !== answer){
      if ((guess >= (answer - 3)) && (guess <= (answer + 3))) {
        guess = prompt("You are getting hotter. You are so close, don't give up now.");
      }
      else if ((guess >= (answer - 6)) && (guess <= (answer +6))) {
        guess = prompt("You are getting hot. Keep guessing.");
      }
      else if ((guess >= (answer - 12)) && (guess <= (answer + 12))) {
        guess = prompt("You are getting warmer. You can do it.");
      }
      else if ((guess >= (answer - 15)) && (guess <= (answer + 15))) {
        guess = prompt("You are getting warm. Keep going.");
      }
      //Below statement needs reworking.
      else if (typeof guess !== typeof answer ) {
        guess = prompt("That's not a number silly. Try again. A NUMBER this time.");
      }
      else {
        guess = prompt("Ok, I will give you a hint, it's a number between 10 and 75. Keep going, cause once you know you can impress your friends at parties.");
      }
    }

    alert("Wowzers! You win at life. Now go impress your friends.");
      }
    }

var game = new Game(42)

game.gameOn();
