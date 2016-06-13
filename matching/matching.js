
/***************************************************************************************************/
/***************************************************************************************************/

/****************************** Setting up the Game Parameters Screen ******************************/

/***************************************************************************************************/
/***************************************************************************************************/

	// Initial starting of the game, different from starting a new game below.
		function initialStart(){

			// Removes button that begins game
				document.getElementById("main").removeChild(document.getElementById("chooseGameOptions"));

			// Displays game parameters to be chosen.
				chooseGameOptions();
		}

	// The game parameters' "options" string variable initialized, used to display the game parameters in HTML
		var options;

	// Displays game parameters to be chosen
		function chooseGameOptions(){

			

			// Opening tag for the game parameters
				options = "<div id='setUpGameParameters'>";

			// Each of the 3 sections of the game parameters created through the "setUpGameParameters" function, adding each to the "options" string
				setUpGameParameters("Number of Players", "numPlayers", "player", "numPlayers", numPlayers, "selPlayers");
				setUpGameParameters("Puzzle Type", "puzTypes", "puzType", "puzTypes", puzTypes, "selPuzType");
				setUpGameParameters("Puzzle Size", "puzSizes", "puzSize", "puzSizes", puzSizes, "selPuzSize");

			// Closing the "setUpGameParameters" tag with all 3 sections
				options += "</div>";

			// Separate section created below with a button to click to start the game, with game parameters set, and added to the entire "options" string
				options += "<div id='go' class='button' onclick='go();'>GO!</div>";

			// Completed "options" string inserted into the "main" HTML div
				document.getElementById("main").innerHTML = options;
		}

	/*** The generalized game parameters function to set the:
		Title for each section,
		Class for each section,
		Option ID with selection number attached for selection reference,
		Parent ID for each section of parameters,
		Number of options to be displayed based on the number of items in each game parameter array created, AND
		Function name that selects its own HTML element upon clicking it.
	***/

		function setUpGameParameters(paramTitle, classOpt, selfIdOpt, parenIdOpt, numOfOpt, clickOpt){

			// Establishes CSS margin based on number of items that in each array of section choices, to fit perfectly spaced across screen.
				var margin = (100 / numOfOpt.length) * .15;

			// Establishes CSS width of each item based on number of items that in each array of section choices, to fit perfectly spaced across screen.
				var width = (100 / numOfOpt.length) - (margin * 2);
			
			// Title for the section, added to "options" string
				options += "<p>" + paramTitle + "</p>";

			// Parent ID for each section, as opening div element, added to "options" string
				options += "<div id='" + parenIdOpt + "'>";

			// Adds each choice from array section to parent div section, running as many times as there are items in each array, adding each section to "options" string
				for(i = 0; i < numOfOpt.length; i++){

					// Opening div for each choice in section array
						options += "<div ";

					// Adds CSS class title with "button" tagword added
						options += "class='" + classOpt + " button' ";

					// Adds CSS ID title to each specific item, with number attached; i.e., "player0", where "player" is unique ID type and "0" is unique ID number
						options += "id='" + selfIdOpt + i + "' ";

					// Adds button to click that selects itself for later reference in assigning the variable for that choice to be in the game
						options += "onclick='" + clickOpt + "(this);' ";

					// Adds CSS margin top & bottom first, then left and right that were established earlier in this function based on number of items in section array
						options += "style='margin: 10px " + margin + "%; ";

					// Adds CSS width that was established earlier in this function based on number of items in section array
						options += "width: " + width + "%' >";

					// Adds HTML option visual to user on screen; i.e., 1, 2, 3 players, or a picture of each type of matching game, etc.
						options += numOfOpt[i];

					// Closes each choice
						options += "</div>";
				}

			// Closes parent div, each section div
				options += "</div>";
		}


/**************************************************************************/
/**************************************************************************/

/****************************** Game Options ******************************/

