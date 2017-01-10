function init() {
  // initialisation stuff here
}

init();

//--------- PROJECT PORTFOLIO EVENT LISTENERS --------------
var projectOne = document.querySelector('#project-one');
var dialogOne = document.querySelector('#dialog-one');
if (! dialogOne.showModal) {
	dialogPolyfill.registerDialog(dialog);
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
	dialogPolyfill.registerDialog(dialog);
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
	dialogPolyfill.registerDialog(dialog);
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
	dialogPolyfill.registerDialog(dialog);
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
	dialogPolyfill.registerDialog(dialog);
}
projectFive.addEventListener('click', function() {
	dialogFive.showModal();
});
dialogFive.querySelector('.close').addEventListener('click', function() {
	dialogFive.close();
});

// ----- Buttons -----
document.querySelector("#down-arrow").onclick = function () {
	document.querySelector('#about').scrollIntoView({ 
		behavior: 'smooth' 
	});
};

document.querySelector("#linkedin").onclick = function () {
	location.href = "https://www.linkedin.com/in/chesterlhoang";
};

document.querySelector("#github").onclick = function () {
	location.href = "https://www.github.com/chesterhub";
};

document.querySelector("#email").onclick = function () {
	location.href = "mailto:ChesterLHoang@gmail.com";
};

document.querySelector("#resume").onclick = function () {
	location.href = "https://drive.google.com/uc?export=download&id=0B80U73I4ZN1YQUpMaXZxTFJxaDQ";
};


// -------- Make bars move ----------
barsMoved = false;
function moveAll() {
	if (barsMoved === false) {
		barOne = document.querySelector("#bar1");
		moveBar(barOne, 97);

		barTwo = document.querySelector("#bar2");
		moveBar(barTwo, 90);

		barThree = document.querySelector("#bar3");
		moveBar(barThree, 78);

		barFour = document.querySelector("#bar4");
		moveBar(barFour, 94);

		barFive = document.querySelector("#bar5");
		moveBar(barFive, 89);

		barSix = document.querySelector("#bar6");
		moveBar(barSix, 71);

		barSeven = document.querySelector("#bar7");
		moveBar(barSeven, 92);

		barEight = document.querySelector("#bar8");
		moveBar(barEight, 85);

		barNine = document.querySelector("#bar9");
		moveBar(barNine, 67);

		barTen = document.querySelector("#bar10");
		moveBar(barTen, 90);

		barEleven = document.querySelector("#bar11");
		moveBar(barEleven, 81);

		barTwelve = document.querySelector("#bar12");
		moveBar(barTwelve, 57);

		barsMoved = true;
	}

}
function moveBar(bar, percentage) {
	var elem = bar;   
	var width = 40;
	var id = setInterval(frame, 32);
	function frame() {
		if (width >= percentage) {
			clearInterval(id);
		} else {
			width++; 
			elem.style.width = width + '%'; 
		}
	}
}






