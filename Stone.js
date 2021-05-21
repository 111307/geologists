class Stone {
    constructor(x, y, r) {
        var options = {
            resititution: 0.8,
            friction: 0.9,
            deensity: 12
        }
        this.x = x;
        this.y = y;
        this.r = r
        this.body = Bodies.rectangle(this.x, this.y, (this.r - 20) / 2, options)
        World.add(world, this.body);

    }
    display() {
        var stonepos = this.body.position;
        push()
            // translate(stonepos.x, stonepos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill("black");

        ellipse(stonepos.x, stonepos.y, this.r, this.r)
        pop()
    }

}