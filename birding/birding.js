/** Clicked item indeces & bird species arrays & various global variables **/

	var clickedAlbumIndex;
	var clickedPhotoIndex;
	var sightedSpecies = [];

/** New Bird Album Object **/

	function BirdingAlbum (albumDay, albumMonth, albumYear, albumState, albumZIP, albumPhotos){
			
		// Album info.
		this.albumDay = albumDay;
		this.albumMonth = albumMonth;
		this.albumYear = albumYear;
		this.albumState = albumState;
		this.albumZIP = albumZIP;
		this.albumTitle = this.albumDay + " " + this.albumMonth + " " + this.albumYear + " - " + this.albumState + " " + this.albumZIP;
		switch(this.albumMonth){
			case "Jan." : this.albumMonthNumber = "01";
				break;
			case "Feb." : this.albumMonthNumber = "02";
				break;
			case "Mar." : this.albumMonthNumber = "03";
				break;
			case "Apr." : this.albumMonthNumber = "04";
				break;
			case "May" : this.albumMonthNumber = "05";
				break;
			case "Jun." : this.albumMonthNumber = "06";
				break;
			case "Jul." : this.albumMonthNumber = "07";
				break;
			case "Aug." : this.albumMonthNumber = "08";
				break;
			case "Sep." : this.albumMonthNumber = "09";
				break;
			case "Oct." : this.albumMonthNumber = "10";
				break;
			case "Nov." : this.albumMonthNumber = "11";
				break;
			case "Dec." : this.albumMonthNumber = "12";
				break;
		}

		// Initial album index, to be set as the birding albums are being initialized.
		this.albumIndex = 0;

		// Array containing "BirdPhoto" objects for each bird photo.
		this.albumPhotos = albumPhotos;

		// Adds the album title function HTML string to each photo in the album as the "birdPhotoAlbumTitle" property.
		for (photoIndex in this.albumPhotos){
			this.albumPhotos[photoIndex].birdPhotoAlbumTitle = this.albumTitle;
			this.albumPhotos[photoIndex].birdPhotoIndex = photoIndex;
			this.albumPhotos[photoIndex].birdAlbumDay = this.albumDay;
			this.albumPhotos[photoIndex].birdAlbumMonth = this.albumMonthNumber;
			this.albumPhotos[photoIndex].birdAlbumYear = this.albumYear;
			this.albumPhotos[photoIndex].birdAlbumState = this.albumState;
			this.albumPhotos[photoIndex].birdAlbumZIP = this.albumZIP;
			this.albumPhotos[photoIndex].birdPhotoAlbumInfo = this.albumYear + "_" + this.albumMonthNumber + "_" + this.albumDay + "_" + this.albumState + "_" + this.albumZIP;
			this.albumPhotos[photoIndex].birdPhotoIcon = "birdPhotos/" + this.albumPhotos[photoIndex].birdPhotoAlbumInfo + "/icon/" + this.albumPhotos[photoIndex].birdPhotoURL;
			this.albumPhotos[photoIndex].birdPhotoOriginal = "birdPhotos/" + this.albumPhotos[photoIndex].birdPhotoAlbumInfo + "/original/" + this.albumPhotos[photoIndex].birdPhotoURL;
		}

		// Opens bird album.
		this.openBirdAlbum = function (){
			
			var openedBirdAlbum = "<div class='openedBirdAlbumHeaders'>";
					openedBirdAlbum += "<div class='backButtonContainers'>";
						openedBirdAlbum += "<p class='backButtons' onclick='backButtonAlbum(this)'>Back<p>";
					openedBirdAlbum += "</div>";
					openedBirdAlbum += "<div class='openedBirdAlbumTitle'>"
						openedBirdAlbum += "<p>" + this.albumTitle + "</p>";
					openedBirdAlbum += "</div>";
				openedBirdAlbum += "</div>";

				openedBirdAlbum += "<div id='openedBirdAlbum'>";
					for (photoIndex in this.albumPhotos){
						this.albumPhotos[photoIndex].birdPhotoIndex = photoIndex;
						openedBirdAlbum += this.albumPhotos[photoIndex].loadBirdPhotoAlbumIcon(this.albumIndex, photoIndex);
					};
				openedBirdAlbum += "</div>";

			document.getElementById("openedAlbumPage").innerHTML = openedBirdAlbum;
			document.getElementById("openedAlbumPage").style.display = "block";
			document.getElementById("openedAlbumPage").style.opacity = "1";
			document.getElementById("allBirdAlbumsContainer").style.display = "none";
		}
	}

