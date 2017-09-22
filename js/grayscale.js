// Game

  var harryPotter = ['Hermione', 'Hogwarts', 'Ron', 'Harry', 'Voldemort', 'Hedwig', 'Hagrid', 'Gryffindor', 'Hufflepuff', 'Slytherin'];
  var wordUsed;
  var placeHolder;
  var wins;
  var totalGuesses;
  var lettersGuessed;

  function init() {
      // Get instance of letters guessed container
      lettersGuessed = document.getElementById("lettersGuessed");
      wins = 0;

      // Add listener for keypress
      document.addEventListener('keypress', guess);

      // Start first game.
      startGame();
  }


  function startGame() {
      placeHolder = '';
      totalGuesses = 7;

      lettersGuessed.innerHTML = '';

      wordUsed = harryPotter[Math.floor(Math.random() * harryPotter.length)];
      wordUsed = wordUsed.toLowerCase();

      for (var i = 0; i < wordUsed.length; i++){
          placeHolder += '_';
      }

      document.getElementById("placeHolder").innerHTML = placeHolder;
  }


  function guess(event) {

      var letter = event.key.toLowerCase();
      var correctGuess = false;
      var letterFoundIndex;

      if (lettersGuessed.innerHTML.indexOf(letter) > -1){
          // Letter already guessed, abort!
          return;
      }

      // Add new guessed letter to end of letters guessed list.
      lettersGuessed.innerHTML = lettersGuessed.innerHTML + letter;

      // Search if the letter is in the word.
      letterFoundIndex = wordUsed.indexOf(letter);

      while (letterFoundIndex > -1 ) {
          correctGuess = true;

          // Replace letter at a specific index that it was found.
          var pre = placeHolder.substring(0, letterFoundIndex);// Part of the word BEFORE the guessed letter.
          var post = placeHolder.substring(letterFoundIndex + 1);// Part of the word AFTER the guessed letter.
          placeHolder = pre + letter + post;
          document.getElementById("placeHolder").innerHTML = placeHolder;

          // Find next instance of letter in the word
          letterFoundIndex = wordUsed.indexOf(letter,letterFoundIndex + 1);

          // NOTES:
          // Hermione
          // m -> index = 4
          // pre = Her -> substring(0,4), * from 0 up to, but not including, 4.
          // post = ione -> substring(5, null), * substring without a second parameter returns the rest of the word.
      }

      if(!correctGuess) {
          totalGuesses--;
          document.getElementById("numberOfGuesses").innerHTML = totalGuesses;
      }

      if(placeHolder === wordUsed) {
          wins++;
          startGame();
      }

      if(totalGuesses === 0) {
          alert("You lose! The word was: " + wordUsed.toUpperCase());
          startGame();
          document.getElementById("numberOfGuesses").innerHTML = totalGuesses;
      }

      document.getElementById("score").innerHTML = wins;


  }


  // Init the game
  window.onload = init;
