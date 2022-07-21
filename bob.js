class Bob {
    constructor (x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r);
        World.add(world,this.body)
    }
    display(){
        push();
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
        pop();
    }
}
