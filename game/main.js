class Game {
    constructor(canvas){
        this.game = ''
        this.ball = ''
        this.level = ''
    }
    render(){
        this.player.draw();
    }
}
class Menu {
    constructor(game){
        this.game = game;
        this.instructionDiv = document.querySelector('.welcome');
        this.setUpGame = document.querySelector('.character-setup');



        this.agreeButton = document.getElementById('agree');
        this.usernameInput = document.getElementById('username');
    }
    setupEventListeners() {
        this.usernameInput.addEventListener('input', () => {
            this.agreeButton.disabled = !this.usernameInput.value.trim();
        });

        this.agreeButton.addEventListener('click', () => {
            this.username = this.usernameInput.value.trim();
            this.showGameSetup();
        });
        
    }
    showGameSetup() {
        this.instructionDiv.classList.add('hidden');
        this.setUpGame.classList.remove('hidden');
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
