
// sets values for cards
var cards = ['queen', 'queen', 'king', 'king'];

var usedCards = [];
//saves what card was clicked
var cardsInPlay = [];

 

  //get 'game-board' div
  var board = document.getElementById('game-board');


//
var createBoard = function () {

// create for loop to make HTML element (div)
  //loops through each card, 
  for (var i = 0; i < cards.length; i++) {

  	//makes div for each card
  	var cardElement = document.createElement('div');
  	//calls new divs with className 'card'
  	cardElement.className = 'card';
  	
//set cards as king or queen, by looking through cards[i]
  	cardElement.setAttribute('data-card', cards[i]);

  	//makes 'click' run 'isTwoCards'
  	cardElement.addEventListener('click', isTwoCards);
	// puts cards on board
	board.appendChild(cardElement);
 
  }
}


//alert if cards are = or not
var isMatch = function (cardsInPlay) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!!");

	}

	else {
		alert ("Sorry, try again")
	}


}
// gives  correct pics to king or queen
var isTwoCards = function () {
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="images/king.png" alt="King"/>'
	}

	else {
		this.innerHTML = '<img src="images/queen.jpeg" alt="Queen"/>'
	}

	//run function 'isMatch' when 2 cards are clicked
	cardsInPlay.push(this.getAttribute('data-card'));
	//also but card in usedCards,(current cards)
	usedCards.push(this);
	//checks for 2 cards before running isMatch
	if (cardsInPlay.length === 2) {
		//runs isMatch with cardsInPlay
		isMatch(cardsInPlay);
		//when 2 cards are played, everything is reset and flipped
		for (var i = 0; i < usedCards.length; i++) {
       //clears pictures
          usedCards[i].innerHTML=" ";
		}
		//sets cardsInPlay array and usedCards array to empty
		cardsInPlay = [];
		usedCards = [];
	}
}

//runs createBoard
createBoard();

 
  
 