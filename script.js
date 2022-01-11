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




var wheelRotation = [0, 0, 0];

function spin() {
	
	console.log("-------------------------");
	
	for (let i = 0; i < wheelRotation.length; i++) {
		
		var elementsRolled = getRandomInt(20, 50);
		console.log(elementsRolled);
		var onElementId = elementsRolled % 9;
		console.log("Wheel on Element " + onElementId);
		var degAdded = elementsRolled * 40;
		wheelRotation[i] += degAdded;
		document.getElementById("wheel_" + i).style.transitionDuration  = elementsRolled * 0.1 + "s";
		document.getElementById("wheel_" + i).style.transform = "rotateY(" + wheelRotation[i] + "deg)";
	}
	
	console.log("-------------------------");
}



var rotcounter = 0;
function rotate(rot) {
	
	rotcounter += rot;
	
	console.log('Rotate: ' + rotcounter + 'deg');
	
	document.getElementById("spin").style.transform = "rotateY(" + rotcounter + "deg)";
}

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}