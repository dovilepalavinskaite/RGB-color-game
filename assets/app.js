var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor;

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
	} else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again!";
	}
	});
}

