Player = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'player');
};

Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;