class Edges{
    constructor(x,y,width,height){

        var options={
            'isStatic':true,
            'restitution':0,
            'friction':1.0,
            'density':1.2   
        }

this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world, this.body);

    }
    display(){
rectMode(CENTER)
var pos = this.body.position
rect(pos.x,pos.y,this.width,this.height)


    }
}