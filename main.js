var Word = require("./word");
var inquirer = require("inquirer");
var currentWord;
var randomWord = "apple";
var remaining = 7;
var correctGuesses = [];
var alreadyGuessed = [];
var score = 0;
var libray = [
  "outlaw",
  "revolver",
  "spurs",
  "desperado",
  "sheriff",
  "lasso",
  "longhorn",
  "cattle",
  "frontier",
  "gallop",
  "gunslinger",
  "buckaroo",
  "wrangler",
  "cowboy",
  "cowboy",
  "stallion",
  "rodeo",
  "fisticuffs"
];
function question() {
  inquirer
    .prompt([
      {
        name: "confirm",
        type: "confirm",
        message: "Do you want to play a game?",
        default: true
      }
    ])
    .then(function(inquirerResponse) {
      if (inquirerResponse.confirm) {
        currentWord = new Word(randomWord);
        // console.log(currentWord)
        console.log("Guessing Time");
        currentWord.createString();
        start();
      } else {
        console.log(" You are an awful person and no one loves you.");
      }
    });
}

function start() {
  if (remaining > 0) {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Guess a Letter",
          name: "userGuess"
        }
      ])
      .then(function(inquirerResponse) {
        console.log(inquirerResponse);
        if (
          inquirerResponse.userGuess.match(/[a-zA-Z]/) &&
          !alreadyGuessed.includes(inquirerResponse.UserGuess)
        ) {
          var userinput = inquirerResponse.userGuess.toString().trim();
          alreadyGuessed.push(inquirerResponse.userGuess);
          console.log("guessed " + alreadyGuessed);
          currentWord.checkLoop(inquirerResponse.userGuess);
          currentWord.createString();
          currentWord.arr.forEach(function(x) {
            if (x.boolean) {
              correctGuesses.push(x.l);
              console.log("correct guess: " + correctGuesses);
            }
          });
          checkWin();
        } else {
          console.log("This is an easy game, try to guess again genius.");
        }
      });
  }
}

function update() {
  if (currentWord.flag) {
    console.log("remaining guess: " + remaining);
    start();
  } else {
    remaining--;
    start();
  }
}
function checkWin() {
  if (currentWord.displayString.replace(/ /g, "") == randomWord) {
    score++;
    remaining = 7;
    correctGuesses = [];
    alreadyGuessed = [];
    question();
  } else {
    console.log("guesses remaining: " + remaining);
  }
}

question();
