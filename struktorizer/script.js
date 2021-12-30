const input = document.getElementById('inputfile');

input.addEventListener('change', function(){fr.readAsText(input.files[0]);});

var lines;

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
		
		switch(line[0]) {
			case "block":
				element.classList.add("block");
				element.innerText = line[1];
				document.getElementById("display").appendChild(element);
				break;
			case "if":
				// code block
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