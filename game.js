(function () {
    console.log('initializing canvas');

    function Player(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.direction = -1;
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

    Enemy.prototype.update = function (canvas) {
        this.y = this.y + this.direction;
        if (this.y <= 0 || (this.y + this.height >= canvas.height)) {
            this.direction *= -1;
        }
    }

    const renderer = (function () {
        function _drawEnemy(context, enemy) {
            context.fillStyle = 'red';
            context.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
        }

        function _drawPlayer(context, player) {
            context.fillStyle = 'blue';
            context.fillRect(player.x, player.y, player.width, player.height);
        }

        function _render() {
            canvas = document.querySelector('#game-layer');
            context = canvas.getContext('2d');
            context.fillStyle = 'grey';
            context.fillRect(0, 0, canvas.width, canvas.height);

            let entity;
            let entities = game.entities(); // TODO: Implement

            for (let i = 0; i < entities.length; i += 1) {
                entity = entities[i];

                if (entity instanceof Enemy) {
                    _drawEnemy(context, entity);
                } else {
                    _drawPlayer(context, entity);
                }
            }
        }

        return {
            render: _render
        };
    })();
}());