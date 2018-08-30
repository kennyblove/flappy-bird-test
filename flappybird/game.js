function Game() {
    this.level = 0;
    this.clearedPerLevel = 1;
    this.startSpeed = 4;
    this.maxSpeed = width - (width * 0.07);
    this.speed = 4;
    this.startPipeFrequency = 100;
    this.lowestPipeFrequency = 1;
    this.pipeFrequency = 100;

    this.levelUp = function(cleared) {
        this.level = parseInt(cleared / this.clearedPerLevel);
        this.speed = this.startSpeed + this.level;
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
    }

    this.setPipeFrequency = function(hits) {
        this.pipeFrequency = this.startPipeFrequency - hits;
        if (this.pipeFrequency < this.lowestPipeFrequency) {
            this.pipeFrequency = this.lowestPipeFrequency;
        }
    }
}