(function () {
    console.log('initializing canvas');

    function Player(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
    }

    Player.prototype.draw = function (canvasContext) {
        canvasContext.fillStyle = 'blue';
        canvasContext.fillRect(this.x, this.y, this.width, this.height);
    }

    function Enemy(x, y) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
    }

    Enemy.prototype.draw = function (canvasContext) {
        canvasContext.fillStyle = "red";
        canvasContext.fillRect(this.x, this.y, this.width, this.height);
    };

    const canvas = document.querySelector('#game-layer');
    const context = canvas.getContext('2d');

    // Fill the canvas
    context.fillStyle = 'grey';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Add the player entity
    const player = new Player(100, 175);
    player.draw(context);

    // Add enemy entities
    const enemy1 = new Enemy(20, 25);
    const enemy2 = new Enemy(80, 25);
    const enemy3 = new Enemy(160, 25);
    enemy1.draw(context);
    enemy2.draw(context);
    enemy3.draw(context);
}());