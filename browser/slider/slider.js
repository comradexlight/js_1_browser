'use strict';

const allImg = [
	"i/airmax.png",
	"i/airmax-jump.png", 
	"i/airmax-on-foot.png",
	"i/airmax-playground.png",
	"i/airmax-top-view.png",
	]

let counter = 1;


let element = document.getElementById("slider");

setInterval(function() {
	element.outerHTML = '<img src="'+allImg[counter]+'" alt="" id="slider">';
	element = document.getElementById("slider");
	console.log(allImg[counter]);
	counter++;


	if (counter == allImg.length) {
		counter = 0;
	}

	}, 5000)