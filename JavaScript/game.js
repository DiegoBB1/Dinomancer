"use strict"; //Forces strict JavaScript which will make it easier to catch bugs

const player_turn = {
	player_next: 0,
    player_waiting: 1,
    player_passed: 2
}

const battlefield_positions = {
	close: 0,
    ranged: 1,
    siege: 2
}

var p1_turn = 1;
var p1_lives = 2;
var p1_hand;
var p1_strength = 0;
var p2_turn = 1;
var p2_lives = 2;
var p2_hand;
var p2_strength = 0;
var card_numbers = [0,1,2,3,4,5,6,7,8,9];


function prepareGame(){
    // Determine who gets first turn
    let first_turn = Math.floor(Math.random() * 2);

    if(first_turn == 0){
        p1_turn = 0;
        console.log("Player 1 goes first");
    }
    else{
        p2_turn = 0;
        console.log("Player 2 goes first");
    }

    //Generate card numbers for both players
    p1_hand = shuffle();
    p2_hand = shuffle();
    console.log("Player 1 Hand: " + p1_hand);
    console.log("Player 2 Hand: " + p2_hand);

    //TODO: Use generated numbers to retrieve corresponding cards in deck and place in hand

    //Once cards prepared, the game is started
    // startGame();
}

// Function takes the default card array and shuffles it to create each players hand
function shuffle(){
    //shuffles the card number array and returns first 10 numbers
    let tempArray = card_numbers;
    let currentIndex = tempArray.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [tempArray[currentIndex], tempArray[randomIndex]] = [
        tempArray[randomIndex], tempArray[currentIndex]];
    }
 
    return tempArray.slice(0, 10);
}

function startGame(){
    //While loop to simulate the entire game
    //Nested while loop to simulate individual rounds

    //Outer loop runs until a player is out of lives or out of cards
    //Inner loop runs until both players pass
    while(p1_lives != 0 || p2_lives != 0 || p1_hand.length != 0 || p2_hand.length != 0){
        while(p1_turn != 2 && p2_turn != 2){

            if(p1_turn == 0){
                //Wait for player 1 move
                
                //TODO: Wait for player to click on a card or press the pass button
                // When card is clicked, it is saved into a variable for simplicity
                // let currentCard = x;
                // let selectedPosition = y;
                
                //Card can only be placed if positions match
                if(currentCard.position == selectedPosition){
                    p1_strength += currentCard.strength;
                    //Card is physically placed on battlefield
                    //Card is removed from player's hand
                }
                

                //If player passes, their turn is updated
                // if( player passes){
                //     p1_turn = 2;
                // }
                // //Else, players turn is over, and is now waiting
                // else{
                //     p1_turn = 1;
                // }
                
            }else{
                //Call player 2 AI move

                
                //If player passes, their turn is updated
                // if( player passes){
                //     p2_turn = 2;
                // }
                // //Else, players turn is over, and is now waiting
                // else{
                //     p2_turn = 1;
                // }
            }

        }
        // When inner loop breaks, that round is over and the winner of the round is determined.
        if(p1_strength > p2_strength){
            p2_lives--;
        }
        else if(p1_strength < p2_strength){
            p1_lives--;
        }
        else{
            p1_lives--;
            p2_lives--;
        }
        
        //Strenghts reset to 0.
        p1_strength = 0;
        p2_strength = 0;
        //At the end of the round, the battlefield is cleared

    }


    if(p1_lives > p2_lives){
        //Player 1 wins
    }
    else if(p1_lives < p2_lives){
        //Player 2 wins
    }
    else[
        //Tie
    ]
}