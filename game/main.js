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
        
    }
    setupEventListeners() {
    
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
