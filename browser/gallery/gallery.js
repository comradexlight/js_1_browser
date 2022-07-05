"use strict"

const allImg = [
	"i/breuer-building.jpg",
	"i/guggenheim-museum.jpg",
	"i/headquarters.jpg",
	"i/IAC.jpg",
	"i/new-museum.jpg",
];

let counter = 0;
let element = document.getElementById("currentPhoto");
const prevPhotoButton = document.getElementById("prevPhoto");
const nextnextPhoto = document.getElementById("nextPhoto");


function nextPhoto () {
	counter++;
	if (counter === allImg.length) {
		counter = 0;
	};	
	
	element.outerHTML = '<img id="currentPhoto" src="'+allImg[counter]+'" alt="">';
	element = document.getElementById("currentPhoto");
};

function prevPhoto () {
	if (counter === 0) {
		counter = allImg.length;
	};
	
	counter--;
	element.outerHTML =  '<img id="currentPhoto" src="'+allImg[counter]+'" alt="">';
	element = document.getElementById("currentPhoto");	
	
};

nextnextPhoto.onclick = nextPhoto;
prevPhotoButton.onclick = prevPhoto;