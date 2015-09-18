ESCAPE.STATE.Menu = function () {};

ESCAPE.STATE.Menu.prototype.init = function() {
    
};

ESCAPE.STATE.Menu.prototype.preload = function() {
    
};

ESCAPE.STATE.Menu.prototype.create = function() {
    game.background = game.add.sprite(0, 0, 'menu-background');
    game.menuTitle  = game.add.sprite(game.camera.width / 2, 200 , 'menu-title');

    game.playButton         = game.add.button(game.camera.width / 4, 350, 'play-button');
    game.howToPlayButton    = game.add.button(game.camera.width / 2, 350, 'how-to-play-button', this.loadHowToPlay, this);
    game.creditsButton      = game.add.button(game.camera.width*3 / 4, 350, 'credits-button');
    
    game.menuTitle.anchor.setTo(0.5, 0.5);
    game.playButton.anchor.setTo(0.5, 0.5);
    game.howToPlayButton.anchor.setTo(0.5, 0.5);
    game.creditsButton.anchor.setTo(0.5, 0.5);
};

ESCAPE.STATE.Menu.prototype.update = function() {
    
};

ESCAPE.STATE.Menu.prototype.render = function() {
    
};

ESCAPE.STATE.Menu.prototype.shutdown = function() {
    
};

ESCAPE.STATE.Menu.prototype.loadHowToPlay = function() {
    game.state.start('HowToPlay')
};