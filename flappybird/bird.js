function Bird() {
    this.y = height/2;
    this.x = 64;

    this.gravity = 0.7;
    this.velocity = 0;
    this.lift = -15;
    this.airResistance = 0.9;

    this.up = function() {
        this.velocity += this.lift;
    }

    this.show = function() {
        fill(255);
        ellipse(this.x,this.y,32,32);        
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.velocity *= this.airResistance;
        this.y += this.velocity;
        //console.log(this.velocity);
        
        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}
