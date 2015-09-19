ESCAPE.STATE.Menu = function () {};

ESCAPE.STATE.Menu.prototype.init = function() {
    
};

ESCAPE.STATE.Menu.prototype.preload = function() {
    
};

ESCAPE.STATE.Menu.prototype.create = function() {
    game.background = game.add.sprite(0, 0, 'menu-background');
    game.menuTitle  = game.add.sprite(game.camera.width / 2, game.camera.height / 2 , 'menu-title');

    game.playButton         = game.add.button(game.camera.width / 4, game.camera.height *4 / 5, 'play-button', this.loadLobbyScreen, this);
    game.howToPlayButton    = game.add.button(game.camera.width / 2, game.camera.height *4 / 5, 'how-to-play-button', this.loadHowToPlayScreen, this);
    game.creditsButton      = game.add.button(game.camera.width *3 / 4, game.camera.height *4 / 5, 'credits-button', this.loadCreditsScreen, this);
    
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

ESCAPE.STATE.Menu.prototype.loadHowToPlayScreen = function() {
    game.state.start('HowToPlay')
};

ESCAPE.STATE.Menu.prototype.loadCreditsScreen = function() {
    game.state.start('Credits');
};

ESCAPE.STATE.Menu.prototype.loadLobbyScreen = function() {
    game.state.start('LevelOne');
};