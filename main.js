var cardOne ="queen";

var cardTwo = "king";

var cardThree = "queen";

var cardFour = "king";

 /* if (cardOne === cardThree) {
 
     alert("You found a match!");
 
   } else {
 
     alert("Sorry, try again.");
 
  }   */
  var board = document.getElementById('game-board');



var createBoard = function () {

// create for loop to make HTML element (div)
  for (var i = 0; i < 4; i++) {
  	var cardElement = document.createElement('div');
  	cardElement.className = 'card';
  	board.appendChild(cardElement);
  }
}

createBoard();

 
  
 