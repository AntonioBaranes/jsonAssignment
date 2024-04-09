

let obj = document.getElementById('outputControl');

let settings = {
	"font-size" : "5vmin" , "font-color" : "white",
	"img-width" : "15vw"
}

let jsonObject = {
	"title" : "Resident Evil 4", "Genre" : "Action-Horror", "year" : "2005",
	"characters" : ["Leon","Ashley", "Luis", "Salazar"],
	"color" : "darkblue",
	"img" : "re4.jpg",
	"genre" : "Action + Survival Horror",
	"reason" : "The GOAT! Super revolutionary and also stands up to the test of time! It's also unironically one of the funniest games I've ever played and the memes are excellent. Also really love the remake and if I'd have to pick one to play it goes back and forth but we'll give it to the classic because it's just so iconic!"
}

let jsonObject2 = {
	"title" : "Breath of The Wild", "Genre" : "Open World + Puzzle", 
	"year" : "2017",
	"characters" : ["Link","Zelda"],
	"color" : "blue",
	"img" : "zelda.jpg",
	"genre" : "Open World + Puzzle",
	"reason" : "Quarentine. This game was my life in 2020 and I've continued to play on and off until the sequel came out last year... wait its already been almost a year... fuck man."

}

let jsonObject3 = {
	"title" : "Persona 5", "Genre" : "JRPG", 
	"year" : "2016",
	"characters" : ["Joker","Morgana","Ryuji","Ann"],
	"color" : "red",
	"img" : "p5.jpg",
	"genre" : "JRPG + Social Sim",
	"reason" : "Compleling Story and most fun gameplay I've encountered in an RPG"

}

createObject(jsonObject,settings);
createObject(jsonObject2,settings);
createObject(jsonObject3,settings);

function createObject(jsonObj,settings){
	let newContentElement = document.createElement("DIV");
	newContentElement.style.backgroundColor = jsonObj["color"];
	newContentElement.style.color = settings["font-color"];
	newContentElement.style.fontSize = settings["font-size"];
	newContentElement.classList.add("organizer");

	let newContentHeader = document.createElement("h1");
	newContentHeader.innerText = jsonObj["title"];
	newContentHeader.style.fontSize = settings["font-size"];
	newContentHeader.style.fontColor = settings["font-color"];
	newContentElement.appendChild(newContentHeader);

	let newContentImg = document.createElement("IMG");
	newContentImg.src = jsonObj["img"];
	newContentImg.style.width = settings["img-width"];
	newContentElement.appendChild(newContentImg);



	let newContentHeader3 = document.createElement("h1");
	newContentHeader3.innerText = "Genres";
	newContentHeader3.style.fontSize = settings["font-size"];
	newContentHeader3.style.fontColor = settings["font-color"];
	newContentHeader3.style.marginBottom = "-2vh";
	newContentElement.appendChild(newContentHeader3);

	let newContentGenre = document.createElement("p");
	newContentGenre.innerText = jsonObj["genre"];
	newContentGenre.style.fontSize = settings["font-size"];
	newContentGenre.style.fontColor = settings["font-color"];
	newContentGenre.style.marginBottom = "-1vh";
	newContentElement.appendChild(newContentGenre);

	let newContentHeader2 = document.createElement("h1");
	newContentHeader2.innerText = "Characters";
	newContentHeader2.style.fontSize = settings["font-size"];
	newContentHeader2.style.fontColor = settings["font-color"];
	newContentHeader2.style.marginBottom = "-2vh";
	newContentElement.appendChild(newContentHeader2);


	let newContentChar = document.createElement("UL");
	newContentElement.appendChild(newContentChar);
	
	for (let i = 0; i < jsonObj["characters"].length; i++){
		var start = jsonObj["characters"][i];
		var nextChar = document.createElement("LI");
		nextChar.innerText = start;
		newContentChar.appendChild(nextChar);
	}

	let newContentHeader4 = document.createElement("h1");
	newContentHeader4.innerText = "Reasons";
	newContentHeader4.style.fontSize = settings["font-size"];
	newContentHeader4.style.fontColor = settings["font-color"];
	newContentHeader4.style.marginBottom = "-2vh";
	newContentElement.appendChild(newContentHeader4);

	let newContentReason = document.createElement("p");
	newContentReason.innerText = jsonObj["reason"];
	newContentReason.style.fontColor = settings["font-color"];
	newContentReason.classList.add("center");

	newContentReason.style.marginBottom = "-1vh";
	newContentElement.appendChild(newContentReason);

	console.log(jsonObj["title"])

	obj.appendChild(newContentElement);
}