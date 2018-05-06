var Word = require("./word");
var inquirer = require("inquirer");

    function question() {
        inquirer
          .prompt({
            name: "question",
            type:"confirm",
            message: "Do you want to play a game?"
          })
          .then(function(answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.question.toUpperCase() === "Y") {
              start();
            }
            else {
              console.log("You're a terrible person.No one loves you.")
            }
        });
    }

    function start() {
       


    };

    var game= new Word("p");
    // game.prototype.random();
    game.checkLoop();
    console.log(game)