/** New Bird Photo Object **/

	function BirdPhoto (birdName, birdPhotoURL){

		// String of bird's name to be displayed.
		this.birdName = birdName;
		this.birdPhotoURL = birdPhotoURL;
		this.birdPhotoIndex;
		this.birdPhotoAlbumTitle;
		this.birdAlbumYear;
		this.birdAlbumMonth;
		this.birdAlbumDay;
		this.birdAlbumState;
		this.birdAlbumZIP;
		this.birdPhotoAlbumInfo;
		this.birdPhotoOriginal;
		this.birdPhotoIcon;
		this.birdPhotoAlbumIndex;
			

		// Loads the bird photo album icon.
		this.loadBirdPhotoAlbumIcon = function (currentAlbumIndex, currentPhotoIndex){
			var birdIconString = "";

			/*****************************************************************************/
			/***** MAKE INTO "this.openBirdPhoto()" instead????????????????????????? *****/
			/*****************************************************************************/

			birdIconString += "<div class='birdPhotoIcon' onclick='allBirdAlbumsArray[";
			birdIconString += currentAlbumIndex + "].albumPhotos[" + currentPhotoIndex + "].openBirdPhotoInAlbum()'>";
				birdIconString += "<img src='" + this.birdPhotoIcon + "' />";
				birdIconString += "<div class='birdPhotoOverlayIcons'>";
					birdIconString += "<p>" + this.birdName + "</p>";
				birdIconString += "</div>";
			birdIconString += "</div>";
			return birdIconString;

		}

		// Loads the bird photo album icon.
		this.loadBirdPhotoSpeciesIcon = function (currentAlbumIndex, currentPhotoIndex){
			var birdIconString = "";

			birdIconString += "<div class='birdPhotoIcon' onclick='allBirdAlbumsArray[";
			birdIconString += currentAlbumIndex + "].albumPhotos[" + currentPhotoIndex + "].openBirdPhotoInSpecies()'>";
				birdIconString += "<img src='" + this.birdPhotoIcon + "' />";
				birdIconString += "<div class='birdPhotoOverlayIcons'>";
					birdIconString += "<p>" + this.birdPhotoAlbumTitle + "</p>";
				birdIconString += "</div>";
			birdIconString += "</div>";
			return birdIconString;

		}

		// Opens bird photo in album.
		this.openBirdPhotoInAlbum = function (){

			var openedBirdPhoto = "<div class='openedBirdAlbumHeaders'>";
					openedBirdPhoto += "<div class='backButtonContainers'>";
						openedBirdPhoto += "<p class='backButtons' onclick='backButtonPhoto(this)'>Back<p>";
					openedBirdPhoto += "</div>";
					openedBirdPhoto += "<div class='openedBirdAlbumTitle'>"
						openedBirdPhoto += "<p>" + this.birdPhotoAlbumTitle + "</p>";
					openedBirdPhoto += "</div>";
				openedBirdPhoto += "</div>";

				openedBirdPhoto += "<div id='openedBirdPhoto'>";
					openedBirdPhoto += "<img src='" + this.birdPhotoOriginal + "' />";
					openedBirdPhoto += "<div class='birdPhotoOverlayOriginal'>"
						openedBirdPhoto += "<p>" + this.birdName + "</p>";
					openedBirdPhoto += "</div>";
				openedBirdPhoto += "</div>";

			document.getElementById("openedPhotoPage").innerHTML = openedBirdPhoto;
			document.getElementById("openedPhotoPage").style.display = "block";
			document.getElementById("openedPhotoPage").style.opacity = "1";
		}

		/****************************************************/
		/****************************************************/
		/**************** Not done YET **********************/
		/****************************************************/
		/****************************************************/

		// Opens bird photo in species.
		this.openBirdPhotoInSpecies = function (){

			var openedBirdPhoto = "<div class='openedBirdAlbumHeaders'>";
					openedBirdPhoto += "<div class='backButtonContainers'>";
						openedBirdPhoto += "<p class='backButtons' onclick='backButtonPhoto(this)'>Back<p>";
					openedBirdPhoto += "</div>";
					openedBirdPhoto += "<div class='openedBirdAlbumTitle'>"
						openedBirdPhoto += "<p>" + this.birdName + "</p>";
					openedBirdPhoto += "</div>";
				openedBirdPhoto += "</div>";

				openedBirdPhoto += "<div id='openedBirdPhoto'>";
					openedBirdPhoto += "<img src='" + this.birdPhotoOriginal + "' />";
					openedBirdPhoto += "<div class='birdPhotoOverlayOriginal'>"
						openedBirdPhoto += "<p>" + this.birdPhotoAlbumTitle + "</p>";
					openedBirdPhoto += "</div>";
				openedBirdPhoto += "</div>";

			document.getElementById("openedPhotoPage").innerHTML = openedBirdPhoto;
			document.getElementById("openedPhotoPage").style.display = "block";
			document.getElementById("openedPhotoPage").style.opacity = "1";
		}
	}

