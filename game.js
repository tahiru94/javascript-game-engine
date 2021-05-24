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

    const canvas = document.querySelector('#game-layer');
    const context = canvas.getContext('2d');

    // Fill the canvas
    context.fillStyle = 'grey';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Add the player entity
    const player = new Player(100, 175);
    player.draw(context);
}());