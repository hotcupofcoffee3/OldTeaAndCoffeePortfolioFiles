


//////////////////
///// Skills /////
//////////////////

	function Skills(lang, langLogo, skillLevel) {
		this.lang = lang;
		this.langLogo = langLogo;
		this.skillLevel = skillLevel;
	};

	var skills_html = "";
	var skills = [
		html = new Skills("HTML", "<img src='img/html.png' />", 4),
		css = new Skills("CSS", "<img src='img/css.png' />", 4),
		javaScript = new Skills("JavaScript", "<img src='img/javaScript.png' />", 4),
		jQuery = new Skills("jQuery", "<img src='img/jQuery.png' />", 3),
		php = new Skills("PHP", "<img src='img/php.png' />", 2),
		swift = new Skills("Swift", "<img src='img/swift.png' />", 2),
		];
	for(skill in skills){
		skills_html += "<div class='skill'>";
			skills_html += "<div class='lang'>" + skills[skill].lang + "</div>";
			skills_html += "<div class='langLogo'>" + skills[skill].langLogo + "</div>";
			skills_html += "<div class='skillLevel'>";
				skills_html += "<div class='skillDots'>";
				for (i = 0; i < 5; i++){
					if(i < skills[skill].skillLevel){
						skills_html += "<div class='skillPoint skillFull'></div>";
					} else {
						skills_html += "<div class='skillPoint'></div>";
					}
				}
				skills_html += "</div></div>";
		skills_html += "</div>";
	};
	document.getElementById("skills").innerHTML = skills_html;

	function Projects(projectTitle, projectPhoto, projectDescription, projectLink){
		this.projectTitle = projectTitle;
		this.projectPhoto = projectPhoto;
		this.projectDescription = projectDescription;
		this.openLink = function(){
			window.open(projectLink, "_self");
		}
	}
	var projects_html = "";
	var projects = [

		matchingGame = new Projects(
			"Matching Game",
			"img/faviconMatching.png",
			"A simple matching game, almost exclusively using JavaScript and DOM manipulation.",
			"matching"
			),

		birdingAlbums = new Projects(
			"Birding Albums",
			"birding/birdPhotos/2016_04_05_TX_79922/icon/AmericanRobin_2.JPG",
			"A collection of a few of my birding albums, again almost exclusively using JavaScript.",
			"birding"
			)

	]
	for (projectIndex in projects){
		projects_html += "<div class='projects' onclick='projects[" + projectIndex + "].openLink();'>";
			projects_html += "<div class='projectTitle'>" + projects[projectIndex].projectTitle + "</div>";
			projects_html += "<div class='projectPhoto'><img src='" + projects[projectIndex].projectPhoto + "'/></div>";
			projects_html += "<div class='projectDescription'>" + projects[projectIndex].projectDescription + "</div>";
		projects_html += "</div>";
	}
	document.getElementById("projects").innerHTML = projects_html;

