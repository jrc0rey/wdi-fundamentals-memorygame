console.log("JS file is connected to HTML! Woo!")

var cardOne= "queen";
var cardTwo= "queen";
var cardThree= "king";
var cardFour= "king";

var createCards= function(){

var gameBoard= document.getElementById('gameBoard')

for (i=0; i<4; i++1 ){
	var cardDiv= document.createElement('div');
	cardDiv.className = 'card'
	gameBoard.appendChild(cardDiv);
}

}

createCards();


/*if (cardOne === cardTwo){
	alert('You found a match!');
}*/
