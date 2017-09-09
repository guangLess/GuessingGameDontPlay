$(document).ready(function(){
    console.log('Everything is loaded!');
    var game = new Game();
    getNumber();
    clearInput();   
});

var getNumber = function () {
    var inputNum = $('#guessInput').val();    
    submitBtnQuery(console.log(inputNum));
}
var clearInput = function () {
    submitBtnQuery($('#guessInput').val(''));

}
var submitBtnQuery = function(query){
        return  $('#submitguess').on('click', function(){
            debugger;
            return query();
        });
}