/////////////////
///// Birds /////
/////////////////

	function Birds(species, image){
		this.species = species;
		this.image = image;
	};

	var birds = [
		new Birds(
			"Black Phoebe", "img/birds/blackPhoebe.JPG"),
		new Birds(
			"House Finch", "img/birds/houseFinch.JPG"),
		new Birds(
			"House Sparrow", "img/birds/houseSparrow.JPG"),
		new Birds(
			"Northern Mockingbird", "img/birds/northernMockingbird.JPG"),
		new Birds(
			"American Kestrel", "img/birds/americanKestrel.JPG"),
		new Birds(
			"American Robin", "img/birds/americanRobin.JPG"),
		new Birds(
			"Dark-eyed Junco", "img/birds/darkEyedJunco.JPG"),
		new Birds(
			"Inca Dove", "img/birds/incaDove.JPG"),
		new Birds(
			"Lesser Goldfinch", "img/birds/lesserGoldfinch.JPG"),
		new Birds(
			"Ruby-crowned Kinglet", "img/birds/rubyCrownedKinglet.JPG"),
		new Birds(
			"Say's Phoebe", "img/birds/saysPhoebe.JPG"),
		new Birds(
			"Audubon's Yellow-rumped Warbler", "img/birds/yellowRumpedWarbler.JPG")
	];

	var currBirdN = 0;
	var allBirds = "";

	function dispBird(){
		document.getElementById("birdImage" + currBirdN).style.opacity = 1;
		document.getElementById("birdName").innerHTML = birds[currBirdN].species;
		document.getElementById("birdDot" + currBirdN).className = "currBirdPg";
		document.getElementById("birdImage" + currBirdN).style.position = "relative";
	};

	function oldBird(){
		document.getElementById("birdImage" + currBirdN).style.opacity = 0;
		document.getElementById("birdImage" + currBirdN).style.position = "absolute";
	}

	// function dispBird(){
	// 	document.getElementById("bird" + currBirdN).className = "currBirdPg";
	// 	document.getElementById("birdImage" + currBirdN).
	// };

	function birdImages(){
		for(bird in birds){
			allBirds += "<img id='birdImage" + bird + "' src='" + birds[bird].image + "' />";
		}
		document.getElementById("birdPic").innerHTML = allBirds;
	};

	function birdPages(){
		var birdPgDot = "";
		for(i = 0; i < birds.length; i++){
			birdPgDot += "<div class='unBirdPg' id='birdDot" + i + "' onclick='chooseBird(this);'></div>";
		}
		document.getElementById("birdPages").innerHTML = birdPgDot;
	};

	function chooseBird(choice){
		stopAuto();
		oldBird();
		document.getElementById("birdDot" + currBirdN).className = "unBirdPg";
		for(i = 0; i < birds.length; i++){
			if(choice.id == "birdDot" + i){
				currBirdN = i;
				dispBird();
			}
		}
	};

	function nextBird(){
		stopAuto();
		oldBird();
		document.getElementById("birdDot" + currBirdN).className = "unBirdPg";
		currBirdN++;
		if(currBirdN >= birds.length){
			currBirdN = 0;
		}
		dispBird();
	};

	function prevBird(){
		stopAuto();
		oldBird();
		document.getElementById("birdDot" + currBirdN).className = "unBirdPg";
		currBirdN--;
		if(currBirdN < 0){
			currBirdN = (birds.length - 1);
		}
		dispBird();
	};

	
	birdImages();
	birdPages();
	dispBird();





	var startBird;

	function birdAuto(){
		oldBird();
		document.getElementById("birdDot" + currBirdN).className = "unBirdPg";
		currBirdN++;
		if(currBirdN >= birds.length){
			currBirdN = 0;
		}
		dispBird();
	};

	function start(){
		startBird = setInterval(birdAuto, 7000);
	};

		// function restart(){
		// 	birdAuto();
		// 	start();
		// };

		// 	function contAuto(){
		// 		setTimeout(restart, 15000);
		// 	};

	function stopAuto(){
		clearInterval(startBird);
	};

	setTimeout(start, 15000);

