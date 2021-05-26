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

    const physics = (function () {
        function _update() {
            let entities = game.entities(); // TODO: Implement

            for (let i = 0; i < entities.length; i += 1) {
                entities[i].y = entities[i].direction;
            }
        }

        return {
            update: _update
        }
    })();

    const game = (function () {
        let _gameFieldHeight = 200;
        let _entities = [];

        function _start() {
            _entities.push(new Player(100, 175));
            _entities.push(new Enemy(20, 25));
            _entities.push(new Enemy(80, 25));
            _entities.push(new Enemy(160, 25));

            window.requestAnimationFrame(this.update.bind(this));
        }

        function _update() {
            physics.update();

            for (let i = 0; i < _entities.length; i += 1) {
                _entities[i].update();
            }

            renderer.render();

            window.requestAnimationFrame(this.update.bind(this));
        }

        return {
            start: _start,
            update: _update,
            entities: function () {
                return _entities;
            },
            gameFieldHeight: function () {
                return _gameFieldHeight;
            }
        };
    })();

    game.start();
}());