var Letter = require("./letter");

var Word = function(current) {
  
  this.current = current;
  this.displayString = "";
  this.flag = false;
 
  this.arr = [];
  //Runs newLetter function on each letter in currentword.
  var letterInstance = new Letter();
  letterInstance.newLetter(this.arr, this.current);

  // this.arr.push(letterO.newLetter());
  //creates string with either blanks or letters
  this.createString = function() {
    this.displayString = "";
    for (var i = 0; i < this.arr.length; i++) {
      this.arr[i].print(); //calls the function that prints the appropriate characters, found within the letter constructor in letter.js
      this.displayString += " " + this.arr[i].print();
    }
    console.log(this.displayString);
  };
};

// loops through array of letter objects and applys check function to each
Word.prototype.checkLoop = function(guess) {
  for (j = 0; j < this.arr.length; j++) {
    if (!this.arr[j].boolean) {
      this.arr[j].check(guess);
      if (this.arr[j].boolean == true) {
        this.flag = true;
      }
    }

  }
};
Word.prototype.random = function() {
  this.currentWord =
    Word.prototype.words[
      Math.floor(Math.random() * Word.prototype.words.length)
    ];
};

module.exports = Word;