/**************************************************************************/
/**************************************************************************/

	
	/******************** Puzzle types ********************/
	

		var firstBirds = [
			"birds/1/americanKestrel.JPG",
			"birds/1/americanRobin.JPG",
			"birds/1/houseFinch.JPG",
			"birds/1/houseSparrow.JPG",
			"birds/1/blackPhoebe.JPG",
			"birds/1/saysPhoebe.JPG",
			"birds/1/darkEyedJunco.JPG",
			"birds/1/lesserGoldfinch.JPG",
			"birds/1/incaDove.JPG",
			"birds/1/northernMockingbird.JPG",
			"birds/1/rubyCrownedKinglet.JPG",
			"birds/1/yellowRumpedWarbler.JPG"
		];

		var secondBirds = [
			"birds/2/beltedKingfisher.JPG",
			"birds/2/blackNeckedStilt.JPG",
			"birds/2/greatBlueHeron.JPG",
			"birds/2/greaterRoadrunner1.JPG",
			"birds/2/greaterRoadrunner2.JPG",
			"birds/2/killdeer.JPG",
			"birds/2/leastSandpiper.JPG",
			"birds/2/lesserGoldfinch.JPG",
			"birds/2/lesserGoldfinchAndHouseFinch.JPG",
			"birds/2/mallard.JPG",
			"birds/2/pieBilledGrebe.JPG",
			"birds/2/sharpShinnedHawk.JPG",
			
		];

		var thirdBirds = [
			"birds/3/americanRobin.JPG",
			"birds/3/barnSwallow.JPG",
			"birds/3/blackChinnedHummingbird.JPG",
			"birds/3/cinnamonTeal.JPG",
			"birds/3/europeanStarling.JPG",
			"birds/3/greatTailedGrackle.JPG",
			"birds/3/killdeer.JPG",
			"birds/3/phainopepla.JPG",
			"birds/3/redWingedBlackbird.JPG",
			"birds/3/ruddyDuck.JPG",
			"birds/3/saysPhoebe.JPG",
			"birds/3/woodDuck.JPG",
			
		];

		/*** Puzzle types array that only the first picture in each array is shown on the game parameters page to choose ***/

			// Grouped puzzle types
				var allPuzTypes = [
					firstBirds,
					secondBirds,
					thirdBirds
				]
			// Puzzle type array to be used in creating game parameters
				var puzTypes = [];

			// Runs through grouped puzzle types array to add first picture to "puzTypes" array to be used to display pictures on game parameters screen
				for(type in allPuzTypes){

					// Assigns first image in each array in "allPuzTypes" to variable "puzTypeImg"
						var puzTypeImg = "<img src='" + allPuzTypes[type][0] + "' />";

					// Pushes picture assigned to "puzTypeImg" to "puzTypes" array
						puzTypes.push(puzTypeImg);
				}

	/******************** Number of Players ********************/

		var numPlayers = [1, 2, 3, 4];

	/******************** Different Puzzle Size Choices ********************/

		var puzSizes = [6, 12, 18, 24];


/************************************************************************************/
/************************************************************************************/

/****************************** Selecting Game Options ******************************/

