var cardOne ="queen";

var cardTwo = "king";

var cardThree = "queen";

var cardFour = "king";


var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

 /* if (cardOne === cardThree) {
 
     alert("You found a match!");
 
   } else {
 
     alert("Sorry, try again.");
 
  }   */
  var board = document.getElementById('game-board');



var createBoard = function () {

// create for loop to make HTML element (div)
  for (var i = 0; i < cards.length; i++) {
  	var cardElement = document.createElement('div');
  	cardElement.className = 'card';
  	board.appendChild(cardElement);
  	cardElement.innerHTML = cards[i];
  	cardElement.addEventListener('click', isTwoCards);
  	
//Need to go back in find where to put images
  	//<img src="images/king.jpg" alt="King"/>
  	//<img src="images/queen.jpg" alt="Queen"/>
  }
}

var isTwoCards = function () {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

createBoard();

 
  
 