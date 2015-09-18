ESCAPE.STATE.Preloader = function(){};

ESCAPE.STATE.Preloader.prototype.init = function() {

};

ESCAPE.STATE.Preloader.prototype.preload = function() {
    game.background = game.add.sprite(0, 0, 'loader-background');
    game.loadingTitle = game.add.sprite(game.camera.width / 2, 100 , 'loader-title');
    game.loadingBar = game.add.sprite(game.camera.width / 2, game.camera.height / 2, 'loadingBar');

    game.loadingTitle.anchor.setTo(0.5, 0.5);
    game.loadingBar.anchor.setTo(0.5, 0.5);

    game.load.setPreloadSprite(game.loadingBar,0);

    game.load.image('player', 'assets/characters/player.png');
    game.load.image('menu-title', 'assets/game-title.png');
};

ESCAPE.STATE.Preloader.prototype.create = function() {
    game.state.start('Menu');
};

ESCAPE.STATE.Preloader.prototype.update = function() {
    
};

ESCAPE.STATE.Preloader.prototype.render = function() {

};

ESCAPE.STATE.Preloader.prototype.shutdown = function() {

};
