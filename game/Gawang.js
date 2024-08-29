class Gawang {
    constructor(game, enemy) {
        this.game = game;
        this.ctx = game.ctx;
        this.bg = new Image();
        this.bg.src = 'GAME_MEDIA/Sprites/gawang.png'; 
        this.bg.onload = () => {
            console.log('Background image loaded');
        };
        this.enemySide = enemy;
    }

    draw() {
        // Save the current canvas state
        this.ctx.save();

        // Determine the position and flip based on the enemySide
        const x = this.enemySide === 'enemy' ? this.game.width - 150 : 50;
        const flipHorizontal = this.enemySide === 'enemy';

        // Translate the context to the image center, apply flip, and draw the image
        this.ctx.translate(x + 50, 310 + 100); // Move the origin to the center of the image
        if (flipHorizontal) {
            this.ctx.scale(-1, 1); // Flip horizontally
        }
        this.ctx.drawImage(this.bg, -50, -100, 100, 200); // Draw the image, offset by half width/height
        this.ctx.restore(); // Restore the canvas state to its original configuration
    }
}

