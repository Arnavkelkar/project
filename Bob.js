class Bob{
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,30,options);
        World.add(world, this.body)
    }
        display(){
            ellipseMode(RADIUS);
            fill("green");
            ellipse(this.body.position.x,this.body.position.y,30,30);
        }
    }