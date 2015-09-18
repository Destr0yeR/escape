ESCAPE.STATE.Menu = function () {};

ESCAPE.STATE.Menu.prototype.init = function() {
    
};

ESCAPE.STATE.Menu.prototype.preload = function() {
    
};

ESCAPE.STATE.Menu.prototype.create = function() {
    game.background = game.add.sprite(0, 0, 'menu-background');
    game.menuTitle = game.add.sprite(game.camera.width / 2, 200 , 'menu-title');
    game.menuTitle.anchor.setTo(0.5, 0.5);
};

ESCAPE.STATE.Menu.prototype.update = function() {
    
};

ESCAPE.STATE.Menu.prototype.render = function() {
    
};

ESCAPE.STATE.Menu.prototype.shutdown = function() {
    
};