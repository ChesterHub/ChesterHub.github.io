// initialisation stuff here
var mainDiv = $('.main-div');
var mainBody = $('.main-body')
var headerName = $(".header-name");

$(document).ready(function() {
	changeTrollOccupationText();
	setInterval(changeTrollOccupationText, 7000);
});

// ---show/hide header depending on scroll
function scrollcheckHeaderName(){
	if (mainBody.scrollTop() > 400) {
		headerName.css('display', 'initial');
	} else {
		headerName.css('display', 'none');
	}
}
var scrollCheckName = _.debounce(scrollcheckHeaderName, 50);

mainBody.on("scroll", scrollCheckName);

// --- Front text occupation changer
var trollOccupations = [
	"Iron Chef",
	"Dragon Born",
	"MI6 Secret Agent",
	"Ghostbuster",
	"Pokémaster",
	"Wine Connoisseur",
	"Light Heavyweight Champion",
	"Multi-Platinum Rapper",
	"Level 59 Rogue",
	"Space Cowboy",
	"Caribbean Pirate",
	"Sith Lord",
	"Starship Commander",
	"Ultimate Werewolf",
	"Oil Driller Astronaut",
	"Guardian of the Galaxy"
];
var occupationText = $("#occ");

function changeTrollOccupationText(){
	var trollOcc = trollOccupations[Math.floor(Math.random() * trollOccupations.length)];
	if (occupationText.text() !== trollOcc) {
		occupationText.fadeOut("swing", function(){
			occupationText.text(trollOcc);
			occupationText.fadeIn();
		});
	}
}

//  ---------------CLOSE DRAWER ON CLICK-------------
document.querySelector('.mdl-layout__drawer').addEventListener('click', function () {
  document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
  this.classList.remove('is-visible');
}, false);

//--------- PROJECT PORTFOLIO EVENT LISTENERS --------------
var projectOne = document.querySelector('#project-one');
var dialogOne = document.querySelector('#dialog-one');
if (! dialogOne.showModal) {
	dialogPolyfill.registerDialog(dialogOne);
}
projectOne.addEventListener('click', function() {
	dialogOne.showModal();
});
dialogOne.querySelector('.close').addEventListener('click', function() {
	dialogOne.close();
});

var projectTwo = document.querySelector('#project-two');
var dialogTwo = document.querySelector('#dialog-two');
if (! dialogTwo.showModal) {
	dialogPolyfill.registerDialog(dialogTwo);
}
projectTwo.addEventListener('click', function() {
	dialogTwo.showModal();
});
dialogTwo.querySelector('.close').addEventListener('click', function() {
	dialogTwo.close();
});

var projectThree = document.querySelector('#project-three');
var dialogThree = document.querySelector('#dialog-three');
if (! dialogThree.showModal) {
	dialogPolyfill.registerDialog(dialogThree);
}
projectThree.addEventListener('click', function() {
	dialogThree.showModal();
});
dialogThree.querySelector('.close').addEventListener('click', function() {
	dialogThree.close();
});

var projectFour = document.querySelector('#project-four');
var dialogFour = document.querySelector('#dialog-four');
if (! dialogFour.showModal) {
	dialogPolyfill.registerDialog(dialogFour);
}
projectFour.addEventListener('click', function() {
	dialogFour.showModal();
});
dialogFour.querySelector('.close').addEventListener('click', function() {
	dialogFour.close();
});

var projectFive = document.querySelector('#project-five');
var dialogFive = document.querySelector('#dialog-five');
if (! dialogFive.showModal) {
	dialogPolyfill.registerDialog(dialogFive);
}
projectFive.addEventListener('click', function() {
	dialogFive.showModal();
});
dialogFive.querySelector('.close').addEventListener('click', function() {
	dialogFive.close();
});

var projectSix = document.querySelector('#project-six');
var dialogSix = document.querySelector('#dialog-six');
if (! dialogSix.showModal) {
	dialogPolyfill.registerDialog(dialogSix);
}
projectSix.addEventListener('click', function() {
	dialogSix.showModal();
});
dialogSix.querySelector('.close').addEventListener('click', function() {
	dialogSix.close();
});

// ----- Buttons -----
// document.querySelector("#down-arrow").onclick = function () {
// 	document.querySelector('#about').scrollIntoView({ 
// 		behavior: 'smooth' 
// 	});
// };

document.querySelector("#linkedin").onclick = function () {
	window.open("https://www.linkedin.com/in/chesterlhoang")
};

document.querySelector("#github").onclick = function () {
	window.open("https://www.github.com/chesterhub")
};

document.querySelector("#email").onclick = function () {
	window.open("mailto:ChesterLHoang@gmail.com")
};