/************************************************************************************/
/************************************************************************************/

	// Declares variables to be used to clarify which parameters have been selected by player

		var players;
		var puzType;
		var puzSize;

	/********************************************/
	/*** Functions called when choice is made ***/
	/********************************************/

		// When a player amount is clicked, "selPlayers" function is called, with the element itself selected and placed in the parameters of the function.

			function selPlayers(num){

				// Removes "player" tagword from selection ID, and assigns the number, as a string, attached to "players" variable, to set player's choice for selection.
					players = num.id.split("player")[1];

				// Calls "resetColors" function on parent of selection, to change all choices to a different color.
					resetColors("numPlayers");

				// Calls "highlight" function on the element chosen, to make the color of the choice different from the rest of the sections choices.
					highlight(num);
			}

		// When a player amount is clicked, "selPlayers" function is called, with the element itself selected and placed in the parameters of the function.

			function selPuzType(type){

				// Removes "puzType" tagword from selection ID, and assigns the number, as a string, attached to "puzType" variable, to set player's choice for selection.
					puzType = type.id.split("puzType")[1];

				// Calls "makeOpaque" function on parent of selection, to opaque all of the selections.
					makeOpaque("puzTypes");

				// Calls "opacity" function on the element chosen, to make the opacity of the choice back to normal.
					opacity(type);
			}

		// When a player amount is clicked, "selPlayers" function is called, with the element itself selected and placed in the parameters of the function.

			function selPuzSize(size){

				// Removes "puzSize" tagword from selection ID, and assigns the number, as a string, attached to "puzSize" variable, to set player's choice for selection.
					puzSize = size.id.split("puzSize")[1];

				// Calls "resetColors" function on the parent of selection, to change all choices to a different color.
					resetColors("puzSizes");

				// Calls "highlight" function on the element chosen, to make the color of the choice different from the rest of the sections choices.
					highlight(size);
			}

		/**************************************************/
		/*** Functions called to clarify current choice ***/
		/**************************************************/

			// Sets color to original background of all children of parent. This negates the "highlight" function of previous choice, so a new choice can be highlighted.

				function resetColors(parent){

					// Sets the parent's child nodes to an easier-to-work-with variable for the "for" loop.
						var x = document.getElementById(parent).childNodes;

					// Runs through all child nodes of the parent selection, changing the background to original color.
						for(i = 0; i < x.length; i++){
							x[i].style.background = "rgba(25,64,79,1)";
						}
				}

			// Sets "green" as the background of the choice.
				
				function highlight(choice){
					choice.style.background = "green";
				}

			// Sets opacity to half for all children of parent. Sets a "deselected" appearance to nonchosen items, and resets the previous choice to a "deselected" state.

				function makeOpaque(parent){

					// Sets the parent's child nodes to an easier-to-work-with variable for the "for" loop.
						var x = document.getElementById(parent).childNodes;

					// Runs through all child nodes of the parent selection, changing the opacity to half.
						for(i = 0; i < x.length; i++){
							x[i].style.opacity = "0.5";
						}
				}

			// Sets the opacity back to normal for the choice.

				function opacity(choice){
					choice.style.opacity = "1";
				}

/*********************************************************************************/
/*********************************************************************************/

/****************************** Creating Game Board ******************************/