//////////////////////
///// Quote Quiz /////
//////////////////////

	//  Quote constructor function and array of "Quote" object literals
		function Quotes(author, quote) {
			this.author = author;
			this.quote = quote;
		};
		var quotes = [
			new Quotes(
				"Bertrand Russell", "\"The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.\""),
			new Quotes(
				"Dr. Seuss", "\"Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.\""),
			new Quotes(
				"Louis CK", "\"\'I\'m bored\' is a useless thing to say.  You live in a great, big, vast world that you\'ve seen none percent of.\""),
			new Quotes(
				"Louis CK", "\"If you believe that God created the earth for YOU, why would you not have to look after it?\""),
			new Quotes(
				"Louis CK", "\"Whenever you leave behind failure, that means you\'re doing better. If you think everything you\'ve done has been great, you\'re probably dumb.\""),
			new Quotes(
				"Albert Einstein", "\"Insanity: doing the same thing over and over again and expecting different results.\""),
			new Quotes(
				"Albert Einstein", "\"If you can't explain it to a six year old, you don't understand it yourself.\""),
			new Quotes(
				"Albert Einstein", "\"Peace cannot be kept by force; it can only be achieved by understanding.\""),
			new Quotes(
				"Albert Einstein", "\"Strive not to be a success, but rather to be of value.\""),
			new Quotes(
				"Karl Pilkington", "\"If you don\'t have a plan, you can end up doing some interesting things.\""),
			new Quotes(
				"Ricky Gervais", "\"Comedy is an intellectual pursuit.\""),
			new Quotes(
				"Ricky Gervais", "\"I know I ruffle feathers but some people\'s feathers need a little ruffling.\""),
			new Quotes(
				"Ricky Gervais", "\"Beliefs don\'t change facts. Facts, if you\'re reasonable, should change your beliefs.\""),
			new Quotes(
				"Chinese Proverb", "\"The best time to plant a tree was 20 years ago. The second best time is now.\""),
			new Quotes(
				"Socrates", "\"An unexamined life is not worth living.\""),
			new Quotes(
				"Vincent Van Gogh", "\"If you hear a voice within you say \'you cannot paint,\' then by all means paint and that voice will be silenced.\""),
			new Quotes(
				"Aristotle", "\"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.\""),
			new Quotes(
				"Ralph Waldo Emerson", "\"The only person you are destined to become is the person you decide to be.\"")
		];

		// Creates "authors" array for selection options in quiz.
		var authors = [];

		function createAuthorsArray(){
			for (quoteIndex in quotes){
				var x = 0;
				for (authorIndex in authors){
					if (quotes[quoteIndex].author === authors[authorIndex]){
						x++;
					}
				}
				if (x === 0){
					authors.push(quotes[quoteIndex].author);
				}
			}
			authors.sort();
		}
		createAuthorsArray();
		


		//  Various variable declarations.
			var tries = 0;
			var score = 0;
			var randQuoNum;
			var currQuoNum;
			var choiceList;
			var usedQuotes = [];
			var choices = [];
			var currChoNum;

		//  Random number generator based on total number of quotes in quotes array.
		function randomQuote() {
			randQuoNum = Math.floor(Math.random() * quotes.length);
			return randQuoNum;
		}
		//  Random number generator based on total number of authors in authors array.
		function randomAut(){
			randAutNum = Math.floor(Math.random() * authors.length);
			return randAutNum;
		}
		//  Random number generator based on total number of choices in choices array.
		function randomCho(){
			randChoNum = Math.floor(Math.random() * choices.length);
			return randChoNum;
		}

		//  Populates HTML with Current Quote.
		function currQuo() {
			// Creates random quote number and prints random quote to screen.
			var prevAutNum;
			currQuoNum = randomQuote();
			document.getElementById("quote").innerHTML = quotes[currQuoNum].quote;

			// Prints unknown quote mark below quote.
			document.getElementById("whoSaidIt").innerHTML = "- ???";

			// Populates "choice" array with initial author value.
			choices.push(quotes[currQuoNum].author);

			// Adds 2 more random authors to "choices", looping through only twice.
			for(i = 0; i < 2; i++){
				// Generates a random number within the length of "authors" array.
				currAutNum = randomAut();
				// Makes sure that the new random number is not equal to the previous number and that the number also does not equal the same author as that which was already chosen from the current quote's author.
				while(currAutNum === prevAutNum || authors[currAutNum] === quotes[currQuoNum].author){
					currAutNum = randomAut();
				}
				// Adds the new random author to the "choices" array.
				choices.push(authors[currAutNum]);
				// Sets the current random author number to become the previous random author number, for the next and final iteration through the "for" loop.
				prevAutNum = currAutNum;
			}

			// Sets "choiceList" back to being an empty string.
			choiceList = "";

			// Iterates through the "choices" array and sets them up to be printed to the screen in the unordered list.  Runs through 3 times, due to only 3 author choices being created.
			for(i = 0; i < 3; i++){
				// Sets a random number within the length of the "choices" array.
				currChoNum = randomCho();
				// Populates the "choicesList" string with the current random number as the index for a value in the "choices" array.
				choiceList += "<li id='choice" + i + "' onclick='submitAns(this);'>"  + choices[currChoNum] + "</li>";
				// Removes the current array index in "choices", so that a choice in the "choiceList" is not repeated.
				choices.splice(currChoNum, 1);
			}

			// Prints the whole of the "choiceList" string to the "choices" unordered list element.
			document.getElementById("choices").innerHTML = choiceList;

			if(tries === 0){
				document.getElementById("results").innerHTML = "Can you guess who said it?";
			}
		}

		// Removes quote and places in a "used" array for later retrieval.
		function contQuiz() {
			// Pushes the just-used quote into "usedQuotes" as a "new Object".
			usedQuotes.push(quotes[currQuoNum]);

			// Removes the just-used quote from "quotes".
			quotes.splice(currQuoNum, 1);

			// If 10 quotes have been shown, the quiz is over, and "quotes" is repopulated with the previously used quotes from "usedQuotes".
			if(usedQuotes.length === 10){
				for (quote in usedQuotes){
					quotes.push(usedQuotes[quote])
				}

				// "usedQuotes" is set back to an empty array.
				usedQuotes = [];

				document.getElementById("results").innerHTML = "";
				document.getElementById("choices").innerHTML = "<div id='playAgain' onclick='currQuo();'>Go Again?</div>";
				document.getElementById("whoSaidIt").innerHTML = "";
				document.getElementById("quote").innerHTML = "<div id='finalScore'>Final Score: <br><br>" + score + " out of " + tries + "!</div>";
				tries = 0;
				score = 0;
			} else {
				currQuo();
			}
		}

		// Submits answer for evaluation.
		function submitAns(choice) {

			for(i = 0; i < 3; i++){
				document.getElementById("choice" + i).attributes[1].value = "";
				document.getElementById("choice" + i).style.cursor = "default";
			}

			tries++;
			//Compares answer to right answer (author).
			if(choice.innerHTML == quotes[currQuoNum].author){
				score++;
				choice.style.backgroundColor = "rgba(24,151,28,1)";
				document.getElementById("results").innerHTML = "Correct! You're now " + score + " for " + tries + "!";
			} else {
				document.getElementById("results").innerHTML = "Nope! You're now " + score + " for " + tries + "!";
				choice.style.backgroundColor = "rgba(157,22,26,1)";
			}
			// Removes quote and places in a "used" array for later retrieval.
			setTimeout(contQuiz,1000);
		}

		currQuo();



////////////////////////////
///// Smooth Scrolling /////
////////////////////////////


	function smoothScroll(whereTo, howFast) { 

		var scrolling;
		var winHeight;
		var siteHeight;
		var elemOffset;

		scrolling = window.scrollY;
		winHeight = window.innerHeight;
		siteHeight = document.body.scrollHeight;
		elemOffset = document.getElementById(whereTo).offsetTop;

		function startScroll(){

			scrolling += howFast;

			if (winHeight > (siteHeight - elemOffset)){

				if (scrolling < (siteHeight - winHeight)){
					window.scroll(0, scrolling);
				}
				else {
					window.scroll(0, (siteHeight - winHeight));
					clearInterval(getToScrolling);
				}

			}

			else {
				if (scrolling < elemOffset){
					window.scroll(0, scrolling);
				}
				else {
					window.scroll(0, elemOffset);
					clearInterval(getToScrolling);
				}
			}
			// console.log(scrolling);
		}

		var getToScrolling = setInterval(startScroll, 1);

		// Troubleshooting; checking to make sure it's working.

		// console.log(scrolling);
		// console.log(winHeight);
		// console.log(siteHeight);
		// console.log(elemOffset);
	}











