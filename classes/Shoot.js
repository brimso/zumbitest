class Bullet{
    constructor(x, y){
        this.x = x
        this.y = y
        this.r = 20
        var options = {
            restitution: 0,
            frictionAir: 0.9,
        }
        this.body = Bodies.circle(x, y, this.r, options)
        this.image = loadImage("./assets/bullet.png")
        World.add(World,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

    shoot(){
        var velocity = 5;
        Matter.Body.setVelocity(this.body,
            { x: velocity.x,
            y: velocity.y
            });
    }
}