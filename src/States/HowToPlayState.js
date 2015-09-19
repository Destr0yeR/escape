ESCAPE.STATE.HowToPlay = function(){};

ESCAPE.STATE.HowToPlay.prototype.init = function() {
    
};

ESCAPE.STATE.HowToPlay.prototype.preload = function() {
    
};

ESCAPE.STATE.HowToPlay.prototype.create = function() {
    game.background = game.add.sprite(0, 0, 'how-to-play-screen');
    game.menuButton = game.add.button(game.camera.width /2, game.camera.height *4/5, 'menu-button', this.backToMenu, this);
    game.menuButton.anchor.setTo(0.5, 0.5);
};

ESCAPE.STATE.HowToPlay.prototype.update = function() {
    
};

ESCAPE.STATE.HowToPlay.prototype.render = function() {
    
};

ESCAPE.STATE.HowToPlay.prototype.shutdown = function() {
    
};

ESCAPE.STATE.HowToPlay.prototype.backToMenu = function() {
    game.state.start('Menu');
};