/** All Bird Albums in Array **/

	var allBirdAlbumsArray = [
		new BirdingAlbum(
			"16", "Apr.", "2016", "TX", "79922",
			[ 
				new BirdPhoto ("Black-chinned Hummingbird", "BlackChinnedHummingbird_1.JPG"),
				new BirdPhoto ("Black-chinned Hummingbird", "BlackChinnedHummingbird_2.JPG"),
				new BirdPhoto ("Black-chinned Hummingbird", "BlackChinnedHummingbird_3.JPG"),
				new BirdPhoto ("Black-chinned Hummingbird", "BlackChinnedHummingbird_4.JPG"),
				new BirdPhoto ("Black-chinned Hummingbird", "BlackChinnedHummingbird_5.JPG"),
				new BirdPhoto ("House Finch", "HouseFinch_1.JPG"),
				new BirdPhoto ("House Finch", "HouseFinch_2.JPG"),
				new BirdPhoto ("Lesser Goldfinch", "LesserGoldfinch.JPG"),
				new BirdPhoto ("Northern Mockingbird", "NorthernMockingbird.JPG"),
				new BirdPhoto ("Swainson's Hawk", "SwainsonsHawk.JPG"),
				new BirdPhoto ("Turkey Vulture", "TurkeyVulture.JPG")
			]
		),
		new BirdingAlbum(
			"05", "Apr.", "2016", "TX", "79922",
			[ 
				new BirdPhoto ("American Robin", "AmericanRobin_1.JPG"),
				new BirdPhoto ("American Robin", "AmericanRobin_2.JPG"),
				new BirdPhoto ("Great-tailed Grackle", "GreatTailedGrackle_1.JPG"),
				new BirdPhoto ("Great-tailed Grackle", "GreatTailedGrackle_2.JPG"),
				new BirdPhoto ("Great-tailed Grackle", "GreatTailedGrackle_3.JPG"),
				new BirdPhoto ("Great-tailed Grackle", "GreatTailedGrackle_4.JPG"),
				new BirdPhoto ("Great-tailed Grackle", "GreatTailedGrackle_5.JPG"),
				new BirdPhoto ("Great-tailed Grackle", "GreatTailedGrackle_6.JPG"),
				new BirdPhoto ("Great-tailed Grackle", "GreatTailedGrackle_7.JPG"),
				new BirdPhoto ("Say's Phoebe", "SaysPhoebe_1.JPG"),
				new BirdPhoto ("Say's Phoebe", "SaysPhoebe_2.JPG"),
				new BirdPhoto ("Say's Phoebe", "SaysPhoebe_3.JPG")
			]
		),
		new BirdingAlbum(
			"01", "Nov.", "2015", "TX", "79922",
			[ 
				new BirdPhoto ("European Starling", "EuropeanStarling_1.JPG"),
				new BirdPhoto ("European Starling", "EuropeanStarling_2.JPG"),
				new BirdPhoto ("Pine Siskin", "PineSiskin_1.JPG"),
				new BirdPhoto ("Pine Siskin", "PineSiskin_2.JPG")
			]
		),
		new BirdingAlbum(
			"19", "Oct.", "2015", "TX", "79922",
			[ 
				new BirdPhoto ("Lesser Goldfinch", "LesserGoldfinch_1.JPG"),
				new BirdPhoto ("Lesser Goldfinch", "LesserGoldfinch_2.JPG"),
				new BirdPhoto ("Lesser Goldfinch", "LesserGoldfinch_3.JPG"),
				new BirdPhoto ("Lesser Goldfinch", "LesserGoldfinch_4.JPG"),
				new BirdPhoto ("Lesser Goldfinch", "LesserGoldfinch_5.JPG")
			]
		),
		new BirdingAlbum(
			"24", "Oct.", "2015", "TX", "79922",
			[
				new BirdPhoto ("Great-tailed Grackle", "GreatTailedGrackle.JPG")
			]
		)
	];