/*********************************************************************************/
/*********************************************************************************/

	/************************************************************************************/
	/*** The various initially declared variables and one function to set up gameplay ***/
	/************************************************************************************/

		/*** Variables ***/

			// The overall gameboard area as a string of HTML
				var gameBoard = "";

			// The cards to play as a string of HTML
				var cards = "";

			// The section for the player boxes that shows the player number, number of matches, and gets highlighted upon the player's turn
				var playerBoxes;

			// The section with instructions for how to proceed through the game
				var instructionBox;

			// The initial player turn to start the game is player 0
				var playerTurn = 0

			// The initial number of players starts as an empty array
				var playersInGame = [];

			// The initial number of matches each players has is 0
				var matches = 0;

			// The selected type of cards gets doubled and pushed into this initially empty array..
				var doubledCards = [];

			// The doubled cards then get mixed and put into a new, initially empty, array 
				var mixedCards = [];

		/*** The One Object Function ***/

			// Object function for creating each player
				function PlayersInGame(player, score, matches){
					// Set to player number.
						this.player = player;

					// Set initially at 0 when created.
						this.score = score;

					// Array set initially to empty when created.
						this.matches = matches;
				}
		

	/*****************************/
	/*** Setting up Game Board ***/
	/*****************************/

		function go(){

			// Only execute if all game parameters have been set.
				if (players && puzSize && puzType){

			// Clears previous gameboard, if any.
				gameBoard = "";
				

			/******************** Matching Cards ********************/

				// Takes the chosen Puzzle Type and doubles it into a new array.
					for(i = 0; i < 2; i++){

						// "puzSize" as array index for "puzSizes" as chosen for game, but halved, as number of cards on board is twice the number of pictures available.
							for(j = 0; j < (puzSizes[puzSize] / 2); j++){

							// "allPuzTypes" has all puzzles type arrays.
							// "puzType" is chosen puzzle type, as index for "allPuzTypes".
							// "j" is each picture in "allPuzTypes[index]" array, and called "j" to differentiate from other "for" loop using "i".
								doubledCards.push(allPuzTypes[puzType][j]);
						};
					};

				// Creates a random number for the current size of the "doubledCards" array as it splices and pushes the items in the array into the "mixedCards" array.
					function randomNumber(){
						return Math.floor(Math.random() * doubledCards.length);
					}

				// Variable used to run through the same number of times as the "doubledCards" array is long
					var ready = doubledCards.length

				// Runs through the total number of times as the "doubledCards" array is long, so all items are able to be pushed into the "mixedCards" array.
					for(i = 0; i < ready; i++){

						// Variable "mixed" generates a random number from current "doubledCards" array length, decreasing every loop, as "doubledCards" array is spliced.
							var mixed = randomNumber();

						// The random number is used as the index in "doubledCards", which is pushed into "mixedCards" array.
							mixedCards.push(doubledCards[mixed]);

						// The random number index is then removed from "doubledCards", ensuring that the same card is not added to "mixedCards" in any more loops.	
							doubledCards.splice(mixed, 1);
					}

				// Opening tag for "cards" HTML string to be used as the actual playing cards.
					cards = "<div id='cards'>";

				// Loops through all items in "mixedCards" array, creating an element containing a back & front side, where parent of sides has "guess" function attached.
					for(card in mixedCards){

						// Parent element with "guess" function attached.
							cards += "<div class='cards' onclick='guess(this);'>";

						// Backside element with background color set, and designed to be ready to be flipped when the parent is clicked.
							cards += "<div style='position: absolute; z-index: 1; transform: rotateY(0deg); background-color: rgba(25,64,79,1);'></div>";
						
						// Frontside, with picture for each card looped through, set backward and be behind the backside, ready to flip when the parent is clicked.
							cards += "<img style='position: relative; z-index: 0; transform: rotateY(180deg);' src='" + mixedCards[card] + "' />";

						// Closing tag for parent element for each card.
							cards += "</div>";
					}

				// Closing tag for "cards" HTML string.
					cards += "</div>";

			/******************** Player Boxes ********************/

				/*** 
					"numPlayers[players]" refers to the "players" variable chosen for each game, used to retrieve a specific index from "numPlayers" array
				***/


				// Opening tag for parent for player boxes added to "playerBoxes" HTML string.
					playerBoxes = "<div id='playerBoxes'>";

				// Margin set to fit perfectly centered based on number of players, to be 5% of the width of each player's box..
					var margin = (100 / numPlayers[players]) * .05;

				// Width set to fit perfectly centered based on number of players, taking "margin" variable into consideration to space evenly.
					var width = (100 / numPlayers[players]) - (margin * 2);

				// 	Loops through to create the number of player boxes chosen for the game.
					for(i = 0; i < numPlayers[players]; i++){

						// A new player added to "playersInGame" array, each a new object, from "PlayersInGame" object function. Score starting at 0, matches array empty.
							playersInGame[i] = new PlayersInGame("Player" + (i+1), 0, []);

						// Opening tag for each player, with the ID for each being "player + i", added to "playerBoxes" HTML string.
							playerBoxes += "<div id='player" + i + "' ";

						// Class, width, and margin added to "playerBoxes" HTML string.
							playerBoxes += "class='players' style='width: " + width + "%; margin: 0 " + margin + "%'>";

						// Player text added to player box, with the player number, i.e., "Player 1".
							playerBoxes += "Player " + (i+1);
							
						// Tag to go under "Player 1" text, showing score, with ID of "player#score", starting with a score of 0.
							playerBoxes += "<div id='player" + (i+1) + "score'>Score: " + playersInGame[i].score + "</div>";

						// Tag to go under "Player 1" score, displaying a matched card, with ID of "player#matches", adding "img" tag from match from "guess2" variable.
							playerBoxes += "<div id='player" + (i+1) + "matches' class='matches'></div>";

						// Closing tag for each player box.
							playerBoxes += "</div>";
					}

				// Closing tag for parent of player boxes.
					playerBoxes += "</div>";

			/******************** Game Board Created ********************/ 

				// Full game board created by adding "playerBoxes" HTML string, then "cards" HTML string to "gameBoard" HTML string.
					gameBoard += playerBoxes + cards;

				// "gameBoard" HTML string is inserted into #main HTML element.
					document.getElementById("main").innerHTML = gameBoard;

				// Background color of first player's player box turned green, with "playerTurn" variable beginning at 0.
					document.getElementById("playerBoxes").children[playerTurn].style.backgroundColor = "green";
			}
		}

