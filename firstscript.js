let obj = document.getElementsById('outputControl');



let settings = {
	"font-size" : "5vmin" , "font-color" : "white"
}

let jsonObject = {
	"title" : "Resident Evil 4", "Genre" : "Action-Horror", "year" : "2005",
	"characters" : ["Leon","Ashley", "Luis", "Salazar"],
	"color" : "darkblue",
	"img" : "re4.JPG"
}

let jsonObject2 = {
	"title" : "Breath of The Wild", "Genre" : "Open World + Puzzle", 
	"year" : "2017",
	"characters" : ["Link","Zelda"]
	"color" : "lightblue",
	"img" : "zelda.JPG"
}

let jsonObject3 = {
	"title" : "Persona 5", "Genre" : "JRPG", 
	"year" : "2016",
	"characters" : ["Joker","Morgana","Ryuji","Ann","There's a lot of characters"]
	"color" : "red",
	"img" : "p5.JPG"
}

createObject(jsonObject,settings);

function createObject(jsonObj,settings){
	let newContentElement = document.createElement("DIV");
	newContentElement.style.backgroundColor = jsonObj["color"];

	let newContentHeader = document.createElement("h1");
	newContentHeader.innerText = jsonObj["title"];
	newContentHeader.style.fontSize = settings["font-size"];
	newContentHeader.style.fontColor = settings["font-color"];
	newContentElement.appendChild(newContentHeader);

	let newContentImg = document.createElement("IMG");
	newContentImg.src = jsonObj["img"];
	newContentElement.appendChild(newContentImg);

	let newContentChar = document.createElement("UL");
	newContentElement.appendChild(newContentChar);
	
	for (let i = 0; i < jsonObj["characters"].length; i++){
		var start = jsonObj["characters"][i];
		var nextChar = document.createElement("LI");
		nextChar.innerText = start;
		newContentChar.appendChild(nextChar);
	}

	console.log(jsonObj["title"])

	obj.appendChild(newContentElement);
}