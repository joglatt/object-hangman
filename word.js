var Letter = require("./letter");

var Word = function(guess) {
  // Word.prototype.random();
  this.currentWord = "apple";
  this.guess = guess;
  this.arr = [];
  //Runs newLetter function on each letter in currentword.
  var letterInstance = new Letter();
  letterInstance.newLetter(this.arr, this.currentWord);
  // console.log(this.arr);
  // this.arr.push(letterO.newLetter());
  this.displayString = "";
  //creates string with either blanks or letters
  this.createString = function() {
    for (var i = 0; i < this.arr.length; i++) {
      if(this.arr[i].boolean === false){
      this.displayString+=(" " + this.arr[i].display);
      }else{
      this.displayString+=(" " + this.arr[i].l); 
      }
    }
  };
  this.createString();
  //loops through array of letter objects and applys check function to each
  this.checkLoop = function() {
    for (i = 0; i < this.arr.length; i++) {
      Letter.prototype.check(
        this.guess,
        this.arr[i].l,
        this.arr[i].boolean,
        this.arr[i].display
      );
      console.log(
        this.arr[i].l + "     " + this.guess + "     " + this.arr[i].display + "     "+ this.arr[i].boolean
      );
    }
  };
};
Word.prototype.random = function() {
  this.currentWord =
    Word.prototype.words[
      Math.floor(Math.random() * Word.prototype.words.length)
    ];
};
Word.prototype.words = [
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
// var one = new Word("p");
// console.log(one);
// console.log(one.displayString);
// one.checkLoop();
// console.log(one);

// console.log(one);
module.exports = Word;

// }
// Word.prototype.check = function() {
//   if (this.gue ss === this.letter) {
//     console.log("correct");
//     Letter.boolean = true;
//     this.display = this.guess;
//     console.log("new display " + this.display);
//   } else {
//     console.log("incorrect");
//   }
// };
