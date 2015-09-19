ESCAPE.STATE.Preloader = function(){};

ESCAPE.STATE.Preloader.prototype.init = function() {

};

ESCAPE.STATE.Preloader.prototype.preload = function() {
    game.background = game.add.sprite(0, 0, 'loader-background');
    game.loadingTitle = game.add.sprite(game.camera.width / 2, 200 , 'loader-title');
    game.loadingBar = game.add.sprite(game.camera.width / 2, game.camera.height / 2, 'loadingBar');

    game.loadingTitle.anchor.setTo(0.5, 0.5);
    game.loadingBar.anchor.setTo(0.5, 0.5);

    game.load.setPreloadSprite(game.loadingBar,0);

    game.load.image('menu-title', 'assets/game-title.png');
    game.load.image('menu-background', 'assets/background.jpg');

    game.load.image('play-button', 'assets/buttons/play-button.png');
    game.load.image('how-to-play-button', 'assets/buttons/how-to-play-button.png');
    game.load.image('credits-button', 'assets/buttons/credits-button.png');
    game.load.image('quit-game-button', 'assets/buttons/quit-game-button.png');

    game.load.image('menu-button', 'assets/buttons/menu-button.png');
    
    game.load.image('how-to-play-screen', 'assets/background.jpg');
    game.load.image('credits-screen', 'assets/background.jpg');

    game.load.spritesheet('player', 'assets/characters/player.png', 32, 32);


    game.load.tilemap('level', 'assets/tilemaps/maps/testlevel.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/tilemaps/tiles/gridtiles.png');
    game.load.json('config', 'assets/tilemaps/config/testlevel.json');

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
