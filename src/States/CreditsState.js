ESCAPE.STATE.Credits = function(){};

ESCAPE.STATE.Credits.prototype.init = function() {

};

ESCAPE.STATE.Credits.prototype.preload = function() {

};

ESCAPE.STATE.Credits.prototype.create = function() {
    game.background = game.add.sprite(0, 0, 'credits-screen');
    game.menuButton = game.add.button(game.camera.width /2, game.camera.height *4/5, 'menu-button', this.backToMenu, this);
    game.menuButton.anchor.setTo(0.5, 0.5);
};

ESCAPE.STATE.Credits.prototype.update = function() {

};

ESCAPE.STATE.Credits.prototype.render = function() {

};

ESCAPE.STATE.Credits.prototype.shutdown = function() {

};

ESCAPE.STATE.Credits.prototype.backToMenu = function() {
    game.state.start('Menu');
};