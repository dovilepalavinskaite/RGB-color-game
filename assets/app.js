var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var easyBtn = document.getElementById("easyBtn");

colorDisplay.textContent = pickedColor;

// EASY AND HARD LEVEL 

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

// New colors button

resetButton.addEventListener("click", function(){
// generate new colors
	colors = generateRandomColors(numSquares);
// pick a new random color from array
	pickedColor = pickColor();
// change colors of square
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
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

//COLOR CHANGES WHEN CHOSEN COLER IS PICKED
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


