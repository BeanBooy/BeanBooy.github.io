// js
const cursor = document.getElementById("cursor");
var scrollPos = 0;

document.addEventListener("mousemove",(e) => {
	//console.log("asdf");
	document.getElementById("cursor").style.left = e.clientX + 'px';
	document.getElementById("cursor").style.top =  e.clientY + 'px';
	document.getElementById("cursor2").style.left = e.clientX + 'px';
	document.getElementById("cursor2").style.top =  e.clientY + 'px';
	
	//console.log(e.clientX + " " + e.clientY);
    
	// locate cursor with scroll
	if(e.clientY + scrollPos >= window.innerHeight) {
		
	}
});

document.addEventListener ('scroll',function () {
	scrollPos = document.body.scrollTop;
});


var tickets = 0;

var wheelRotation = [0, 0, 0];
var wheelElement = [0, 0, 0];

function spin() {
	
	var consoleOutput = "";
	
	console.log("-------------------------");
	
	for (let i = 0; i < wheelRotation.length; i++) {
		
		var elementsRolled = getRandomInt(20, 50);
			console.log(elementsRolled);
		wheelElement[i] = (wheelElement[i] + elementsRolled) % 9;
			console.log("wheel " + i + " on element " + wheelElement[i]);
		var degAdded = elementsRolled * 40;
		wheelRotation[i] += degAdded;
		document.getElementById("wheel_" + i).style.transitionDuration  = elementsRolled * 0.1 + "s";
		document.getElementById("wheel_" + i).style.transform = "rotateY(-" + wheelRotation[i] + "deg)";
	}
	
	console.log("-------------------------");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
