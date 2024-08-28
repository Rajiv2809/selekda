class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.country = null;
        this.ball = null;
        this.level = null;
        this.startGame = false;
    }
    render() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(50, 50, 100, 100); 
    }
}

class Menu {
    constructor(game) {
        this.game = game;
        this.welcome = document.querySelector('.welcome');
        this.setUpGame = document.querySelector('.character-setup');
        this.countdownDiv = document.querySelector('.countdown');
        this.countdownTimer = document.getElementById('countdown-timer');
        
        this.agreeButton = document.getElementById('agree');
        this.countrySelect = document.getElementById('country');
        this.levelSelect = document.getElementById('level');
        this.ballSelect = document.getElementById('ball');
        this.usernameInput = document.getElementById('username');
        this.playButton = document.getElementById('play');
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {

        this.usernameInput.addEventListener('input', () => {
            this.agreeButton.disabled = !this.usernameInput.value.trim();
        });


        this.agreeButton.addEventListener('click', () => {
            this.username = this.usernameInput.value.trim();
            this.showGameSetup();
        });

        this.levelSelect.addEventListener('change', () => {
            this.game.level = this.levelSelect.value;
            this.checkPlayButton();
        });
        
        this.countrySelect.addEventListener('change', () => {
            this.game.country = this.countrySelect.value;
            this.checkPlayButton();
        });
        
        this.ballSelect.addEventListener('change', () => {
            this.game.ball = this.ballSelect.value;
            this.checkPlayButton();
        });
        this.playButton.addEventListener('click', () => {
            this.startCountdown();
        });
    }
    
    checkPlayButton() {
        this.playButton.disabled = !(this.game.country && this.game.ball && this.game.level);
    }

    showGameSetup() {
        this.welcome.classList.add('hidden');
        this.setUpGame.classList.remove('hidden');
    }

    startCountdown() {
        this.setUpGame.classList.add('hidden');
        this.countdownDiv.classList.remove('hidden');
        let count = 3;
        this.countdownTimer.textContent = count;

        const interval = setInterval(() => {
            count--;
            if (count > 0) {
                this.countdownTimer.textContent = count;
            } else {
                clearInterval(interval);
                this.startGame();
            }
        }, 1000);
    }
    
    startGame() {
        this.countdownDiv.classList.add('hidden');
        this.game.startGame = true;
        const canvas = document.getElementById('canvas');
        canvas.classList.remove('hidden');
    }
}


window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 600;

    const game = new Game(canvas);
    const menu = new Menu(game);
    
    // Game loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (game.startGame) {
            game.render();
        }
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});