/** Sets each album's ".albumIndex" and each photo's ".birdPhotoAlbumIndex" upon creation of the albums. **/

	for (albumIndex in allBirdAlbumsArray){
		allBirdAlbumsArray[albumIndex].albumIndex = albumIndex;
		for (photoIndex in allBirdAlbumsArray[albumIndex].albumPhotos){
			allBirdAlbumsArray[albumIndex].albumPhotos[photoIndex].birdPhotoAlbumIndex = albumIndex;
		}
	}

/** Adds and sorts all sighted species **/

	// Gathers all names of species, but only each one.
	// Loops through all birding albums.
	for (albumIndex in allBirdAlbumsArray){
		// Loops through all photos in birding albums.
		for (photoIndex in allBirdAlbumsArray[albumIndex].albumPhotos){
			// Initial "i" variable to either be 0 to add species, or anything greater to not add species.
			var i = 0;
			// Loops through all names in "sightedSpecies".
			for (species in sightedSpecies){
				// Checks if species has already been added to "sightedSpecies".
				// If it has, i gets 1 added, making it greater than 0, so the following "if" statement does not run.
				if (allBirdAlbumsArray[albumIndex].albumPhotos[photoIndex].birdName == sightedSpecies[species]){
					i++;
				}
			}
			// Adds bird name to "sightedSpecies".
			if (i == 0){
				sightedSpecies.push(allBirdAlbumsArray[albumIndex].albumPhotos[photoIndex].birdName);
			}
		}
	}
	// Sorts species list alphabetically.
	sightedSpecies.sort();

	
	// Adds total albums to "Albums" nav bar button.
	document.getElementById("speciesButton").innerHTML = "Species (" + sightedSpecies.length + ")";
	// Adds total species to "Species" nav bar button.
	document.getElementById("albumsButton").innerHTML = "Albums (" + allBirdAlbumsArray.length + ")";

/** Creates an HTML string to be put into the main page, populated by all of the bird albums, to start. **/

	function createBirdAlbums(){

		var bA = "";

		for (albumIndex in allBirdAlbumsArray){
			bA += "<div class='birdAlbums' onclick='allBirdAlbumsArray[" + albumIndex + "].openBirdAlbum()'>";
				bA += "<img src='" + allBirdAlbumsArray[albumIndex].albumPhotos[0].birdPhotoIcon + "' />";
				bA += "<div class='birdAlbumTitleOverlays'>"
					bA += "<p>" + allBirdAlbumsArray[albumIndex].albumTitle + "</p>";
				bA += "</div>";
			bA += "</div>";
		}

		return bA;
	}

/** Creates an HTML string to be put into the main page, populated by all of the bird species, when "Species" in nav bar is clicked. **/

	function createBirdSpecies(){
		
		// Variable to store HTML string of sighted species.
		var bS = "";

		// Loops through each index in "sightedSpecies".
		for (species in sightedSpecies){
			// Loops through each album.
			var i = 0;
			for (albumIndex in allBirdAlbumsArray){
				// Loops through each photo in album.
				for (photoIndex in allBirdAlbumsArray[albumIndex].albumPhotos){
					if (i == 0){
						// Checks to see if indexed name in "sightedSpecies" matches the "birdName" in each photo.
						if (sightedSpecies[species] == allBirdAlbumsArray[albumIndex].albumPhotos[photoIndex].birdName){
							bS += "<div class='birdAlbums' onclick='openBirdSpecies(this)'>";
								bS += "<img src='" + allBirdAlbumsArray[albumIndex].albumPhotos[photoIndex].birdPhotoIcon + "' />";
								bS += "<div class='birdAlbumTitleOverlays'>"
									bS += "<p>" + allBirdAlbumsArray[albumIndex].albumPhotos[photoIndex].birdName + "</p>";
								bS += "</div>";
							bS += "</div>";
							i++;
						}
					}
				}
			}
		}
			return bS;
	}

