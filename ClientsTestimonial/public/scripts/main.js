var rhit = rhit || {};
var apiURL = "https://testimonialapi.toolcarton.com/api/";

// Provided funtion to create random number for API ids
function getRandomInt() {
	// create a random number between 1 and 8 - we only have 8 API messages
	min = 1;
	max = 8;
	return Math.floor(Math.random() * (max - min + 1)) + min;
} //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// TODO: Remove previous HTML content from the card text. The content should be "" 
function clearText() {
	// Your code
}

// TODO: replace period by exclamation signs, add a new line, return processed text
function processText(text){
      // Your Code
 }

   // TODO: split text by a new line, create an array of sentences, return array
function textToArray(text) {
	// Your Code
}

 // TODO: create for loop over text array. Append span tag and update code
 function appendText (textArray){
    // Your Code
		 $("p").append($(`<span style = "display:block;">YOUR CODE</span>`));
 }


function updateClient( ) {

	let id = getRandomInt() // https://developer.mozilla.org/en-US/docs/Web/API/fetch
	 
	clearText(); 
	// PART 1. First just replace card title, card text and card image with new content
	
	// PART 2. Text processing steps - processText, textToArraay, appendText

	// text = processText(text);
	
	// text = textToArray(text);

	// appendText(text);	   
  }


/* Main */
rhit.main = function () {
	console.log("Ready");
	if (document.querySelector("#updateButton")) {
		document.querySelector("#updateButton").onclick = (event) => {
		  //NOTE must complete this method
		  updateClient();
		};
	}
};

rhit.main();