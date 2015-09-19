ESCAPE.STATE.LEVEL.LevelOne = function () {};

ESCAPE.STATE.LEVEL.LevelOne.prototype.init = function() {

};

ESCAPE.STATE.LEVEL.LevelOne.prototype.preload = function() {

};

ESCAPE.STATE.LEVEL.LevelOne.prototype.create = function() {
    game.map = game.add.tilemap('level');
    game.map.addTilesetImage('gridtiles', 'tiles');

    game.layer = game.map.createLayer('testLayer');
    game.mapConfig = game.cache.getJSON('config');
    game.layer.resizeWorld();

    game.player = game.add.sprite(game.mapConfig.player.start.x, game.mapConfig.player.start.y, 'player');
    game.player.scale.setTo(1.5, 1.5);
    game.player.anchor.set(0.5);
    game.physics.arcade.enable(game.player);
    game.player.body.collideWorldBounds = true;

    game.collisionTiles = game.mapConfig.colission_tiles;

    
    game.map.setCollision(game.collisionTiles);

    game.cursors = game.input.keyboard.createCursorKeys();
    game.camera.follow(game.player);
};

ESCAPE.STATE.LEVEL.LevelOne.prototype.update = function() {
    game.physics.arcade.collide(game.player, game.layer);
    game.player.body.velocity.x = 0;
    game.player.body.velocity.y = 0;

    if(game.cursors.up.isDown){
        game.player.body.velocity.y = -150;
    }
    else if(game.cursors.down.isDown){
        game.player.body.velocity.y = 150;
    }

    if(game.cursors.left.isDown){
        game.player.body.velocity.x = -150;
    }
    else if(game.cursors.right.isDown){
        game.player.body.velocity.x = 150;
    }
};

ESCAPE.STATE.LEVEL.LevelOne.prototype.render = function() {
    if(ESCAPE.CONFIG.DEBUG){
        game.debug.body(game.player);
    }
};

ESCAPE.STATE.LEVEL.LevelOne.prototype.shutdown = function() {

};