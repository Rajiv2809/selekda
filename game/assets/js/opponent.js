class Opponent extends Player {
    constructor(x, y, w, h, country) {
        super();
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.country = country;
    }

    update() {
        super.update();
    }

    action() {
        const left = () => {
            if (!this.isJump) {
                this.currentState = 'Move Forward';
            }

            this.move.x = -this.speed;
        }

        const right = () => {
            if (!this.isJump) {
                this.currentState = 'Move Backward';
            }

            this.move.x = this.speed;
        }
        const jump = () => {
            if (!this.isJump) {
                this.move.y = -this.jumpStrength;
                this.currentState = 'Jump';
            }
        }
        const kick = () => {

        }

        const idle = () => {
            if (!this.isJump) {
                this.currentState = "Idle";
                this.move.x = 0;
            }
        }

        return {left, right, jump, kick, idle}

    }

    randomMove() {
        const moves = ['kick', 'jump', 'jump', 'jump', 'left', 'jump', 'left', 'right', 'kick', 'idle', 'right'];
        setInterval(() => {
            this.action()[moves[Math.floor(Math.random() * moves.length)]]();
        }, 1000);
    }

    create() {
        super.create();
        this.randomMove();
        this.change(this.el, 'transform', 'scale(-1, 1)')
    }
}
