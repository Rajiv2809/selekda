class Goal extends Util {
    constructor(x, y, w, h, isGoalPlayer) {
        super();
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.isGoalPlayer = isGoalPlayer;
    }
    create() {
        super.create();

        this.el = this.createEl({
            tag: 'img',
            classes: ['goal']
        });

        if (!this.isGoalPlayer) {
            this.change(this.el, 'transform', 'scale(-1, 1)')
        }

        this.el.src = './assets/Sprites/Goal - Side.png'

        this.changeStyle(this.el, this.x, this.y, this.w, this.h);
        game.el.appendChild(this.el);
    }
}