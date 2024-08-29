class Ball {
    constructor(game) {
        this.game = game;
        this.ctx = game.ctx;

        
        this.radius = 15; 
        this.x = game.width / 2;
        this.y = game.height / 2; 
        this.dx = 4; 
        this.dy = 4; 
        this.gravity = 0.2; 
        this.friction = 0.99;
        this.bounceFactor = 0.7; 

        
        this.platformY = game.height - 100;
        this.platformHeight = 20;
        this.platformWidth = game.width; 
    }

    update() {

        this.dy += this.gravity;

      
        this.x += this.dx;
        this.y += this.dy;
        if (this.y + this.radius > this.platformY &&
            this.x > 0 && this.x < this.platformWidth) {
            this.y = this.platformY - this.radius; 
            this.dy = -this.dy * this.bounceFactor; 
        }

        if (this.x - this.radius < 0) {
            this.x = this.radius; 
            this.dx = -this.dx * this.bounceFactor; 
        } else if (this.x + this.radius > this.game.width) {
            this.x = this.game.width - this.radius; 
            this.dx = -this.dx * this.bounceFactor; 
        }

        
        if (this.y - this.radius < 0) {
            this.y = this.radius; 
            this.dy = -this.dy * this.bounceFactor; 
        }

       
        this.dx *= this.friction;
        this.dy *= this.friction;

        
        if (Math.abs(this.dx) < 0.1) this.dx = 0;
        if (Math.abs(this.dy) < 0.1) this.dy = 0;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'red'; 
        this.ctx.fill();
        this.ctx.closePath();
    }
}
