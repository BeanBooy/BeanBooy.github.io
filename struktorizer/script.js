const input = document.getElementById('inputfile');

input.addEventListener('change', function(){fr.readAsText(input.files[0]);});

var lines;
var id = 0;

var fr = new FileReader();
fr.onload = function(){
	var text = fr.result;
	lines = text.split("\n");
	
	loadStruktogram(lines);
}

function loadStruktogram(lines) {
	
	for(let i = 0; i < lines.length; i++) {
		const line = lines[i].split("#");
		
		const element = document.createElement("div");
		
		const currentId = getNewId();
		
		switch(line[0]) {
			case "block":
				element.classList.add("block");
				element.classList.add("block_" + currentId);
				
				element.innerText = line[1];
				document.getElementById("display").appendChild(element);
				break;
			case "if":
				element.classList.add("if");
				element.classList.add("if_" + currentId);
				
				const ifTrue = document.createElement("div");
				ifTrue.classList.add("ifTrue");
				ifTrue.classList.add("ifTrue_" + currentId);
				
				const ifFalse = document.createElement("div");
				ifFalse.classList.add("ifFalse");
				ifFalse.classList.add("ifFalse_" + currentId);
				
				element.innerText = line[1];
				document.getElementById("display").appendChild(element);
				document.getElementById("").appendChild(element);
				document.getElementById("display").appendChild(element);
				
				break;
			case "true":
				// code block
				break;
			case "false":
				// code block
				break;
		}
		
	}
	
}

function getNewId() {
	id = id + 1;
	return id;
}

function newFile() {
	
}