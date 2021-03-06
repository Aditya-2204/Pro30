class Box{
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            //'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
        this.visibility = 255;
    }
    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility-5;
        tint(255, this.visibility);
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    }
}