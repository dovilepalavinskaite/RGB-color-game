var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

// EASY AND HARD LEVEL 

for (var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
}

function reset (){
	colors = generateRandomColors(numSquares);
	messageDisplay.textContent = "Hey, guess the color!";
// pick a new random color from array
	pickedColor = pickColor();
	resetButton.textContent = "New colors";
// change colors of square
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

// New colors button

resetButton.addEventListener("click", function(){
	reset();
});

// SETTING COLOR TO EACH SQUARE 

for (var i = 0; i<squares.length; i++){
// add initial codes to squares
	squares[i].style.backgroundColor = colors[i];
// add click listeners to squares
	squares[i].addEventListener("click", function(){
// grab color from picked square
	var clickedColor = this.style.backgroundColor;
//compare color to picked color
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Corect!";
		resetButton.textContent = "Play Again?";
		changeColor(clickedColor);
		h1.style.backgroundColor = clickedColor;
	} else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again!";
	}
	});
}

//COLOR CHANGES WHEN CHOSEN COLOR IS PICKED
function changeColor (color){
	for (var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

// Select the color

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//Generate Random colors

function generateRandomColors(num){
// make an empty array
	var arr = [];
//add num random colors to array
	for (var i = 0; i<num; i++){
//get random color and push it to arr
		arr.push(randomColor());
	}
	return arr;

}


function randomColor (){
// pic a red, green, blue from 0 to 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g + ", " + b +")";
}


