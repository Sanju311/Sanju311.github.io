
// List of sentences
var _CONTENT = [  
	"I'm Developer", 
	"I'm Student",
	"I'm Problem Solver",
	"I'm Detail Oriented",
	"I'm Passionate about tech"
];

// Current sentence being processed
var _PART = 0;
// Character number of the current sentence being processed 
var _PART_INDEX = 0;
// Holds the handle returned from setInterval
var _INTERVAL_VAL;
// Element that holds the text
var _ELEMENT = document.querySelector("#text");
// Cursor element 
var _CURSOR = document.querySelector("#cursor");
//cursor blink speed
const blink_speed = 530;
//handle returned from blink speed function
var _INTERVAL_BLINK;


// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	
	if (_ELEMENT.innerHTML == "I'm "){
		var text =  _ELEMENT.innerHTML.concat(_CONTENT[_PART].substring(3, _PART_INDEX + 1));
	}
	else 
		var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);

	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		//cursor Blink
		_INTERVAL_BLINK = setInterval( function () {
			_CURSOR.style.display == 'none' ? _CURSOR.style.display = 'inline-block'  : _CURSOR.style.display = 'none';
		}, blink_speed); 

		
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 75);
		}, 2000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === "I'm ") {
		clearInterval(_INTERVAL_VAL);
		clearInterval(_INTERVAL_BLINK);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 3;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 150);
		}, 500);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 150);


