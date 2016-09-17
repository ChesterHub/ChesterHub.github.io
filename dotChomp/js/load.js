var loadState = {
	preload: function(){
		var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});
		game.load.image('background', 'dotChomp/assets/2d_background.jpg');
		game.load.image('mushroom', 'dotChomp/assets/Mushroom.png');
		game.load.image('hunter', 'dotChomp/assets/hunterhead.png');
		game.load.image('seba', 'dotChomp/assets/sebaHead.jpg');
		game.load.image('background2', 'dotChomp/assets/trees.png');
		game.load.image('menuBackground', 'dotChomp/assets/green_background.jpg');
	},


	create: function() {
		game.state.start('menu');
	}
}