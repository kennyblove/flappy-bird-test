function Score() {
    this.cleared = 0;
    this.hits = 0;

    this.fontSize = 40;
    textSize(this.fontSize);
    textAlign(RIGHT);

    this.show = function() {
        fill(255);
        text("Cleared: "  + this.cleared, width, 40);
        text("Hits: " + this.hits, width, 80);
    }

    this.update = function() {
    }
}