(function () {
    console.log('initializing canvas');

    function Player(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.direction = -1;
    }

    Player.prototype.draw = function (context) {
        context.fillStyle = 'blue';
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    Player.prototype.update = function (canvas) {
        this.y = this.y + this.direction;
        if (this.y <= 0 || (this.y + this.height >= canvas.height)) {
            this.direction *= -1;
        }
    }

    function Enemy(x, y) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.direction = 1;
    }

    Enemy.prototype.draw = function (canvasContext) {
        canvasContext.fillStyle = "red";
        canvasContext.fillRect(this.x, this.y, this.width, this.height);
    };

    Enemy.prototype.update = function (canvas) {
        this.y = this.y + this.direction;
        if (this.y <= 0 || (this.y + this.height >= canvas.height)) {
            this.direction *= -1;
        }
    }

    let canvas = document.querySelector('#game-layer');
    let context = canvas.getContext('2d');

    // Fill the canvas
    context.fillStyle = 'grey';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Add the player entity
    const player = new Player(100, 175);

    // Add enemy entities
    const enemy1 = new Enemy(20, 25);
    const enemy2 = new Enemy(80, 25);
    const enemy3 = new Enemy(160, 25);

    function frameUpdate() {
        canvas = document.querySelector('#game-layer');
        context = canvas.getContext('2d');

        // Fill the canvas
        context.fillStyle = 'grey';
        context.fillRect(0, 0, canvas.width, canvas.height);

        player.update(canvas);
        player.draw(context);

        enemy1.update(canvas);
        enemy1.draw(context);

        enemy2.update(canvas);
        enemy2.draw(context);

        enemy3.update(canvas);
        enemy3.draw(context);

        window.requestAnimationFrame(frameUpdate);
    }

    frameUpdate();
}());