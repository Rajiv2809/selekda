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

    update() {

        this.speedY += this.gravity;
        this.y += this.speedY;
        this.x += this.speedX;

   
        if (this.isTouchingBottom()) {
            this.y = this.game.height - this.height-100;
            this.speedY = 0;
            this.grounded = true;
        } else {
            this.grounded = false;
        }

        if (this.touchingLeft()) {
            this.x = 0;
        }
        if (this.touchingRight()) {
            this.x  = this.game.width - this.spriteWidth - 200;
        }
    }

    isTouchingBottom() {
        return this.y >= this.game.height - this.height - 100;
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
        return this.x <= 0;
    }

    touchingRight() {
        return this.x >= this.game.width - this.spriteWidth - 200;
    }


  
  
   
    checkIfPlayerFall(){
        if(this.y >= this.game.height -this.height){
            this.x = this.game.width - (this.game.width/2) - 40;
            this.y = this.game.height - 40 - (this.game.height/2);
            this.game.health = this.game.health - 1;
        }
    }
    isCollidindBox(box){
        const playerRight = this.x + this.width;
        const playerBottom = this.y + this.height;
        const boxRight = box.x + box.width;
        const boxBottom = box.y + box.height;
        return this.x < boxRight &&
            playerRight > box.x &&
            this.y < boxBottom &&
            playerBottom > box.y;
    }
    checkCollidingBox(){
        this.game.boxes.forEach(box => {
            if(this.isCollidindBox(box)){
                if(box.color === 0){
                    this.game.health = this.game.health - 1;
                    this.game.boxes.splice(this.game.boxes.indexOf(box), 1)
                } else if(box.color === 1){
                    this.maxSpeedX = this.boostedSpeedX;
                    setTimeout(() => {
                        this.maxSpeedX = 4;
                    }, 3000);
                    this.game.boxes.splice(this.game.boxes.indexOf(box), 1);
                }else if(box.color === 2){
                    if(this.game.health < 5){
                        this.game.health = this.game.health + 1;
                    }

                    this.game.boxes.splice(this.game.boxes.indexOf(box), 1)
                }else if(box.color === 3){
                    this.game.lifeTime = this.game.lifeTime + 10000
                    this.game.boxes.splice(this.game.boxes.indexOf(box), 1)
                }
                

            }
        })
        
        
    }

    isTouchingPlatform(platform) {
        const playerBottom = this.y + this.height;
        const playerRight = this.x + this.width;
        const playerLeft = this.x;

        const platformTop = platform.y;
        const platformRight = platform.x + platform.width;
        const platformLeft = platform.x;

        // Check if the player is falling onto the platform
        if (playerBottom >= platformTop && playerBottom <= platformTop + this.speedY &&
            playerRight > platformLeft && playerLeft < platformRight) {
            return true;
        }
        return false;
    }

    
}
