//Start 2 players with 3 lives each
var player1Lives = 3;
var player2Lives = 3;
//Start with player 
var currentPlayer = 1; //(this helps us know which player we are on at any given point in our loop)
//Loop until player 1 or player 2 has 0 lives left
function checkLives(){
	if ((player1Lives > 0) && (player2Lives > 0)){
		return true;
	}
	else{
		return false;
	}
}

function getAnswer(operator, firstInt, secondInt){
	if ( operator == 1) {
		operator = "add"
	} else if( operator == 2) {
		operator = "subtraction"
	} else {
		operator = "multiplication"
	}

	return prompt("Player " + currentPlayer + ": What does " + firstInt + " " + operator + " " + secondInt + " equals?" + "What is your answer?") ;
}

do{
	//Select player 1 or player 2, based on who I ask a question previously.  (currentPlayer  = 2 for example)
	//Generate a question:
	//Generate x = random number between 1 and 20
	var firstInt = Math.floor(Math.random()*20)+1;
	//Generate y = random number between 1 and 20
	var secondInt = Math.floor(Math.random()*20)+1;
	//Generate op =  random number between 1 and 3 & selecting option based on number selected (1 = addition, 2 = subtraction, 3 = multiplication)
	var operator = Math.floor(Math.random()*3)+1;
	//humanFriendlyOp = human representation of the operation (eg: “minus”)
	
	//generate the question string by concatenating the numbers along with words in the middle. (“Player ” + playerNumber + “: What does “ + x + “ “ + humanFriendlyOp + “ “ + y + “equal?”)
	//Prompt the user for  the question and collect the response
	var answer = getAnswer(operator, firstInt, secondInt);
	//Evaluate the answer by using x, y, and op.
	var computedAnswer = 0;
	if (operator == 1){
		computedAnswer = (firstInt + secondInt);
	} else if (operator == 2) {
		computedAnswer = (firstInt - secondInt);
	} else {
		computedAnswer = (firstInt * secondInt);
	}
	//Determine if it is correct or not
	if (answer == computedAnswer){
		alert("Your are right. You did not lose a life!");
	}	
	else
	{
		alert("You are wrong. You have lost a life!");
		//Adjust this players life if the answer was incorrect
		if (currentPlayer == 1){
			player1Lives -= 1;
		} else {
			player2Lives -= 1;
		}
	} 
	
	if (currentPlayer == 1){
		currentPlayer = 2;
		console.log("You have " + player1Lives + " lives remaining");
	} else {
		currentPlayer = 1;
		console.log("You have " + player2Lives + " lives remaining");
	}	
	//Let the player know the result and their remaining lives (console.log)
//We only end up here when loop terminates, which means somebody lost.	
//Report back the number of lives remaining for each player
//If player1sLifeCount = 0, player 2 must have won! Otherwise, player 1 must have won (congratulate them!)	

}
while (checkLives() == true )

if(player1Lives == 0){
	console.log ("Player 2 has won! You have lost!");
} else {
	console.log ("Player 1 has won! You have lost");
}