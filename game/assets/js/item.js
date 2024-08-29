class Item extends Util {
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
    }
    update() {
        super.update();


        this.changeStyle(this.el, this.x, this.y, this.w, this.h);
    }

    remove() {
        this.el.remove();
    }
    create() {
        super.create();
        this.el = this.createEl({
            tag: 'img',
            classes: ['item']
        });

        this.el.src = `./assets/Sprites/${this.type}.png`;

        game.el.appendChild(this.el);
    }
}