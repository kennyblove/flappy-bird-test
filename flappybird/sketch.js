var game;
var bird;
var pipes = [];
var score;
var frames = 1;

function setup() {
    createCanvas(800,600);
    game = new Game();
    bird = new Bird();
    pipes.push(new Pipe(game));
    score = new Score();
}

function draw() {
    background(0);
    bird.update();
    bird.show();

    if (frames % game.pipeFrequency == 0) {
        pipes.push(new Pipe(game));
        frames = 0;
    }

    for (var i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
            score.hits += 1;
        }
        if (pipes[i].cleared(bird)) {
            score.cleared += 1;
        }
        if (pipes[i].offScreen()) {
            pipes.splice(i,1);
        }
    }

    score.show();
    if (game.levelUp(score.cleared)) {
    }
    game.setPipeFrequency(score.hits);
    frames++;
}

function keyPressed() {
    if (key == ' ') {
        bird.up();
    }
}