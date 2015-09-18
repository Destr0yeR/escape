ESCAPE.STATE.Boot = function(){};

ESCAPE.STATE.Boot.prototype.init = function() {
	if(ESCAPE.CONFIG.DEBUG){
		game.add.plugin(Phaser.Plugin.Debug);
	}
};

ESCAPE.STATE.Boot.prototype.preload = function() {
	game.load.image('loader-background', 'assets/background.jpg');
	game.load.image('loader-title', 'assets/loader/loader-title.png');
	game.load.image('loadingBar', 'assets/loader/loader-bar.png');
	console.log('preload boot');
};

ESCAPE.STATE.Boot.prototype.create = function() {
	console.log('create boot');
	this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = true;
	game.state.start('Preloader', true, false);
};

ESCAPE.STATE.Boot.prototype.update = function() {
	
};

ESCAPE.STATE.Boot.prototype.render = function() {
	
};

ESCAPE.STATE.Boot.prototype.shutdown = function() {
	
};