/******************************************************************************/
/******************************************************************************/

/****************************** Playing the Game ******************************/

/******************************************************************************/
/******************************************************************************/

	/*****************************************************************/
	/*** The various initially declared variables to play the game ***/
	/*****************************************************************/

		// The two guess variables, used as HTML strings, to contain image URL, and used to compare the two cards guessed.
			var guess1 = "";
			var guess2 = "";

		// When a guess is correct, the two cards as added as HTML strings to "flipped" variables to flip back over, or to no longer be visible.
			var flipped1 = "";
			var flipped2 = "";

		// Used to evaluate when a player has taken their turn, with a maximum of guessing and turning over 2 cards.
			var guesses = 0;

	/**************************/
	/*** Flipping the Cards ***/
	/**************************/

		/*** Function to appear to flip the cards, moving the picture side into view, and the backside behind, out of view, switching zindeces. ***/

			function flipCard(flipping) {

				// Simplified variables for use in this function, with "flipping" being the parent card clicked on. Child 0 is back, child 1 is front picture.
					var backOfCard = flipping.children[0].style;
					var frontOfCard = flipping.children[1].style;

				// Back of card starts at zindex 1 initially, so this turns it around.
					if (backOfCard.zIndex == 1){

						// Changing of zindeces using style properties, bringing picture to front and sending blank side to back.
							backOfCard.zIndex = "0";
							frontOfCard.zIndex = "1";

						// Rotates cards using style properties, flipping back of card around, while bringing picture right way around.
							backOfCard.transform = "rotateY(180deg)";
							frontOfCard.transform = "rotateY(0deg)";

				// If card is showing picture, the "else" simply turns the elements back to their initial positions.
					} else {
						backOfCard.zIndex = "1";
						frontOfCard.zIndex = "0";
						backOfCard.transform = "rotateY(0deg)";
						frontOfCard.transform = "rotateY(180deg)";
					}
			}

		/*** Function to appear to flip the cards back over. ***/

			function flippedBack () {

				// Using each card flipped as the argument for the "flipCard" function, switching its zindeces to appear to flip it back over.
					flipCard(flipped1);
					flipCard(flipped2);

				// Once the cards are turned over, it's the next player's turn.
					changeTurns();
			}

		/*** Function to make the cards appear to disappear if a match is made, changing their opacity and making them hidden. ***/

			function invisible(){

				// Changes the opacity of the cards to 0, allowing for CSS transition, instead of making them vanish instantly.
					flipped1.style.opacity = "0";
					flipped2.style.opacity = "0";

				// Changes the visibility so that they are no longer able to be clicked, but they still hold their space on the DOM, so the remaining cards don't shift.
					flipped1.style.visibility = "hidden";
					flipped2.style.visibility = "hidden";

				// Turns change if a match is made.
					changeTurns();
			}

	/*********************/
	/*** Taking a Turn ***/
	/*********************/

		/*** Changes player box color upon the player's turn being over. ***/

			function changeTurns(){

				// Resets current player box background color to original by using "playerTurn" variable to select the right player in "playerBoxes" element.
					document.getElementById("playerBoxes").children[playerTurn].style.backgroundColor = "rgba(25,64,79,1)";

				// Increases "playerTurn" to highlight next player.
					playerTurn++;

				// If "playerTurn" exceeds the number of players in game ("players" as index in "numPlayers" array), it starts back at the first player, which is index 0.
					if(playerTurn >= numPlayers[players]){
						playerTurn = 0;
					}

				// Current "playerTurn" number used as index for current player's turn.
					document.getElementById("playerBoxes").children[playerTurn].style.backgroundColor = "green";
			}

		/*** Resets "guesses" variable back to 0, and adds button to #game element to restart game ***/

			function resetGuesses(){
				guesses = 0;

				// Compares total "matches" variable to all cards divided by two, since each match is two cards. Then adds "Start Game" button to begin again.
					if (matches == (mixedCards.length / 2)) {
						document.getElementById("cards").innerHTML = "<div id='chooseGameOptions' class='button' onclick='chooseGameOptions();'>New Game?</div>";
					} 
			}

		/*** Accounts for a players guess each time a card is clicked ***/

			function guess(takingTurn){

				// "guesses" variable begins at 0, increasing when a card is clicked
					guesses++;

				// After first guess...
					if (guesses == 1) {

						// Card is flipped based on the clicked parent element card as "takingTurn", as argument for "guess" function, then "flipCard" function.
							flipCard(takingTurn);

						// "takingTurn" has second indexed child's image source set to "guess1" to later be compared to "guess2".
							guess1 = takingTurn.children[1].src;

						// "flipped1" is set to current "takingTurn" argument, which is the clicked parent element, to be used to flip the card back over, or hide it.
							flipped1 = takingTurn;

				// After second guess...

					// If player clicks the same turned-over card again, this prevents the player from getting points from clicking the same single card.
						} else if (guesses == 2 && takingTurn.children[1].style.zIndex == "1"){

							// Just a fun little tag to say not to cheat! :)
								console.log("Don't cheat!");

							// Resets "guesses" back to 1, so that the player can continue to have a turn.
								guesses = 1;

					// If player clicks a different card as a guess...
						} else if (guesses == 2 && takingTurn.children[1].style.zIndex == "0") {

							// Card is flipped based on the clicked parent element card as "takingTurn", as argument for "guess" function, then "flipCard" function.
								flipCard(takingTurn);

							// "takingTurn" has second indexed child's image source set to "guess2" to later be compared to "guess1".
								guess2 = takingTurn.children[1].src;

							// "flipped2" is set to current "takingTurn" argument, which is the clicked parent element, to be used to flip the card back over, or hide it.
								flipped2 = takingTurn;

							// In the event of a match, where "guess1" image source equals "guess2" image source...
								if (guess1 == guess2) {

									// Adds a match to "matches" variable.
										matches++;

									// A little fun thing to cheer you on.
										console.log("Yay!");

									// "playerTurn" used as index for "playersInGame" to increase the "score" for the "playersInGame" index's current player object.
										playersInGame[playerTurn].score++;

									// "playerTurn" index + 1 + "score"; i.e., #player1score; Score added to this element using current "playersInGame[playerTurn].score".
										document.getElementById("player" + (playerTurn+1) + "score").innerHTML = "Score: " + playersInGame[playerTurn].score;

									// Function to append match to player box from "guess2" variable as "img".
										function addMatch(){
											document.getElementById("player" + (playerTurn+1) + "matches").appendChild(takingTurn.children[1]);
										}

									// Delayed "addMatch()" function to match "invisible()" and "resetGuesses()".
										setTimeout(addMatch, 1000);
									
									// Cards are made invisible after 1 second.
										setTimeout(invisible, 1000);
									
									// Guesses are reset after 1 second.
										setTimeout(resetGuesses, 1000);

							// If no match...
								} else {
									console.log("No match!");

									// Cards are flipped back around after 1 second.
										setTimeout(flippedBack, 1000);

									// Guesses are reset after 1 second.
										setTimeout(resetGuesses, 1000);
								}
					// If player gets impatient and keeps clicking cards before guesses have been checked...
						} else {

							// A little encouragement for patience!
								console.log("Give it a sec!");
						}
			}










