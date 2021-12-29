// js
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove",(e) => {
	//console.log("asdf");
	document.getElementById("cursor").style.left = e.pageX + 'px';
	document.getElementById("cursor").style.top =  e.pageY + 'px';
	document.getElementById("cursor2").style.left = e.pageX + 'px';
	document.getElementById("cursor2").style.top =  e.pageY + 'px';
} )
