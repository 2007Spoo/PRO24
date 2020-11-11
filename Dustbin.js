class Dustbin
{
    constructor(x, y,width, height) {
        var options = {
            'isStatic': false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x= x;
        this.y= y;
        this.width= width;
        this.height= height;
        World.add(world, this.body);
      }
      display(){
         push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        shapeColor("red");
        pop();
      }
}