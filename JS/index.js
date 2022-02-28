//Drop-down Icons
var nav_left_a = document.querySelector(".nav-left a");
var drop_down = document.querySelector(".drop-down");
var img_1 = document.querySelector(".img-1");
var img_2 = document.querySelector(".img-2");
var img_3 = document.querySelector(".img-3");

/*var images = [img_1, img_2, img_3];*/

drop_down.style.display = "none";

/*function icon_delay (num) {
	images[num].style.display= "inline";
}

function icon_delete () {
	for(var i = 0; i < images.length; i++){
		images[i].style.display= "none";
	}
}*/

function click () {
	if (drop_down.style.display == "none"){
		drop_down.style.display = "flex";
		
		/*for(var i = 0; i < images.length; i++){
			setTimeout(icon_delay, 4000 , i);
		}*/
	} else {
		drop_down.style.display = "none";
	}
}
nav_left_a.addEventListener("click", click);




//Typing Animation

// List of sentences
var _CONTENT = [   
	"a Developer", 
	"Detail Oriented",
	"a Student",
	"a Problem Solver",
	"Passionate about tech"
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
	if(text === "") {
		clearInterval(_INTERVAL_VAL);
		clearInterval(_INTERVAL_BLINK);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;
		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 150);
		}, 500);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 150);


//Collapsible Block	
var hidden_contents = document.querySelectorAll(".hidden-content");
var Collapsibles = document.querySelectorAll(".collapsible");
var hidden_ps = document.querySelectorAll(".expand_text_inline");
var hidden_texts = document.querySelectorAll(".hidden-text");

//hidden_p.style.display = "inline";

function hide_content () {
	if (hidden_contents[0].style.display == null || hidden_contents[0].style.display == "none" ){
		hidden_contents[0].style.display = "flex";
		hidden_ps[0].style.display = "none";
		hidden_texts[0].style.display = "inline";

	  } else {
		hidden_contents[0].style.display = "none";
		hidden_ps[0].style.display = "inline";
		hidden_texts[0].style.display = "none";
	  }
}

function hide_content2 () {
	if (hidden_contents[1].style.display == null || hidden_contents[1].style.display == "none" ){
		hidden_contents[1].style.display = "flex";
		hidden_ps[1].style.display = "none";
		hidden_texts[1].style.display = "inline";

	  } else {
		hidden_contents[1].style.display = "none";
		hidden_ps[1].style.display = "inline";
		hidden_texts[1].style.display = "none";
	  }
}

Collapsibles[0].addEventListener("click", hide_content);
Collapsibles[1].addEventListener("click", hide_content2);





