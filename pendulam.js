class Pendulam {
    constructor(x,y) {
      var options = {
      'restitution':5,
      'friction':4,
      'density':4
  
        }
      
       this.body = Bodies.circle(100,100,30,options);
      this.radius = 30
      World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
  
    push();
   translate(pos.x,pos.y);
   rotate(angle);
   
   ellipseMode(RADIUS);
   strokeWeight("white");
   fill("white");
      ellipse(0, 0,35 );
   
      pop();
    }
  };
