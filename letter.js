// var Library = require("./library");

var Letter = function(l) {
  //stores the value of the letter in the current word

  this.l = l;
  // this.currentWord = "";
  this.display = "_";
  this.boolean;
}
//sets a flag to false and if flag turns to true, the letter is revealed
Letter.prototype.check = function(guess, innerLetter, boolean, display) {
  if  (guess == innerLetter){
    console.log("true");
    boolean = true;
    display = guess;
  };
};
//loops through current word and creates a new letter object for each letter
Letter.prototype.newLetter = function(arr,currentWord) {
    for (var i = 0; i < currentWord.length; i++) {
    arr.push(new Letter(currentWord[i]));
    }
  };
 



// var one=new Letter(); 
// console.log(one.arr);
module.exports = Letter;


// Might need later
// if (this.boolean === false) {
//   this.display = "_";
// } else {
//   this.display = this.letter;
// }

//will be used to test if the guess is equal to one of the letters and will then reveal letter
// this.check = function() {
//     if (typeof this.guess != "string") {
//       this.guess = JSON.stringify(this.guess);
//     }
//     if (this.guess.match(/[a-zA-Z]/) && !Letter.usedLetters.includes(guess)) {
//       Letter.usedLetters.push(this.guess);
//     } else {
//       console.log("Invalid choice you moron");
//     }
//     if (Letter.currentWord.includes(guess)) {
//       console.log("Thats a spicy letter");
//     } else {
//       console.log("Wrong");
//   }
// };

 