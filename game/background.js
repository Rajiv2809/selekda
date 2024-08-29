class Background {
    constructor(game) {
        this.game = game;
        this.ctx = game.ctx;

        // Initialize the Image object
        this.bg = new Image();

        // Set the image source
        this.bg.src = 'GAME_MEDIA/Sprites/background1.jpg'; // Ensure the path is correct

        // Optional: Log when the image is loaded
        this.bg.onload = () => {
            console.log('Background image loaded');
        };
    }

    draw() {
        if (this.bg.complete) {
            this.ctx.drawImage(this.bg, 0, 0, this.game.width, this.game.height);
        }
    }
}