/** Opens bird Species group **/

	function openBirdSpecies(clicked){

		var openedBirdSpecies = "<div class='openedBirdAlbumHeaders'>";
					openedBirdSpecies += "<div class='backButtonContainers'>";
						openedBirdSpecies += "<p class='backButtons' onclick='backButtonAlbum(this)'>Back<p>";
					openedBirdSpecies += "</div>";
					openedBirdSpecies += "<div class='openedBirdAlbumTitle'>"
						openedBirdSpecies += "<p>" + clicked.children[1].children[0].innerHTML + "</p>";
					openedBirdSpecies += "</div>";
				openedBirdSpecies += "</div>";

				openedBirdSpecies += "<div id='openedBirdAlbum'>";
					// Loops through all birding albums.
					for (albumIndex in allBirdAlbumsArray){
						// Loops through all photos in birding albums.
						for (photoIndex in allBirdAlbumsArray[albumIndex].albumPhotos){
							if(clicked.children[1].children[0].innerHTML == allBirdAlbumsArray[albumIndex].albumPhotos[photoIndex].birdName){
								openedBirdSpecies += allBirdAlbumsArray[albumIndex].albumPhotos[photoIndex].loadBirdPhotoSpeciesIcon(albumIndex, photoIndex);
							}
						}
					}
				openedBirdSpecies += "</div>";

			document.getElementById("openedAlbumPage").innerHTML = openedBirdSpecies;
			document.getElementById("openedAlbumPage").style.display = "block";
			document.getElementById("openedAlbumPage").style.opacity = "1";
			document.getElementById("allBirdAlbumsContainer").style.display = "none";
	}

/** Loads all bird albums to "allBirdAlbumsContainer" div, as initial page setup, starting on the "Albums" page **/

	function loadBirdAlbums(){
		resetBackgroundNavBarColor();
		document.getElementById('albumsButton').style.backgroundColor = "rgba(113,106,64,1)";
		document.getElementById('allBirdAlbumsContainer').innerHTML = createBirdAlbums();
	}

/** Back Button for Headers in Album **/

	function backButtonAlbum(currentlyOpenedItem){
		currentlyOpenedItem.parentElement.parentElement.parentElement.style.opacity = "0";
		currentlyOpenedItem.parentElement.parentElement.parentElement.style.display = "none";
		currentlyOpenedItem.parentElement.parentElement.parentElement.innerHTML = "";
		document.getElementById("allBirdAlbumsContainer").style.display = "block";
	}

/** Back Button for Headers in Opened Photos **/

	function backButtonPhoto(currentlyOpenedItem){
		currentlyOpenedItem.parentElement.parentElement.parentElement.style.opacity = "0";
		currentlyOpenedItem.parentElement.parentElement.parentElement.style.display = "none";
		currentlyOpenedItem.parentElement.parentElement.parentElement.innerHTML = "";
	}

/** Reset background colors for navigation bar. **/

	function resetBackgroundNavBarColor(){
		for (child = 0; child < document.getElementById('navBar').children.length; child++){
			document.getElementById('navBar').children[child].style.backgroundColor = "rgba(133,126,84,1)";
		}
	}

/** Loads all bird species to "allBirdAlbumsContainer" div. **/

	function loadAllSpecies(){
		resetBackgroundNavBarColor();
		document.getElementById('speciesButton').style.backgroundColor = "rgba(113,106,64,1)";
		document.getElementById('allBirdAlbumsContainer').innerHTML = createBirdSpecies();
	}



/** Sets it all in motion, beginning with "Albums" page. **/

	loadBirdAlbums();




















