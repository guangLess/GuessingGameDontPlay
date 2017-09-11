var game = new Game();    

$(document).ready(function(){
    console.log('Everything is loaded!');
    submitGuess();
    hint();
    resetGame();
});

var submitGuess = function () {
    var input = $('#guessInput');    
    $('#submitguess').on('click', function(){
        logGuess(input);
    });
    $('#guessInput').keypress(function(key){
        if (event.which == 13) { 
            logGuess(input);
        };
    });
}

var addToLists = function(val){
    if (val !== 0){
        $('#guess-' + game.pastGuesses.length).text( val );
        console.log('guess cell', '#guess-' + game.pastGuesses.length);
        console.log('guess cell value', val);
    }
};

var logGuess = function(input) {
    game.winningNumber = 10;   
    //console.log(input.val()); 
    $('#submitguess').attr("disabled", false);
    $('#hint').attr("disabled", false);  

    //configure input
    var numInput = Number(input.val());
    //add to list
    addToLists(numInput);   
    //check input 
    var checkInput = game.playersGuessSubmission(numInput);

    if (checkInput.indexOf('Win') > -1 || checkInput.indexOf('Lose')> -1 ){
        $('#headers h2').text("click the reset button to reset");
        $('#submitguess').attr("disabled", 'true');
        $('#hint').attr("disabled", 'true');
        $('#guessInput').attr("disabled", 'true');
    }
    $('#headers h1').text(checkInput);
    console.log(game.winningNumber);
    console.log(game.playersGuess);
    //reset
    input.val('');
}

var hint = function(){
    var hintText = game.provideHint();
    $(document).title = hintText;
};
var resetGame = function(){
    $('#reset').on('click', function(){
        window.location.reload();
    });
};