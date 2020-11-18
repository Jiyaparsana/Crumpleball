

class Dustbin{
    constructor(x,y,width,height){

        var options={
            'isStatic':false,
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
        
this.body = Bodies.rectangle(x,y,width,height);
this.width = 150;
this.height = 150;
this.image=loadImage("dustbin.png")
World.add(world, this.body);

    }
    display(){
rectMode(CENTER)
var pos = this.body.position
imageMode(CENTER);
image(this.image, pos.x, pos.y, this.width, this.height);

    }
}