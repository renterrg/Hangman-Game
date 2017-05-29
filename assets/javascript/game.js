
var harryPotter = ['Hermione', 'Hogwarts', 'Ron', 'Harry'];
var wordUsed, placeHolder
var wins = 0;
var totalGuesses



window.onload = function() {




function startGame() {

  placeHolder = '';
  totalGuesses = 10;
  wordUsed = harryPotter[Math.floor(Math.random() * harryPotter.length)];
  console.log(wordUsed);
  
  for (var i=0; i < wordUsed.length; i++){
  	placeHolder += '_ ';
  }
  
document.getElementById("placeHolder").innerHTML = placeHolder;
}




function guess(){

 var correctGuess = false;
 var letterGuessed = document.getElementById("letterGuessed");
 	document.onkeyup = function(event) {
 		letterGuessed.textContent = event.key;
 	};
 	


 for (var i=0; i < wordUsed.length; i++){
 	if (letterGuessed === wordUsed.substring(i, i + 1)) {


 		correctGuess = true;
 		placeHolder = placeHolder.substring(0, i) + letterGuessed + placeHolder.substring(i + 1, placeHolder.length + 1);
 		document.getElementById("placeHolder").innerHTML = placeHolder;
 	}

 }

	if(!correctGuess) {
		totalGuesses--;
	}

	if(placeHolder === wordUsed) {
		wins++;
	}

	if(totalGuesses = 0) {
		alert("You lose!");
		startGame();
	}

}

startGame();
guess ();

}