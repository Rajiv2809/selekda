let game;
window.addEventListener('DOMContentLoaded', function () {
    class Game extends Util {
        constructor() {
            super();
            this.items = [];
            this.goals = [];
            this.playername = 'Andiay';
            this.isPaused = false;
            this.isGameOver = false;
            this.el = document.querySelector('.playground');
            this.keys = {};

            this.scores = {
                player: 0,
                opponent: 0,
            }

            this.levels = {
                'Easy': 30,
                'Medium': 20,
                'Hard': 15,
            };

            this.country = {
                player: 'Brazil',
                opponent: 'England',
            }


            this.player = new Player(150, 400, 120, 120, 'Brazil');
            this.opponent = new Opponent(700, 400, 120, 120, 'Brazil');
            this.ball = new Ball(480, 100, 50, 50, 'Ball 01');
            this.timer = 30;
        }

        render() {
            this.create();
            this.update();
            this.listen();
            this.startTimer();
        }

        startTimer() {
            setInterval(() => {
                if (!this.isPaused && this.timer > 0) {
                    this.timer--;

                    document.querySelector('.timeleft').textContent = this.timer;
                }
            }, 1000);
        }


        handleGameOver() {
            if (this.timer <= 0 && this.scores.player !== this.scores.opponent && !this.isGameOver) {
                this.gameOver();
            }
        }

        gameOver() {
            document.querySelector('.modal-game-over').classList.remove('hide');
            this.isGameOver = true;
            this.isPaused = true;

            document.querySelector('#btn-restart').addEventListener('click', () => {
                this.restart();
            });

            document.querySelector('#btn-save').addEventListener('click', () => {
                alert('Data Saved');

                this.save();
            });

        }

        create() {
            super.create();
            this.player.create();
            this.opponent.create();
            this.ball.create();
            this.generateGoals();
            this.generateItems();
        }

        update() {
            super.update();
            requestAnimationFrame(this.update.bind(this));

            if (!this.isPaused) {
                this.player.update();
                this.opponent.update();
                this.ball.update();

                this.handleItems();
                this.handleMovements();
            }

            this.updateGameStatus();
            this.handleGameOver()
        }

        listen() {
            window.addEventListener('keydown', (e) => {
                this.keys[e.key] = true;

                if (e.key === 'Escape') {
                    this.pause();
                }
            });

            window.addEventListener('keyup', (e) => {
                this.keys[e.key] = false;
            });

            document.querySelector('#btn-match-history').addEventListener('click', () => {
                this.history();
                this.isPaused = true;
                document.querySelector('.modal-history').classList.toggle('hide');
            })

            document.querySelector('#btn-close-history').addEventListener('click', () => {
                this.isPaused = false;
                document.querySelector('.modal-history').classList.toggle('hide');
            })
        }

        handleMovements() {
            const {w, W, A, a, D, d} = this.keys;

            if (A || a) {
                this.player.action().left();
            } else if (D || d) {
                this.player.action().right();
            } else {
                this.player.action().idle();
            }

            if (this.keys[' '] && !this.player.isKicked) {
                this.player.action().kick();

                setTimeout(() => {
                    this.player.isKicked = false;
                }, 1000)
            }
            if (w || W) {
                this.player.action().jump();
            }
        }

        generateItems() {
            const itemsArray = ['Decrease Ball', 'Diamond Ice', 'Increase Ball'];
            setInterval(() => {
                this.items.push(new Item(Math.floor(Math.random() * 700) + 200, Math.floor(Math.random() * 400) + 100, 50, 50, itemsArray[Math.floor(Math.random() * itemsArray.length)]));

                this.items[this.items.length - 1].create();
            }, 5000)

        }

        handleItems() {
            this.items.forEach((item) => {
                item.update();
            })
        }


        generateGoals() {
            this.goals.push(new Goal(50, 310, 100, 200, true));
            this.goals.push(new Goal(900, 310, 100, 200, false));

            this.goals.forEach((goal) => {
                goal.create();
            })
        }

        pause() {
            if (!this.isPaused) {
                this.isPaused = true;
            } else {
                this.isPaused = false;
            }

            document.querySelector('.modal-pause').classList.toggle('hide');
        }

        updateGameStatus() {

            const elements = document.querySelectorAll('.score-player, .score-opponent, .player-country, .opponent-country, .player-flag, .opponent-flag, .player-country-name, .playername');

            elements.forEach((el) => {
                if (el.classList.contains('score-player')) {
                    el.textContent = this.scores.player;
                } else if (el.classList.contains('score-opponent')) {
                    el.textContent = this.scores.opponent;
                } else if (el.classList.contains('playername')) {
                    el.textContent = this.playername;
                } else if (el.classList.contains('player-country-name')) {
                    el.textContent = this.country.player + ' (' + this.playername + ')';
                } else if (el.classList.contains('player-country')) {
                    el.textContent = this.country.player;
                } else if (el.classList.contains('opponent-country')) {
                    el.textContent = this.country.opponent;
                } else if (el.classList.contains('player-flag')) {
                    el.src = `./assets/Sprites/Flag/${this.country.player}.png`;
                } else if (el.classList.contains('opponent-flag')) {
                    el.src = `./assets/Sprites/Flag/${this.country.opponent}.png`;
                }
            });

        }

        save() {
            const date = new Date();
            const newData = {
                playername: this.playername,
                playerScore: this.scores.player,
                opponentScore: this.scores.opponent,
                playerCountry: this.country.player,
                opponentCountry: this.country.opponent,
                date: (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear(),
            }

            let oldData = JSON.parse(localStorage.getItem('histories'));
            if (!oldData) {
                oldData = [];
            }
            oldData.push(newData);

            localStorage.setItem('histories', JSON.stringify(oldData));

            this.restart();
        }

        restart() {
            window.location.reload();
        }

        history() {
            let data = JSON.parse(localStorage.getItem('histories'));

            function renderTable(data) {
                let dump = '';

                data.forEach((item) => {
                    dump += `
              <tr>
                  <td>${item.playername}</td>
                  <td>${item.playerScore}</td>
                  <td>${item.playerCountry}</td>
                  <td>${item.opponentScore}</td>
                  <td>${item.opponentCountry}</td>
                  <td>${item.date}</td>
              </tr>
            `;
                });

                let tbody = document.querySelector('tbody');
                tbody.innerHTML = dump;
            }

            renderTable(data);
            document.querySelector('#select-orderby').addEventListener('change', (e) => {
                if (e.target.value === 'score') {
                    data.sort((a, b) => b.playerScore - a.playerScore);
                } else {
                    data.sort((a, b) => new Date(b.date) - new Date(a.date));
                }

                renderTable(data);
            });
        }

        play(playerCountry, opponentCountry, ball, playername, level) {
            this.player = new Player(150, 400, 120, 120, playerCountry);
            this.opponent = new Opponent(700, 400, 120, 120, opponentCountry);
            this.ball = new Ball(480, 100, 50, 50, ball);
            this.timer = this.levels[level];

            this.playername = playername;
            document.querySelector('.playername').textContent = playername;

            this.country = {
                player: playerCountry,
                opponent: opponentCountry,
            }


            for (let i = 0; i < 20; i++) {
                const el = this.createEl({
                    tag: 'img', classes: ['flag-list'],
                })

                if (i % 2 === 0) {
                    el.src = `./assets/Sprites/Flag/${this.country.opponent}.png`;
                } else {
                    el.src = `./assets/Sprites/Flag/${this.country.player}.png`;
                }
                document.querySelector('.flag-list-wrapper').appendChild(el);
            }

            this.render();
        }
    }

    game = new Game()

    document.querySelector('#btn-instruction').addEventListener('click', function () {
        document.querySelector('.instruction').classList.toggle('hide-instruction');
    });

    document.querySelector('#btn-close').addEventListener('click', function () {
        document.querySelector('.instruction').classList.toggle('hide-instruction');
    });

    document.querySelector('#btn-randomize').addEventListener('click', function () {
        const btnRandomize = this;
        const opponentCountrySelect = document.querySelector('#select-opponent-country');
        const playerCountry = document.querySelector('#select-player-country').value;

        btnRandomize.textContent = '...';
        opponentCountrySelect.disabled = true;

        setTimeout(() => {
            let newOpponentCountry;
            const options = Array.from(opponentCountrySelect.options);

            do {
                newOpponentCountry = options[Math.floor(Math.random() * options.length)].value;
            } while (newOpponentCountry === playerCountry);

            opponentCountrySelect.value = newOpponentCountry;
            btnRandomize.textContent = 'Random';
            opponentCountrySelect.disabled = false;
            validate();
        }, 1000);
    });


    const selects = document.querySelectorAll('.select');
    const playerInput = document.querySelector('#input-player-name');
    const btnPlay = document.querySelector('#btn-play');

    function validate() {
        const isInvalid = Array.from(selects).some((s) => s.value === '');

        if (isInvalid || playerInput.value.trim() === '') {
            btnPlay.disabled = true;
        } else {
            btnPlay.disabled = false;
        }
    }


    playerInput.addEventListener('input', function () {
        validate();
    });

    selects.forEach((s) => {
        s.addEventListener('change', function () {
            validate()
        });
    });

    const modalCountdown = document.querySelector('.modal-countdown');
    const countdownText = document.querySelector('.countdown');
    let countdown = 3;
    let countdownInterval = null;

    function start() {
        modalCountdown.classList.toggle('hide');

        countdownInterval = setInterval(() => {
            countdown--;
            countdownText.textContent = countdown;

            if (countdown <= 0) {
                clearInterval(countdownInterval);
                modalCountdown.classList.toggle('hide');

                let playerCountry = document.querySelector('#select-player-country').value;
                let opponentCountry = document.querySelector('#select-opponent-country').value;
                let ball = document.querySelector('#select-ball').value;
                let level = document.querySelector('#select-level').value;
                let playername = document.querySelector('#input-player-name').value;

                game.play(playerCountry, opponentCountry, ball, playername, level);
            }
        }, 1000)
    }

    btnPlay.addEventListener('click', function () {
        document.querySelector('.game-welcome').style.display = 'none';
        start();
    });
});