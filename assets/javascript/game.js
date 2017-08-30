



var wins = 0;
var losses = 0;
var score = 0;


//selects a random number from 19 t0 120
var randomNumber = Math.floor((Math.random()* 100) + 19);
//assigns random value to crystals from 1-12
var crystalBlue = Math.floor((Math.random()* 12) + 1);
var crystalGreen = Math.floor((Math.random()* 12) + 1);
var crystalYellow = Math.floor((Math.random()* 12) + 1);
var crystalPurple = Math.floor((Math.random()* 12) + 1);

//updates addition in html
var updateScore = function (){
	$('#scorenumber').empty();
	$('#scorenumber').append(score);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('#random-number').empty();
	$('#random-number').append(randomNumber);
}


var reset = function () {

	score = 0;
    randomNumber = Math.floor((Math.random()* 100) + 19);

	$('#scorenumber').empty();
	$('#scorenumber').append(score);

	crystalBlue= Math.floor((Math.random()* 12) + 1);
    crystalGreen = Math.floor((Math.random()* 12) + 1);
    crystalYellow= Math.floor((Math.random()* 12) + 1);
    crystalPurple = Math.floor((Math.random()* 12) + 1);
  
    updateScore();

}



function result() {
	console.log("Calling result");

	if (score == randomNumber)
	{
		console.log("Game won");ß
		this.wins++;
		$("#wins").text(wins);
		

	}
	else if (score > randomNumber)
	{
		console.log("game lost");
		this.losses++;
		$("#losses").text(losses);
		
	reset();
	}
 	
 }

$('#random-number').append(randomNumber);

$('#scorenumber').append(score);




$(document).ready(function() {

console.log("running on ready function");

$(".crystal-blue").on("click", function() {
	$("#scorenumber").html(score += crystalBlue);
	result();
});
$(".crystal-green").on("click", function() {
	$("#scorenumber").html(score += crystalGreen);
	result();
});
$(".crystal-yellow").on("click", function() {
	$("#scorenumber").html(score += crystalYellow);
	result();
});
$(".crystal-purple").on("click", function() {
	$("#scorenumber").html(score += crystalPurple);
	result();
});






});




