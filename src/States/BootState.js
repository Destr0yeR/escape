ESCAPE.STATE.Boot = function(){};

ESCAPE.STATE.Boot.prototype.init = function() {
    if(ESCAPE.CONFIG.DEBUG){
        game.add.plugin(Phaser.Plugin.Debug);
    }
    game.physics.startSystem(Phaser.Physics.ARCADE);
};

ESCAPE.STATE.Boot.prototype.preload = function() {
    game.load.image('loader-background', 'assets/background.jpg');
    game.load.image('loader-title', 'assets/loader/loader-title.png');
    game.load.image('loadingBar', 'assets/loader/loader-bar.png');
};

ESCAPE.STATE.Boot.prototype.create = function() {
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
