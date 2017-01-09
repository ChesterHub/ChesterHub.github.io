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




