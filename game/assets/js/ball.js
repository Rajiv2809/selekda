class Ball extends Util {
    constructor(x, y, w, h, type) {
        super();
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.type = type;
        this.move = {
            x: 0,
            y: 0,
        }
        this.speed = 5;
        this.weight = 1;
        this.isFreeze = false;
    }
    update() {
        super.update();


        if (!this.isFreeze) {

            // movements
            this.x += this.move.x;
            this.y += this.move.y;

            // invisible wall
            if (this.x < 50) {
                this.x = 50;
                this.move.x = 0;
            }

            if (this.x > 910) {
                this.x = 910;
                this.move.x = 0;
            }

            // velocity
            if (this.y < 460) {
                this.move.y += this.weight;
            } else {
                this.move.y = 0;
                this.y = 460;
            }

            // handle goals
            if (this.x < 100) {
                this.reset();
                game.scores.opponent++;
            }

            if (this.x > 900) {
                this.reset();
                game.scores.player++;
            }


            // handle collision with item
            this.handleItemCollisions();
            // handle collision
            this.handleCollisions();
            this.el.style.animation = '1.6s rotate linear infinite';

        } else {
            this.el.style.animation = 'none';
            this.move.x = 0;
            this.move.y = 0;
        }

        this.changeStyle(this.el, this.x, this.y, this.w, this.h);
    }

    handleItemCollisions(){
        game.items.forEach((item, index) => {
            if (this.collision(item, this)) {
                if (item.type === 'Increase Ball') {
                    this.w += 10;
                    this.h += 10;
                }

                if (item.type === 'Decrease Ball') {
                    this.w -= 10;
                    this.h -= 10;
                }

                if(item.type === 'Diamond Ice'){
                    if (this.isFreeze === false) {
                        setTimeout(() => {
                            this.isFreeze = false;
                        }, 3000)
                    }

                    this.isFreeze = true;
                }


                item.remove();
                game.items.splice(index, 1);
            }
        })
    }
    create() {
        super.create();
        this.el = this.createEl({
            tag: 'img',
            classes: ['ball']
        });

        this.el.src = `./assets/Sprites/${this.type}.png`;

        game.el.appendChild(this.el);
    }


    handleCollisions() {
        // collision with player
        if (this.collision(game.player, this) && game.player.x < this.x) {
            this.move.x = this.speed;
            this.move.y = -this.speed * 3;
        } else if (this.collision(game.player, this) && game.player.x + game.player.w > this.x) {
            this.move.x = -this.speed;
            this.move.y = -this.speed * 3;
        } else {
            if (this.move.x < 0) {
                this.move.x += .05;
            } else {
                this.move.x -= .05;
            }
        }

        if (game.player.isKicked) {
            const newPlayerObject = Object.create(game.player);

            newPlayerObject.w += 50;

            if (this.collision(newPlayerObject, this) && newPlayerObject.x < this.x) {
                this.move.x = this.speed * 3;
            }
        }


        // collision with opponent
        if (this.collision(game.opponent, this) && game.opponent.x < this.x) {
            this.move.x = this.speed;
            this.move.y = -this.speed * 3;
        } else if (this.collision(game.opponent, this) && game.opponent.x + game.opponent.w > this.x) {
            this.move.x = -this.speed;
            this.move.y = -this.speed * 3;
        } else {
            if (this.move.x < 0) {
                this.move.x += .05;
            } else {
                this.move.x -= .05;
            }
        }

        if (game.opponent.isKicked) {
            const newPlayerObject = Object.create(game.opponent);

            newPlayerObject.x -= 50;

            if (this.collision(newPlayerObject, this) && newPlayerObject.x > this.x) {
                this.move.x = this.speed * 3;
            }
        }
    }

    reset() {
        const xPos = game.player.x + game.opponent.x;
        this.x = xPos / 2;
        this.y = 50;
        this.move.x = 0;
        this.move.y = 0;
    }
}