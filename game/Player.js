class Player {
    constructor(game) {
        this.game = game;
        this.x = 200;
        this.y = game.height - 200;
        this.spriteHeight = 80;
        this.spriteWidth = 80;
        this.height = 40;
        this.width = 40;
        this.speedX = 0;
        this.maxSpeedX = 4;
        this.speedY = 0;
        this.jumpSpeed = -10;
        this.gravity = 0.35;
        this.grounded = false;
        this.boostedSpeedX = 6;
    }

    draw() {
        this.game.ctx.fillStyle = 'red';
        this.game.ctx.fillRect(this.x, this.y, this.spriteWidth, this.spriteHeight);
    }

    update(ball) {
        this.speedY += this.gravity;
        this.y += this.speedY;
        this.x += this.speedX;

        if (this.isTouchingBottom()) {
            this.y = this.game.height - this.height - 120;
            this.speedY = 0;
            this.grounded = true;
        } else {
            this.grounded = false;
        }

        if (this.touchingLeft()) {
            this.x = 50;
        }
        if (this.touchingRight()) {
            this.x = this.game.width - this.spriteWidth - 50;
        }

        // Check for collision with the ball and handle bouncing
        if (this.isCollidingWithBall(ball)) {
            this.handleBallCollision(ball);
        }
    }

    isCollidingWithBall(ball) {
        const ballRight = ball.x + ball.radius;
        const ballLeft = ball.x - ball.radius;
        const ballTop = ball.y - ball.radius;
        const ballBottom = ball.y + ball.radius;

        const playerRight = this.x + this.width;
        const playerLeft = this.x;
        const playerTop = this.y;
        const playerBottom = this.y + this.height;

        return ballRight > playerLeft &&
            ballLeft < playerRight &&
            ballBottom > playerTop &&
            ballTop < playerBottom;
    }

    handleBallCollision(ball) {
        const ballCenterX = ball.x;
        const ballCenterY = ball.y;
        const playerCenterX = this.x + this.width / 2;
        const playerCenterY = this.y + this.height / 2;

        const dx = ballCenterX - playerCenterX;
        const dy = ballCenterY - playerCenterY;
        const angle = Math.atan2(dy, dx);

        const speed = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
        ball.dx = Math.cos(angle) * speed;
        ball.dy = Math.sin(angle) * speed;

        const overlap = ball.radius - Math.sqrt(dx * dx + dy * dy);
        if (overlap > 0) {
            ball.x += Math.cos(angle) * overlap;
            ball.y += Math.sin(angle) * overlap;
        }

        
        ball.dx *= 1.1;
        ball.dy *= 1.1;
    }
    

    isTouchingBottom() {
        return this.y >= this.game.height - this.height - 120;
    }

    isTouchingTop() {
        return this.y <= 0;
    }

    startMoveRight() {
        this.speedX = this.maxSpeedX;
    }

    startMoveLeft() {
        this.speedX = -this.maxSpeedX;
    }

    stopMoveRight() {
        if (this.speedX > 0) this.speedX = 0;
    }

    stopMoveLeft() {
        if (this.speedX < 0) this.speedX = 0;
    }

    playerJump() {
        if (this.grounded) {
            this.speedY = this.jumpSpeed;
            this.grounded = false;
        }
    }

    touchingLeft() {
        return this.x <= 50;
    }

    touchingRight() {
        return this.x >= this.game.width - this.spriteWidth - 50;
    }
}
