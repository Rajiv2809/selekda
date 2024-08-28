class Game {
    constructor(canvas){
        this.canvas = canvas
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.counrty = null
        this.ball = null
        this.level = null
        this.startGame = false;
        this.difficulty = level;
    }
    render(){
        this.player.draw();
    }
}
class Menu {
    constructor(game){
        this.game = game;
        this.welcome = document.querySelector('.welcome');
        this.setUpGame = document.querySelector('.character-setup');



        this.agreeButton = document.getElementById('agree');
        this.countrySelect = document.getElementById('country');
        this.levelSelect = document.getElementById('level');
        this.ballSelect = document.getElementById('ball');
        this.usernameInput = document.getElementById('username');
        this.playButton = document.getElementById('play');


        this.countdownDiv = document.querySelector('.countdown');
        this.countdownTimer = document.getElementById('countdown-timer');
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
        this.levelSelect.addEventListener('change', () => {
            this.game.country = this.levelSelect.value;
            this.checkPlayButton();
        });
        this.ballSelect.addEventListener('change', () => {
            this.game.ball = this.levelSelect.value;
            console.log( this.game.ball);
            
            this.checkPlayButton();
        });

    }
    checkPlayButton() {
        
        this.playButton.disabled = !(this.game.counrty && this.game.level && this.game.ball);
    }
    
    showGameSetup() {
        this.welcome.classList.add('hidden');
        this.setUpGame.classList.remove('hidden');
    }
    startCountdown() {
        this.characterSelectDiv.classList.add('hidden');
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
    
}




window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 600;
    
    

    const game = new Game(canvas,);
    const menu = new Menu(game)
    menu.setupEventListeners()
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (game.character && game.ball && game.level) {
            game.render()
        }
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});
