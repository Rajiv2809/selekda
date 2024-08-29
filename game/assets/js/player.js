class Player extends Util {
    constructor(x, y, w, h, country) {
        super();
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.country = country;

        this.states = {
            'Falling Down': 4,
            'Jump': 4,
            'Idle': 17,
            'Kick': 8,
            'Move Forward': 9,
            'Move Backward': 9,
        };
        this.images = [];

        this.move = {
            x: 0,
            y: 0,
        }
        this.speed = 6;
        this.weight = 1;
        this.jumpStrength = 20;

        this.currentState = 'Idle';
        this.currentIndex = 0;
        this.isJump = false;
        this.isKicked = false;

    }

    create() {
        super.create();
        this.generate();

        this.el = this.createEl({
            tag: 'img',
            classes: ['player']
        });

        game.el.appendChild(this.el);

        this.animate();
    }

    update() {
        super.update();

        this.x += this.move.x;
        this.y += this.move.y;

        if (this.currentState === 'Idle' && this.isKicked) {
            this.currentState = 'Kick';
        }


        if (this.x < 50) {
            this.x = 50;
            this.move.x = 0;
        }

        if (this.x > 880) {
            this.x = 880;
            this.move.x = 0;
        }

        if (this.y < 400) {
            this.isJump = true;
            this.move.y += this.weight;

            if (this.move.y > 0) {
                this.currentState = 'Falling Down';
            }
        } else {
            this.isJump = false;
            this.move.y = 0;
            this.y = 400;
        }


        this.changeStyle(this.el, this.x, this.y, this.w, this.h);
    }

    animate() {
        setInterval(() => {
            if (!game.isPaused) {
                if (this.images[this.currentState][this.currentIndex]) {
                    this.el.src = this.images[this.currentState][this.currentIndex];
                }

                if (this.currentIndex < this.images[this.currentState].length - 1) {
                    this.currentIndex++;
                } else {
                    this.currentIndex = 0;
                }
            }
        }, 5000);
    }

    action() {
        const left = () => {
            if (!this.isJump) {
                this.currentState = 'Move Backward';
            }

            this.move.x = -this.speed;
        }

        const right = () => {
            if (!this.isJump) {
                this.currentState = 'Move Forward';
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
            this.isKicked = true;
        }

        const idle = () => {
            if (!this.isJump && !this.isKicked) {
                this.currentState = "Idle";
                this.move.x = 0;
            }
        }

        return {left, right, jump, kick, idle}
    }

    generate() {
        this.images = [];

        const path = {
            'Brazil': 'Character 01 - Brazil',
            'England': 'Character 02 - England',
            'Spain': 'Character 03 - Spain',
            'Japan': 'Character 04 - Japan',
            'Netherlands': 'Character 05 - Netherlands',
            'Portugal': 'Character 06 - Portugal',
            'Germany': 'Character 07 - Germany',
            'Italy': 'Character 08 - Italy',
        }

        Object.entries(this.states).forEach(([state, count]) => {
            this.images[state] = [];
            for (let i = 0; i <= count; i++) {
                this.images[state].push(`./assets/Sprites/Characters/${path[this.country]}/${state}/${state}_${i < 10 ? '00' + i : '0' + i}.png`);
            }
        })
    }
}