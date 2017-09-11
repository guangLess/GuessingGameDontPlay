
var generateWinningNumber = function(){
    var randomVal = Math.random()*100;
    var ceilNum = Math.ceil(randomVal);    
    if (randomVal === ceilNum){
        randomVal += 1;
        return randomVal;
    } else {
        return ceilNum;
    }
}

var shuffle = function(arr){
    var m = arr.length;
    var temp;
    var index = 0;
    while(m){
        var randomN = Math.random() * m;
        m -= 1;        
        console.log(randomN);
        index = Math.floor(randomN);
        temp = arr[m];
        arr[m] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

function Game(){   
    this.playersGuess = null;
    this.pastGuesses = [];
    this.winningNumber = generateWinningNumber();
}

Game.prototype.difference = function(){
    var diffN = this.playersGuess - this.winningNumber;
    return Math.abs(diffN);
}
Game.prototype.isLower = function(){
    return this.playersGuess < this.winningNumber;
}

Game.prototype.playersGuessSubmission = function(number){
    this.playersGuess = number;
    if(number <= 0 ||number >= 101 || typeof number !== "number" || number === ""){
        throw ("That is an invalid guess.");
    }
    return this.checkGuess();
}
Game.prototype.checkGuess = function(){
    if (this.playersGuess === this.winningNumber){
        return "You Win!";
    }
    if (this.pastGuesses.indexOf(this.playersGuess) > -1){
        return "You have already guessed that number.";
    }   
    this.pastGuesses.push(this.playersGuess);   

    if (this.pastGuesses.length >= 4){
        return "You Lose.";
    }
    if (this.difference() < 10){
        return "You\'re burning up!";
    }
    if (this.difference() < 25){
        return "You're lukewarm.";
    }
    if (this.difference() < 50){
        return "You\'re a bit chilly.";
    }
    if (this.difference() < 100){
        return "You\'re ice cold!";
    }
}
var newGame = function(){
    return new Game;
}
Game.prototype.provideHint = function(){
  var hintArr = [this.winningNumber, generateWinningNumber(),generateWinningNumber()];
  return shuffle(hintArr);
}