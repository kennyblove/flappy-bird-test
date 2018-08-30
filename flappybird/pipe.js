function Pipe(game) {
    this.width = 20;
    this.x = width;
    this.opening = 140;
    this.openingCenter = (random(height - this.opening) + this.opening/2);
    this.top = this.openingCenter - (this.opening/2);
    this.bottom = this.openingCenter + (this.opening/2);
    //this.speed = game.speed;
    this.highlight = false;
    this.alreadyPassed = false;

    this.show = function() {
        fill(255);
        if (this.highlight) {
            fill(255,0,0);
        }
        rect(this.x, 0, this.width, this.top);
        rect(this.x, this.bottom, this.width, height - this.bottom);
    }

    this.update = function() {
        this.x -= game.speed;
    }

    this.offScreen = function() {
        if (this.x < -this.width) {
            return true;
        } else {
            return false;
        }
    }

    this.hits = function(bird) {
        if (this._hitsTop(bird) || this._hitsBottom(bird)) {
            this.highlight = true;
            if (this.alreadyPassed == false) {
                this.alreadyPassed = true;
                return true;
            } else {
                return false;
            }
        } else {
            this.highlight = false;
            return false;
        }
    }

    this._hitsTop = function(bird) {
        if ((bird.y < this.top) && (bird.x > this.x) && (bird.x < (this.x + this.width))) {
            return true;
        } else {
            return false;
        }
    }

    this._hitsBottom = function(bird) {
        if ((bird.y > this.bottom) && (bird.x > this.x) && (bird.x < (this.x + this.width))) {
            return true;
        } else {
            return false;
        }
    }

    this.cleared = function(bird) {
        if ((this.alreadyPassed == false) && ((this.x + this.width) < bird.x)) {
            this.alreadyPassed = true;
            return true;
        } else {
            return false;
        }
    }
}