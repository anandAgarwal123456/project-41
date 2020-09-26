class Drop {
    constructor(x,y) {
        var options= {
            friction: 0.1
        }
        this.x=x;
        this.y=y;
        this.r= 5;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);

    }

    display() {
        var pos= this.body.position;
        push();
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }

    updateY() {
        
        if(this.body.position.y > height) {
            Matter.Body.setPosition( this.body, {x: random(0,400), y: random(0,400)});
        }
    }
        
}