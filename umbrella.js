class Umbrella{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.image=loadImage("walking_1.png");

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display() {

        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y+70,300,300);
        pop();
    }
}